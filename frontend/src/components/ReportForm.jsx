import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { TextInputField } from "./TextInputField";

export function ReportForm({ onClose }) {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className="absolute w-full h-full flex justify-center items-center bg-black/80 z-5">
      <div className=" flex flex-col gap-y-[10px] p-[20px] w-[650px] self-center bg-[#D9D9D9]/85 rounded-[20px] border-2 ">
        <div className="font-pixelify self-center text-[36px] font-bold">
          <span>CAUGHT THE </span>
          <span className="text-[#0A5598]">M</span>
          <span className="text-[#F3AE39]">O</span>
          <span className="text-[#E75809]">T</span>
          <span className="text-[#C1011A]">H</span>
          <span>?</span>
        </div>
        <div className="flex flex-col">
          <TextInputField
            label="Summary"
            placeholder="Short summary of the bug"
            outlineColor="#0A5598"
            textSize="20px"
          />
          <div className="flex flex-col">
            <label className="font-inconsolata text-[20px] font-bold">
              More Details
            </label>
            <textarea
              placeholder="Tell us a few fun facts about yourself!"
              className="font-inconsolata border-2 rounded-[10px] p-[7px] bg-white outline-[#0A5598] text-[20px] min-h-[130px]"
            />
          </div>
          <TextInputField
            label="Actual Result"
            placeholder="Enter the actual behaviour of the element"
            outlineColor="#0A5598"
            textSize="20px"
          />
          <TextInputField
            label="Expected Result"
            placeholder="Enter the expected behaviour"
            outlineColor="#0A5598"
            textSize="20px"
          />
        </div>
        <div className="flex justify-between">
          <Dropdown
            options={["Critical", "Major", "Average", "Low"]}
            label="Severity"
            textSize="20px"
            width="295px"
          />
          <Dropdown
            options={["GUI", "Functional"]}
            label="Type"
            textSize="20px"
            width="295px"
          />
        </div>
        <div className="flex gap-x-[45px]">
          <Button backColor="#C1011A" onHandleModal={handleCloseModal}>
            Cancel
          </Button>
          <Button backColor="#C1011A">Submit</Button>
        </div>
      </div>
    </div>
  );
}
