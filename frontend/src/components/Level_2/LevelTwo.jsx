import { ColorCard } from "./ColorCard";
import { ELECTRIC_COLORS, PASTEL_COLORS } from "../../../DATA/Level-2_colors";
import { REQUIREMENTS } from "../../../DATA/Level_data";
import { Dropdown } from "../Dropdown";
import { useState } from "react";

export function LevelTwo() {
  const [selectedPalette, setSelectedPalette] = useState("Neon");
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setStartIndex(0);
  };

  const handleSelectPalette = (palette) => {
    setSelectedPalette(palette);
    setStartIndex(0);
  };

  const handleIncreaseIndex = () => {
    setStartIndex((prev) =>
      prev < filteredColors.length - 5 ? prev + 5 : prev,
    );
  };

  const handleDecreaseIndex = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 5 : prev));
  };

  const currentPalette =
    selectedPalette === "Neon" ? ELECTRIC_COLORS : PASTEL_COLORS;

  const filteredColors = currentPalette.filter((color) => {
    return (
      color.name.toLowerCase().includes(searchQuery) ||
      color.hex.toLowerCase().includes(searchQuery)
    );
  });

  const visibleColors = filteredColors.slice(startIndex, startIndex + 5);

  return (
    <div className="flex flex-col w-[80%] items-center gap-y-[120px] p-[30px]">
      <h2 className="font-pixelify font-bold text-[40px]">
        Level 2: Red, pink, orange, blue
      </h2>

      <div className="flex w-full justify-between">
        <input
          className="w-[60%] font-inconsolata border-2 rounded-[10px] text-[24px] p-[15px] bg-white outline-[#0A5598] placeholder:tracking-widest"
          placeholder="Search by name or HEX code..."
          onChange={handleSearch}
        />

        <Dropdown
          width="350px"
          options={["Neon", "Pastel"]}
          placeholder={selectedPalette}
          onSelect={handleSelectPalette}
        />
      </div>

      <div className="flex justify-around w-full h-fit">
        {visibleColors.length === 0 ? (
          <span className="font-inconsolata text-[20px] py-[40px]">No match found</span>
        ) : (
          visibleColors.map((color) => (
            <ColorCard
              key={color.hex}
              color={color.hex}
              name={color.name}
              isNeon={selectedPalette == "Neon"}
            />
          ))
        )}
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
