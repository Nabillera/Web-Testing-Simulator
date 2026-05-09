export function TextInputField({
  label,
  placeholder,
  outlineColor,
  width,
  textSize,
  value,
  onChange,
  multiline = false,
  rows = 2,
}) {
  return (
    <div style={{ width: width }} className="flex flex-col">
      <label
        style={{ fontSize: textSize || "24px" }}
        className="font-bold font-inconsolata"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          style={{ outlineColor: outlineColor, fontSize: textSize || "24px" }}
          className="font-inconsolata border-2 rounded-[10px] p-[15px] bg-white placeholder:tracking-widest resize-y min-h-[90px]"
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ outlineColor: outlineColor, fontSize: textSize || "24px" }}
          className="font-inconsolata border-2 rounded-[10px] p-[15px] bg-white placeholder:tracking-widest"
        />
      )}
    </div>
  );
}
