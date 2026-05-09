import { useState } from "react";

export function SliderBrightness() {
  const [sliderValue, setSliderValue] = useState(50);
  const thumbOpacity = 0.1 + (sliderValue / 100) * 0.9;
  return (
    <>
      <input
        type="range"
        min="0"
        max="100"
        id="brightness-slider"
        value={sliderValue}
        onChange={(event) => setSliderValue(Number(event.target.value))}
        style={{ "--thumb-opacity": thumbOpacity }}
        className="w-full accent-[#C1011A] bg-[#D9D9D9] rounded-full h-2 cursor-pointer"
      />
    </>
  );
}
