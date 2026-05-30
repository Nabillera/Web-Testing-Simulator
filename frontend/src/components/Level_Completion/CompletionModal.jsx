import Ant from "../../assets/black-outline-bugs/ant-black.png";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { ReportCard } from "./ReportCard";
import { BUG_ICONS } from "../../../DATA/Completion_modal_icons";

export function CompletionModal({ completionSummary, onClose }) {
  const formatCompletionTime = (completionTime) => {
    const roundedSeconds = Math.floor(completionTime);
    const minutes = Math.floor(roundedSeconds / 60);
    const seconds = roundedSeconds % 60;
    if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  return (
    <div className="absolute z-11 flex justify-center items-center w-full h-full backdrop-blur-sm transition-all duration-[1500ms] ease-out">
      <div className="flex flex-col justify-between items-center font-inconsolata bg-[#D9D9D9] w-[90%] h-[90%] rounded-[20px] border-2 p-[20px]">
        <div className="flex items-center gap-x-[30px]">
          <img
            src={Ant}
            className="w-[50px] h-[65px] rotate-[20deg] animate-wiggle"
          />
          <span className="font-pixelify font-bold text-[32px]">
            Level Complete, Woo-Hoo!
          </span>
          <img
            src={Ant}
            className="w-[50px] h-[65px] rotate-[-20deg] animate-wiggle"
          />
        </div>
        <div className="flex gap-x-[15px]">
          <div className="bg-[#F2f2f2] font-bold text-[20px] text-[#F3AE39] border-2 border-[#F3AE39] rounded-[5px] px-[10px] p-[5px]">
            <span>Completion Time: </span>
            <span>
              {formatCompletionTime(completionSummary.completionTime)}
            </span>
          </div>
          <div className="bg-[#F2f2f2] font-bold text-[20px] text-[#E75809] border-2 border-[#E75809] rounded-[5px] px-[10px] p-[5px]">
            <span>Reports Submitted: </span>
            <span>{completionSummary.totalReports}</span>
          </div>
          <div className="bg-[#F2f2f2] font-bold text-[20px] text-[#C1011A] border-2 border-[#C1011A] rounded-[5px] px-[10px] p-[5px]">
            <span>Average Score: </span>
            <span>{completionSummary.averageScore}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[25px] w-full flex-1 overflow-y-auto p-[20px]">
          {completionSummary.evaluations.map((report, idx) => {
            return (
              <ReportCard
                bugIcon={report.icon}
                idx={idx + 1}
                title={report.matchedBugTitle}
                overallScore={report.overallScore}
                feedback={report.feedback}
                submittedReport={report.report}
              />
            );
          })}
        </div>
        <Link to="/" className="w-[20%]">
          <Button backColor="#C1011A" textSize="24px" onClick={onClose}>
            Send Me Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
