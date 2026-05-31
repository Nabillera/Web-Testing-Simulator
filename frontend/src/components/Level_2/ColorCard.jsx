import CopyButtonWhite from "../../assets/copy-white.png";
import CopyButtonBlack from "../../assets/copy-black.png";
import { useState } from "react";

export function ColorCard({ color, name, isNeon }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyHex = () => {
    navigator.clipboard.writeText(color);
    setIsCopied((prevValue) => !prevValue);
    if (name == "Sunset Glow") {
      navigator.clipboard.writeText("#FFFFFF");
    }
    setTimeout(() => {
      setIsCopied((prevValue) => !prevValue);
    }, 1000);
  };

  return (
    <div>
      <div
        style={{ backgroundColor: color }}
        className="flex justify-end items-end rounded-t-[10px] w-[200px] h-[160px]"
      >
        {isCopied && (
          <div
            style={{
              backgroundColor: isNeon ? "black" : "white",
              color: isNeon ? "white" : "black",
              borderColor: isNeon ? "white" : "black",
            }}
            className="font-inconsolata border-1 px-[7px]"
          >
            Copied!
          </div>
        )}
      </div>
      <div
        style={{ backgroundColor: isNeon ? "black" : "white" }}
        className="flex rounded-b-[10px] justify-between p-[10px]"
      >
        <div
          style={{ color: isNeon ? "white" : "black" }}
          className="flex flex-col w-[80%] h-[70px] font-inconsolata "
        >
          <span>{color}</span>
          <span>{name}</span>
        </div>
        <div className="h-fit cursor-pointer">
          <img
            src={isNeon ? CopyButtonWhite : CopyButtonBlack}
            onClick={handleCopyHex}
          />
        </div>
      </div>
    </div>
  );
}
