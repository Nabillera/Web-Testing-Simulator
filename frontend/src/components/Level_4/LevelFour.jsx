import { useState } from "react";
import { REQUIREMENTS } from "../../../DATA/Level_data";
import ProfilePicture from "../../assets/profile-picture.png";
import Star from "../../assets/star.svg";
import { Toggle } from "./Toggle";

export function LevelFour() {
  const [toggleOn, setToggleOn] = useState({
    general: false,
    push: false,
    sms: false,
    email: false,
  });
  const [selectedTheme, setSelectedTheme] = useState("light");

  const handleToggle = (type, isActive) => {
    setToggleOn(() => {
      return {
        ...toggleOn,
        [type]: !isActive,
      };
    });
  };

  const handleSetTheme = (theme) => {
    setSelectedTheme(() => theme);
  };

  return (
    <div
      style={{
        backgroundColor: selectedTheme == "dark" ? "#282828" : "",
        color: selectedTheme == "dark" ? "#F2F2F2" : "#000000",
      }}
      className="flex flex-col w-full items-center gap-y-[40px] p-[30px]"
    >
      <h2 className="font-pixelify font-bold text-[40px]">
        Level 4: No, I do NOT want notifications
      </h2>
      <div className="flex flex-col items-start w-full gap-y-[50px]">
        <div className="flex gap-x-[30px]">
          <img src={ProfilePicture} className="rounded-full w-[150px]" />
          <div className="flex flex-col justify-center gap-y-[10px]">
            <div className="flex gap-x-[30px] items-center">
              <span className="font-pixelify text-[32px] font-bold">
                Manuelo Costa
              </span>
              <span className="font-inconsolata font-bold text-[#0A5598] text-[22px] cursor-pointer">
                Edit
              </span>
            </div>
            <span className="font-inconsolata text-[24px]">
              mcosta@kanudos.com
            </span>
          </div>
        </div>
        <div className="flex gap-x-[30px]">
          <div className="w-[500px] font-inconsolata flex flex-col gap-y-[20px] p-[15px] border-b-[#D9D9D9] border-b-2">
            <div className="flex justify-between items-center">
              <span className="text-[32px] font-bold">Notifications</span>
              <Toggle
                type="general"
                isActive={toggleOn.general}
                onToggle={handleToggle}
              />
            </div>
            <div className="flex justify-between items-center p-[7px]">
              <span className="text-[26px] ">Push notifications</span>
              <Toggle
                type="push"
                isActive={toggleOn.push}
                onToggle={handleToggle}
              />
            </div>
            <div className="flex justify-between items-center p-[7px]">
              <span className="text-[26px]">SMS notifications</span>
              <Toggle
                type="sms"
                isActive={toggleOn.sms}
                onToggle={handleToggle}
              />
            </div>
            <div className="flex justify-between items-center p-[7px]">
              <span className="text-[26px] ">Email notifications</span>
              <Toggle
                type="email"
                isActive={toggleOn.email}
                onToggle={handleToggle}
              />
            </div>
          </div>

          <div className="w-[500px] font-inconsolata flex flex-col gap-y-[20px] p-[15px] border-b-[#D9D9D9] border-b-2">
            <span className="font-bold text-[32px]">Theme</span>
            <div
              onClick={() => handleSetTheme("light")}
              className="flex items-center justify-between p-[7px] cursor-pointer rounded-[5px] hover:bg-[#D9D9D9]/30"
            >
              <span className="text-[26px]">Light</span>
              {selectedTheme == "light" && <img src={Star} />}
            </div>
            <div
              onClick={() => handleSetTheme("dark")}
              className="flex items-center justify-between p-[7px] cursor-pointer rounded-[5px] hover:bg-[#D9D9D9]/30"
            >
              <span className="text-[26px]">Dark</span>
              {selectedTheme == "dark" && <img src={Star} />}
            </div>
            <div
              onClick={() => handleSetTheme("surprise")}
              className="flex items-center justify-between p-[7px] cursor-pointer rounded-[5px] hover:bg-[#D9D9D9]/30"
            >
              <span className="text-[26px]">Surprise me</span>
              {selectedTheme == "surprise" && <img src={Star} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
