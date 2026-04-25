import OrangeBanner from "../assets/orange-banner.png";
import RedBanner from "../assets/red-banner.png";
import { Button } from "./Button";
import { TITLES } from "../../DATA/Level_data";
import { COLORS } from "../../DATA/Level_data";
import { Link } from "react-router-dom";
import { PurchaseModal } from "./Level_1/PurchaseModal";

export function LandingPage() {
  return (
    <div className="flex flex-col w-full px-[30px] h-[calc(100vh-92px)] overflow-y-scroll items-center gap-y-[60px]">
      <div>
        <div className="flex flex-col mt-[30px] bg-[#0A5598] rounded-[10px] border-2 p-[25px] shadow-xl/20">
          <span className="font-pixelify text-white text-[40px] font-bold">
            What am I doing here?
          </span>
          <p className="font-inconsolata text-white text-[22px]">
            Aspiring testers, established QA engineers, and simply people who
            love to take on side quests - you came to the right place! Whether
            you would like to learn or polish your skills, get your magnifying
            glass out and let’s uncover the flaws this poor developer “missed”
            when building the website: below you can find levels of web modules
            with intentionally planted bugs for your exploration. Want to
            participate in a small game?
          </p>
        </div>
        <div className="flex flex-col mt-[30px] bg-[#669BC9] rounded-[10px] border-2 p-[25px] shadow-xl/20">
          <span className="font-pixelify text-white text-[40px] font-bold">
            Game? How do I play?
          </span>
          <p className="font-inconsolata text-white text-[22px]">
            The flow is simple: open a level, read the provided documentation
            for a specific module, explore the functionality in search of
            defects, and submit a report for the bugs you came across - your
            work will be evaluated, perhaps even displayed on the leaderboard
            among other testing enthusiasts. I suggest starting with Level 0 for
            practice and understanding the process we will follow, even if you
            already know the ropes!
          </p>
        </div>
      </div>
      <div className="flex flex-col font-bold items-center">
        <div className="relative flex justify-center mb-[30px]">
          <span className="absolute font-pixelify text-[42px] font-bold top-[2px]">
            Warm Up?
          </span>
          <img src={OrangeBanner} />
        </div>
        <span className="font-inconsolata font-bold text-[24px] mb-[25px]">
          {TITLES[0]}
        </span>
        <Link to="/level-0">
          <Button
            backColor={COLORS[0].color}
            textColor={COLORS[0].text}
            width="595px"
          >
            Level 0
          </Button>
        </Link>

        <div className="flex flex-col items-center mt-[50px]">
          <div className="relative flex justify-center">
            <span className="absolute font-pixelify text-[42px] font-bold top-[2px]">
              Dive In!
            </span>
            <img src={RedBanner} />
          </div>
          {TITLES.slice(1).map((title, idx) => {
            return (
              <div className="flex flex-col items-center gap-y-[25px] my-[35px]">
                <span className="font-inconsolata text-[24px]">{title}</span>
                <Link to={`/level-${idx + 1}`}>
                  <Button
                    backColor={COLORS[idx + 1].color}
                    textColor={COLORS[idx + 1].text}
                    width="595px"
                  >{`Level ${idx + 1}`}</Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
