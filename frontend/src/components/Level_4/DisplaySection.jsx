import { SliderBrightness } from "./SliderBrightness";
import { SliderSize } from "./SliderSize";

export function DisplaySection() {
  return (
    <div className="font-inconsolata flex flex-col gap-y-[20px]">
      <span className="font-bold text-[28px] px-[15px] pt-[15px]">Display</span>
      <div className="flex flex-col gap-y-[15px] items-center justify-between px-[22px] py-[15px] border-b-[#D9D9D9] border-b-2 ">
        <span className="text-[22px] text-[#606060]">
          Use the slider to adjust icon size to your liking
        </span>
        <div className="w-full flex flex-col items-center gap-y-[30px] pb-[10px]">
          <div className="flex justify-center items-center w-[70px] h-[70px] bg-[#D9D9D9]">
            <span className="text-[22px] text-[#000000]">
              ICON
              <br />
              SIZE
            </span>
          </div>
          <SliderSize />
        </div>
      </div>
      <div className="flex flex-col gap-y-[15px] items-center justify-between px-[22px] py-[15px] border-b-[#D9D9D9] border-b-2">
        <span className="text-[22px] text-[#606060]">
          Use the slider to adjust icon brightness to your liking
        </span>
        <div className="w-full flex flex-col items-center gap-y-[30px] pb-[10px]">
          <div className="flex justify-center items-center w-[70px] h-[70px] bg-[#000000] text-[#F2F2F2]">
            <span className="text-[22px]">
              BRIGH
              <br />
              TNESS
            </span>
          </div>
          <SliderBrightness />
        </div>
      </div>
    </div>
  );
}
