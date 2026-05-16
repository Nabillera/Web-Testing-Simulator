import { useState } from "react";
import { REQUIREMENTS } from "../../../DATA/Level_requirements";
import ProfilePicture from "../../assets/profile-picture.png";
import { NotificationsSection } from "./NotificationsSection";
import { ThemeSection } from "./ThemeSection";
import { AccountInfoSection } from "./AccountInfoSection";
import { DisplaySection } from "./DisplaySection";
import { Button } from "../Button";

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
      className="flex flex-col w-full items-center gap-y-[10px] p-[15px]"
    >
      <h2 className="font-pixelify font-bold text-[40px]">
        Level 4: No, I do NOT want notifications
      </h2>
      {selectedTheme == "surprise" ? (
        <div className="bg-[#FFFFFF] w-full h-full font-inconsolata flex flex-col items-center justify-center">
          <span className="text-[20px] font-bold">500 Internal Server Error</span>
          <span>Something went wrong :(</span>
        </div>
      ) : (
        <div className="flex flex-col items-start w-full gap-y-[10px]">
          <div className="flex gap-x-[30px]">
            <img src={ProfilePicture} className="rounded-full w-[150px]" />
            <div className="flex flex-col justify-center gap-y-[10px]">
              <div className="flex gap-x-[30px] items-center">
                <span className="font-pixelify text-[28px] font-bold">
                  Manuelo Costa
                </span>
                <span className="font-inconsolata font-bold text-[#0A5598] text-[20px] cursor-pointer hover:text-[#0A5598]/50">
                  Edit
                </span>
              </div>
              <span className="font-inconsolata text-[20px]">
                mcosta@kanudos.com
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[30%]">
              <NotificationsSection
                toggleOn={toggleOn}
                onToggle={handleToggle}
              />
              <ThemeSection
                selectedTheme={selectedTheme}
                onSetTheme={handleSetTheme}
              />
            </div>
            <div className="w-[30%] flex flex-col justify-between">
              <AccountInfoSection />
              <div className="flex flex-col items-center">
                <Button
                  width="50%"
                  backColor="#C1011A"
                  textColor="#F2F2F2"
                  textSize="24px"
                >
                  Save Changes
                </Button>
                <span className="font-inconsolata text-[#0A5598] text-[22px] font-bold hover:text-[#0A5598]/50 cursor-pointer">
                  Refresh Page
                </span>
              </div>
            </div>
            <div className="w-[30%]">
              <DisplaySection />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
