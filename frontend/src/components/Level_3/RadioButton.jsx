export function RadioButton({ label, onSelect, selectedOption }) {
  const handleSelectOption = () => {
    onSelect(label);
  };

  return (
    <div onClick={handleSelectOption} className="flex gap-x-[10px] cursor-pointer">
      <div className="flex justify-center items-center rounded-full border-2 w-[21px] h-[21px] bg-white">
        {selectedOption == label && (
          <div className="bg-[#0A5598] w-[13px] h-[13px] rounded-full"></div>
        )}
      </div>
      <span>{label}</span>
    </div>
  );
}
