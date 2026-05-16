export function AccountInfoItem({
  label,
  field,
  fieldValue,
  editingField,
  tempValue,
  onSetTempValue,
  onSetEditingField,
}) {
  return (
    <div className="p-[7px] flex justify-between">
      <div className="flex flex-col justify-between">
        <span className="text-[22px]">{label}</span>
        {editingField == field ? (
          <input
            value={tempValue}
            onChange={(event) => onSetTempValue(event.target.value)}
            onBlur={() => onSetEditingField(null)}
            className="outline-none border-1 border-[#606060] rounded-[3px]"
          />
        ) : (
          <span className="text-[#606060]">{fieldValue}</span>
        )}
      </div>
      <span
        onClick={() => {
          onSetEditingField(field);
          onSetTempValue(fieldValue);
        }}
        className="font-inconsolata font-bold text-[#0A5598] text-[20px] cursor-pointer hover:text-[#0A5598]/50"
      >
        Edit
      </span>
    </div>
  );
}
