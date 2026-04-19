import { useState } from "react";
import Arrow from "../assets/arrow.svg";

export function Dropdown({
  label,
  placeholder,
  width,
  options,
  onSelect,
  textSize,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpen(() => !isOpen);
  };

  const handleSelectPalette = (palette) => {
    onSelect(palette);
    handleOpenDropdown();
  };

  return (
    <div className="flex flex-col">
      <label
        style={{ fontSize: textSize }}
        className="font-bold text-[24px] font-inconsolata"
      >
        {label}
      </label>
      <div className="relative">
        <div
          onClick={handleOpenDropdown}
          style={{ width: width }}
          className={`${isOpen ? "rounded-t-[10px] border-b-0 border-[#0A5598]" : "rounded-[10px]"} flex justify-between w-full bg-[#FFFFFF] p-[15px] gap-x-[40px] border-2 cursor-pointer`}
        >
          <span style={{ fontSize: textSize }} className="text-[24px]">
            {placeholder}
          </span>
          <img src={Arrow} className={isOpen ? "rotate-x-180" : ""} />
        </div>
        <ul
          className={`${isOpen ? "" : "hidden"} absolute w-full bg-[#FFFFFF] border-2 border-t-0 border-[#0A5598] p-[15px] pt-0 rounded-b-[10px]`}
        >
          {options.map((option) => {
            return (
              <li
                onClick={() => handleSelectPalette(option)}
                className="text-[20px] p-[3px] cursor-pointer"
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
