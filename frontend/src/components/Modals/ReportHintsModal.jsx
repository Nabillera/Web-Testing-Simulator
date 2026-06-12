import { Button } from "../Button";
import { HINTS } from "../../../DATA/Report_hints";
import { BUG_ICONS } from "../../../DATA/Completion_modal_icons";

export function ReportHintsModal({ onClose }) {
  return (
    <div className="absolute flex justify-center items-center w-full h-full bg-black/80 z-5">
      <div className="w-[85%] h-[80%] flex items-center flex-col rounded-[20px] border-2 bg-[#D9D9D9]/80 p-[30px]">
        <p className="font-pixelify text-[32px] font-bold tracking-widest">
          REPORT RECOMMENDATIONS
        </p>
        <div className="h-full flex flex-col justify-around text-[22px]">
          {HINTS.map((hint, idx) => (
            <div key={idx} className="flex gap-x-[20px] font-inconsolata items-start">
              <img src={BUG_ICONS[idx]} className="w-[40px] h-auto rotate-90" />
              <div>
                <span className="font-bold">{`${hint.component}: `}</span>
                <span>{hint.description}</span>
              </div>
            </div>
          ))}
        </div>
        <Button
          onClick={onClose}
          backColor="#0A5598"
          textSize="20px"
          width="40%"
        >
          Close
        </Button>
      </div>
    </div>
  );
}
