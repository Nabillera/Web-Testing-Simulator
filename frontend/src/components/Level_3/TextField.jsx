import { useState, useEffect } from "react";

export function TextField({
  placeholder,
  label,
  value,
  onSave,
  validator,
  errorMessage,
}) {
  const [localValue, setLocalValue] = useState(value || "");
  const [error, setError] = useState("");

  useEffect(() => {
    setLocalValue(value || "");
  }, [value]);

  const handleBlur = () => {
    if (validator && localValue.trim() !== "") {
      const isValid = validator.test(localValue);
      if (!isValid) {
        setError(errorMessage || "Invalid value :(");
        return;
      }
    }

    setError("");
    onSave(localValue);
  };
  return (
    <div className="flex flex-col font-inconsolata w-full">
      <label className="font-bold text-[20px]">{label}</label>
      <input
        value={localValue}
        onChange={(event) => setLocalValue(event.target.value)}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`${
          error ? "border-[#C1011A] outline-[#C1011A]" : "outline-[#0A5598]"
        } border-2 rounded-[10px] p-[7px] bg-white text-[20px] outline-[#0A5598]`}
      />
      {error && (
        <span className="text-[#C1011A] text-[14px] mt-[3px]">{error}</span>
      )}
    </div>
  );
}
