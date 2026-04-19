export function TextField({ placeholder, label }) {
  return (
    <div className="flex flex-col font-inconsolata w-full">
      <label className="font-bold text-[20px]">{label}</label>
      <input
        placeholder={placeholder}
        className="border-2 rounded-[10px] p-[7px] bg-white text-[20px] outline-[#0A5598]"
      />
    </div>
  );
}
