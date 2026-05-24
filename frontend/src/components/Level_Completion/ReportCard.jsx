export function ReportCard({ idx, title, overallScore, feedback }) {
  return (
    <div className="font-inconsolata flex flex-col h-[90%] bg-[#F2F2F2] rounded-[5px] border p-[10px]">
      <span>{`Report #${idx}`}</span>
      <span>{`Matched Bug: ${title}`}</span>
      <span>{`Overall Score: ${overallScore}`}</span>
      <div className="flex flex-col">
        <span>Feedback:</span>
        <div>
          {feedback.map((statement) => (
            <p>{statement}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
