export function Checkbox({ label }) {
  return (
    <div className="flex gap-x-[10px]">
      <div className="rounded-[3px] border-2 w-[20px] h-[20px] bg-white"></div>
      <span>{label}</span>
    </div>
  );
}
