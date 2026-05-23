from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import BugReport
from app.evaluator import evaluate_report

app = FastAPI()

app.add_middleware(
	CORSMiddleware,
	allow_origins=["*"],
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)

@app.get("/")
def root():
	return {
		"message":"NLP service is running"
	}
@app.post("/evaluate")
def evaluate(report: BugReport):
  result = evaluate_report(report.dict())
  return result