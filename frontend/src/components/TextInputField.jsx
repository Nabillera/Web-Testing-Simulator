export function TextInputField({
  label,
  placeholder,
  outlineColor,
  width,
  textSize,
}) {
  return (
    <div style={{ width: width }} className="flex flex-col">
      <label
        style={{ fontSize: textSize || "24px" }}
        className="font-bold font-inconsolata"
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        style={{ outlineColor: outlineColor, fontSize: textSize || "24px" }}
        className="font-inconsolata border-2 rounded-[10px] p-[15px] bg-white placeholder:tracking-widest"
      />
    </div>
  );
}
