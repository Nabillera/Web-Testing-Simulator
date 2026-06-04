import spacy
from app.bug_db import BUGS_BY_LEVELS

nlp = spacy.load("en_core_web_sm")

def calculate_similarity(user_text, reference_examples):
	if not user_text:
		return 0
	
	user_doc = nlp(user_text)
	best_similarity = 0

	for example in reference_examples:
		example_doc = nlp(example)
		similarity = user_doc.similarity(example_doc)
		if similarity > best_similarity:
			best_similarity = similarity
	return best_similarity

def generate_feedback(section, similarity):
	if similarity > 0.85:
		return f"{section} quality is awesome!"
	elif similarity >= 0.7:
		return f"{section} quality is good!"
	elif similarity >= 0.5:
		return f"{section} quality is not bad, but could use more detail"
	else: 
		return f"{section} does not sufficiently describe the issue :("

def evaluate_report(report):
	level = report["level"]
	bugs = BUGS_BY_LEVELS.get(level, [])
	best_bug_match = None
	best_bug_score = 0
	best_section_scores = {
        "title": 0,
        "stepsToReproduce": 0,
        "expectedResult": 0,
        "actualResult": 0
    }

	for bug in bugs:
		title_similarity = calculate_similarity(report["title"], bug["title_examples"])
		steps_similarity = calculate_similarity(report["stepsToReproduce"], bug["steps_examples"])
		expected_result_similarity = calculate_similarity(report["expectedResult"], bug["expected_examples"])
		actual_result_similarity = calculate_similarity(report["actualResult"], bug["actual_examples"])

		total_similarity = (
			title_similarity * 0.25 +
			steps_similarity * 0.35 +
			expected_result_similarity * 0.2 +
			actual_result_similarity * 0.2
		)
  
		if total_similarity > best_bug_score:
			best_bug_score = total_similarity
			best_bug_match = bug
			best_section_scores = {
				"title": round(title_similarity, 2),
				"stepsToReproduce": round(steps_similarity, 2),
				"expectedResult": round(expected_result_similarity, 2),
				"actualResult": round(actual_result_similarity, 2)
			}
  
	feedback = []
	rule_score = 100
	
	required_fields = ["title", "stepsToReproduce", "expectedResult", "actualResult"]
	for field in required_fields:
		if not report[field].strip():
			rule_score -= 15
			feedback.append(
				f"{field} field is empty!"
			) 
	if len(report["title"]) < 15:
		rule_score -= 10
		feedback.append("Bug title is not detailed enough")
	if len(report["stepsToReproduce"]) < 30:
		rule_score -= 10
		feedback.append("Reproduction steps are too short")
  
	bug_severity_match = False
	bug_type_match = False
	if best_bug_match:
		bug_severity_match = report["severity"] == best_bug_match["valid_severity"]
		bug_type_match = report["type"] == best_bug_match["valid_type"]
  
		if bug_severity_match:
			feedback.append("Bug severity is correct!")
		else:
			rule_score -= 10
			feedback.append(f"Expected bug severity: {best_bug_match["valid_severity"]}")
		
		if bug_type_match:
			feedback.append("Bug type is correct!")
		else:
			rule_score -= 10
			feedback.append(f"Expected bug type: {best_bug_match["valid_type"]}")
  
	feedback.append(generate_feedback("Title", best_section_scores["title"]))
	feedback.append(generate_feedback("Reproduction Steps", best_section_scores["stepsToReproduce"]))
	feedback.append(generate_feedback("Expected Result", best_section_scores["expectedResult"]))
	feedback.append(generate_feedback("Actual Result", best_section_scores["actualResult"]))
 
	nlp_score = best_bug_score * 100
	overall_score = round(rule_score * 0.4 + nlp_score * 0.6)

	return {
		"matchedBugId": best_bug_match["id"] if best_bug_match else None,
		"matchedBugTitle": best_bug_match["title_examples"][0] if best_bug_match else None,
		"overallScore": overall_score,
		"ruleScore": round(rule_score),
		"nlpScore": round(nlp_score),
		"matchedSeverity": bug_severity_match,
		"matchedType": bug_type_match,
		"sectionScore": {
			"title": best_section_scores["title"],
			"steps": best_section_scores["stepsToReproduce"],
			"expectedResult": best_section_scores["expectedResult"],
			"actualResult": best_section_scores["actualResult"]
		},
		"feedback": feedback
	}