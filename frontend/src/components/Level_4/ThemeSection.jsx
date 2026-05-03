import Star from "../../assets/star.svg";

export function ThemeSection({ selectedTheme, onSetTheme }) {
  return (
    <div className="font-inconsolata flex flex-col gap-y-[20px] p-[15px] border-b-[#D9D9D9] border-b-2">
      <span className="font-bold text-[28px]">Theme</span>
      <div
        onClick={() => onSetTheme("light")}
        className="flex items-center justify-between p-[7px] cursor-pointer rounded-[5px] hover:bg-[#D9D9D9]/30"
      >
        <span className="text-[22px]">Light</span>
        {selectedTheme == "light" && <img src={Star} />}
      </div>
      <div
        onClick={() => onSetTheme("dark")}
        className="flex items-center justify-between p-[7px] cursor-pointer rounded-[5px] hover:bg-[#D9D9D9]/30"
      >
        <span className="text-[22px]">Dark</span>
        {selectedTheme == "dark" && <img src={Star} />}
      </div>
      <div
        onClick={() => onSetTheme("surprise")}
        className="flex items-center justify-between p-[7px] cursor-pointer rounded-[5px] hover:bg-[#D9D9D9]/30"
      >
        <span className="text-[22px]">Surprise me :D</span>
        {selectedTheme == "surprise" && <img src={Star} />}
      </div>
    </div>
  );
}
