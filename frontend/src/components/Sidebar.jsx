import Ladybug from "../assets/white-outline-bugs/ladybug-white.png";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";

export function Sidebar({
  location,
  onViewRequirements,
  onViewReport,
  onCompleteLevel,
  onNavigation
}) {
  const isLevelOpen = location.pathname.startsWith("/level-");

  const handleRequirementsModal = () => {
    onViewRequirements();
  };

  const handleReportForm = () => {
    onViewReport();
  };

  const handleCompleteLevel = () => {
    onCompleteLevel();
  };

  return (
    <div className="flex flex-col justify-between h-full border-t-[#C1011A] border-t text-white bg-black w-fit text-[22px] pt-[20px] pl-[15px] pr-[20px] font-pixelify z-3">
      <div className="flex flex-col gap-y-[25px]">
        <div
          onClick={() => onNavigation("/")}
          className="flex items-center gap-x-[15px] cursor-pointer py-[3px] pl-[10px] pr-[30px] hover:bg-[#272727] rounded-[4px]"
        >
          <img src={Ladybug} className="w-[42px] h-[46px] rotate-90" />
          <span>Home</span>
        </div>
        <Link to="/sign-up">
          <div className="flex items-center gap-x-[15px] cursor-pointer py-[3px] pl-[10px] hover:bg-[#272727] rounded-[4px]">
            <img src={Ladybug} className="w-[42px] h-[46px] rotate-90" />
            <span>Profile</span>
          </div>
        </Link>
        <div className="flex items-center gap-x-[15px] cursor-pointer py-[3px] pl-[10px] pr-[50px] hover:bg-[#272727] rounded-[4px]">
          <img src={Ladybug} className="w-[42px] h-[46px] rotate-90" />
          <span>Leaderboard</span>
        </div>
      </div>
      {isLevelOpen && (
        <div className="flex flex-col gap-y-[25px] pb-[20px]">
          <Button
            onClick={handleRequirementsModal}
            backColor="#C1011A"
            textSize="20px"
          >
            Requirements
          </Button>

          <Button
            onClick={handleReportForm}
            backColor="#C1011A"
            textSize="20px"
          >
            Open Report
          </Button>
          <Button
            onClick={handleCompleteLevel}
            backColor="#0A5598"
            textSize="20px"
          >
            Complete Level
          </Button>
        </div>
      )}
    </div>
  );
}
