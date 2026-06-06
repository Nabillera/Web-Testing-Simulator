import { useState } from "react";
import Arrow from "../../assets/arrow.svg";

export function ReportCard({
  bugIcon,
  idx,
  title,
  overallScore,
  feedback,
  submittedReport,
}) {
  const [openDropdowns, setOpenDropdowns] = useState({
    reportData: false,
    feedback: false,
  });

  const handleOpenDropdown = (field) => {
    setOpenDropdowns((prev) => ({ ...prev, [field]: !prev[field] }));
    console.log(openDropdowns);
  };

  return (
    <div className="font-inconsolata flex flex-col w-full min-h-[320px] bg-[#F2F2F2] rounded-[5px] border-2 border-[#0A5598] overflow-y-auto">
      <div className="flex flex-col px-[10px] pt-[10px] text-[18px]">
        <div className="flex gap-x-[10px]">
          <img src={bugIcon} className="w-[20px]" />
          <span className="text-[#0A5598] font-bold">{`Report #${idx}`}</span>
        </div>

        <span>{`Matched Bug: ${title || "None, apparently"}`}</span>
        <span>{`Overall Score: ${overallScore}`}</span>
      </div>

      <div className="flex flex-col border-y-1 border-[#0A5598] px-[10px]">
        <div
          onClick={() => handleOpenDropdown("reportData")}
          className="flex justify-between"
        >
          <span className="text-[18px] font-bold">Report Data</span>
          <img
            src={Arrow}
            className={openDropdowns.reportData ? "rotate-x-180" : ""}
          />
        </div>
        <div
          className={`flex flex-col overflow-hidden transition-all duration-300 ${openDropdowns.reportData ? "max-h-[300px]" : "max-h-0"}`}
        >
          <div>
            <span className="font-bold">Title: </span>
            <span>{submittedReport?.title}</span>
          </div>
          <div>
            <span className="font-bold">Reproduction Steps: </span>
            <span>{submittedReport?.stepsToReproduce}</span>
          </div>
          <div>
            <span className="font-bold">Actual Result: </span>
            <span>{submittedReport?.actualResult}</span>
          </div>
          <div>
            <span className="font-bold">Expected Result: </span>
            <span>{submittedReport?.expectedResult}</span>
          </div>
          <div>
            <span className="font-bold">Severity: </span>
            <span>{submittedReport?.severity}</span>
          </div>
          <div>
            <span className="font-bold">Type: </span>
            <span>{submittedReport?.type}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-b-1 border-[#0A5598] px-[10px]">
        <div
          onClick={() => handleOpenDropdown("feedback")}
          className="flex justify-between"
        >
          <span className="text-[18px] font-bold">Feedback</span>
          <img
            src={Arrow}
            className={openDropdowns.feedback ? "rotate-x-180" : ""}
          />
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${openDropdowns.feedback ? "max-h-[300px]" : "max-h-0"}`}
        >
          <ol>
            {feedback.map((statement, idx) => (
              <li key={idx}>&bull; {statement}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
