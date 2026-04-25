export function Toggle({ type, isActive, onToggle }) {
  const handleToggle = () => {
    onToggle(type, isActive);
  };
  return (
    <div
      onClick={handleToggle}
      style={{
        backgroundColor: isActive ? "#A7D8F0" : "#D9D9D9",
        justifyContent: isActive ? "end" : "",
      }}
      className="w-[64px] h-[36px] flex p-[6px] rounded-full cursor-pointer"
    >
      <div
        style={{ backgroundColor: isActive ? "#0A5598" : "#606060" }}
        className="w-[24px] h-[24px] rounded-full"
      ></div>
    </div>
  );
}
