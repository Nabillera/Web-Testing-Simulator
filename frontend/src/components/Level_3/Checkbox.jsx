import Star from "../../assets/star.svg";

export function Checkbox({ label, onSelect, selectedOption }) {
  const handleSelectOption = () => {
    onSelect(label);
  };

  return (
    <div
      onClick={handleSelectOption}
      className="flex gap-x-[10px] cursor-pointer"
    >
      <div className="flex justify-center items-center rounded-[3px] border-2 w-[21px] h-[21px] bg-white">
        {selectedOption == label && (
          <img src={Star} className="w-[13px] h-[13px]" />
        )}
      </div>
      <span>{label}</span>
    </div>
  );
}
