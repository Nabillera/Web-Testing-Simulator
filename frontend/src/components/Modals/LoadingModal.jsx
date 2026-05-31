import Ant from "../../assets/black-outline-bugs/ant-black.png";

export function LoadingModal({ loadingMessage }) {
  return (
    <div className="absolute z-12 flex justify-center items-center w-full h-full backdrop-blur-sm">
      <div className="flex flex-col justify-center items-center gap-y-[30px] rounded-[10px] p-[20px] bg-[#F2F2F2] border-2">
        <img src={Ant} className="w-[70px] animate-wiggle" />
        <span className="font-pixelify text-[24px]">{loadingMessage}</span>
      </div>
    </div>
  );
}
