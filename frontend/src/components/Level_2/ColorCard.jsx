import CopyButtonWhite from "../../assets/copy-white.png";
import CopyButtonBlack from "../../assets/copy-black.png";

export function ColorCard({ color, name, isNeon }) {
  return (
    <div>
      <div
        style={{ backgroundColor: color }}
        className="rounded-t-[10px] w-[200px] h-[160px]"
      ></div>
      <div
        style={{ backgroundColor: isNeon ? "black" : "white" }}
        className="flex rounded-b-[10px] justify-between p-[10px]"
      >
        <div style={{color: isNeon ? "white" : "black"}} className="flex flex-col w-[80%] h-[70px] font-inconsolata ">
          <span>{color}</span>
          <span>{name}</span>
        </div>
        <div className="h-fit cursor-pointer">
          <img src={isNeon ? CopyButtonWhite : CopyButtonBlack} />
        </div>
      </div>
    </div>
  );
}
