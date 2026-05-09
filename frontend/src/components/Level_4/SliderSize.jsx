import { useState } from "react";

export function SliderSize() {
  const [sliderValue, setSliderValue] = useState(50);
  const thumbSize = 20 + (sliderValue / 100) * 20;
  return (
    <>
      <input
        type="range"
        min="0"
        max="100"
        id="size-slider"
        value={sliderValue}
        onChange={(event) => setSliderValue(Number(event.target.value))}
        style={{ "--thumb-size": `${thumbSize}px` }}
        className="w-full accent-[#0A5598] bg-[#D9D9D9] rounded-full h-2 cursor-pointer"
      />
    </>
  );
}
