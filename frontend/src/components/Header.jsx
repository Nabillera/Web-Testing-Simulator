import Bug1 from "../assets/white-outline-bugs/blue-bug-white.png";
import Bug2 from "../assets/white-outline-bugs/fat-beetle-white.png";
import Bug3 from "../assets/white-outline-bugs/funky-bug-white.png";
import Bug4 from "../assets/white-outline-bugs/moth-white.png";
import Bug5 from "../assets/white-outline-bugs/brown-beetle-white.png";
import Bug6 from "../assets/white-outline-bugs/green-bug-white.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="z-10 flex justify-between items-center h-[100px] bg-black">
      <div className="flex justify-around pl-[20px] w-[30%]">
        <img src={Bug1} className="w-[72px] h-[92px] rotate-16" />
        <img src={Bug2} className="w-[84px] h-[92px] -rotate-10" />
        <img src={Bug3} className="w-[79px] h-[92px] rotate-12" />
      </div>
      <Link to="/">
        <div className="font-bold text-[52px] w-fit cursor-pointer">
          <span className="font-pixelify text-white">WHERE'S THE </span>
          <span className="font-pixelify text-[#FCF6B8]">M</span>
          <span className="font-pixelify text-[#F3AE39]">O</span>
          <span className="font-pixelify text-[#E75809]">T</span>
          <span className="font-pixelify text-[#C1011A]">H</span>
          <span className="font-pixelify text-white">?</span>
        </div>
      </Link>

      <div className="flex justify-between pr-[20px] w-[30%]">
        <img src={Bug4} className="w-[72px] h-[92px] -rotate-18" />
        <img src={Bug5} className="w-[84px] h-[92px] rotate-12" />
        <img src={Bug6} className="w-[79px] h-[92px] -rotate-19" />
      </div>
    </div>
  );
}
