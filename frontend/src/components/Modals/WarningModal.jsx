import { Button } from "../Button";

export function WarningModal({ onHandleModal }) {
  return (
    <div className="absolute flex justify-center items-center w-full h-full bg-black/80 z-5">
      <div className="w-[600px] gap-y-[25px] flex items-center flex-col rounded-[20px] border-2 bg-[#D9D9D9]/80 p-[30px]">
        <span className="font-inconsolata font-bold text-[32px]">
          Are you sure you want to leave?
        </span>
        <span className="font-inconsolata text-[24px] text-center">
          Timer is running... Are you sure you want to leave the page? Your
          progress and analytics will be reset upon revisiting
        </span>
        <div className="flex font-pixelify w-full justify-between">
          <Button
            onClick={() => onHandleModal(false)}
            backColor="#0A5598"
            textColor="#FFFFFF"
            width="190px"
            textSize="24px"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onHandleModal(true)}
            backColor="#C1011A"
            textColor="#FFFFFF"
            width="190px"
            textSize="24px"
          >
            Leave
          </Button>
        </div>
      </div>
    </div>
  );
}
