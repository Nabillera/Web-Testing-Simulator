import { ColorCard } from "./ColorCard";
import { ELECTRIC_COLORS } from "../../../DATA/Level-2_colors";
import { PASTEL_COLORS } from "../../../DATA/Level-2_colors";
import { REQUIREMENTS } from "../../../DATA/Level_data";
import { TextInputField } from "../TextInputField";
import { Dropdown } from "../Dropdown";
import { useState } from "react";

export function LevelTwo() {
  const [selectedPalette, setSelectedPalette] = useState("Neon");
  const [startIndex, setStartIndex] = useState(0);

  const handleSelectPalette = (palette) => {
    setSelectedPalette(() => palette);
  };

  const handleIncreaseIndex = () => {
    setStartIndex(() => {
      if (startIndex < 15) {
        return startIndex + 5;
      } else {
        return startIndex;
      }
    });
  };

  const handleDecreaseIndex = () => {
    setStartIndex(() => {
      if (startIndex > 4) {
        return startIndex - 5;
      } else {
        return startIndex;
      }
    });
  };

  return (
    <div className="flex flex-col w-[80%] items-center gap-y-[120px] p-[30px]">
      <h2 className="font-pixelify font-bold text-[40px]">
        Level 2: Red, pink, orange, blue
      </h2>
      <div className="flex w-full justify-between">
        <TextInputField
          placeholder="Search by name or HEX code..."
          outlineColor="#0A5598"
          width="60%"
        />
        <Dropdown
          width="350px"
          options={["Neon", "Pastel"]}
          placeholder={selectedPalette}
          onSelect={handleSelectPalette}
        ></Dropdown>
      </div>
      <div className="flex justify-around w-full h-fit">
        {selectedPalette == "Neon"
          ? ELECTRIC_COLORS.slice(startIndex, startIndex + 5).map((color) => {
              return (
                <ColorCard color={color.hex} name={color.name} isNeon={true} />
              );
            })
          : PASTEL_COLORS.slice(startIndex, startIndex + 5).map((color) => {
              return (
                <ColorCard color={color.hex} name={color.name} isNeon={false} />
              );
            })}
      </div>
      <div className="flex w-[40%] justify-between">
        <button
          onClick={handleDecreaseIndex}
          className="p-[10px] w-[100px] font-pixelify text-white bg-black rounded-[5px] cursor-pointer hover:opacity-80"
        >
          Previous
        </button>
        <button
          onClick={handleIncreaseIndex}
          className="p-[10px] w-[100px] font-pixelify text-white bg-black rounded-[5px] cursor-pointer hover:opacity-80"
        >
          Next
        </button>
      </div>
    </div>
  );
}
