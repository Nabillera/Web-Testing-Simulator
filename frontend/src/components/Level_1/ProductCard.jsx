export function ProductCard({ prodImage, color, prodName, prodPrice }) {
  let bgColor = color + "40";

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col border-2 rounded-[20px] p-[20px] shadow-[10px_15px_20px_rgba(0,0,0,0.4)]"
    >
      <div className="w-[200px] h-[200px] flex items-center justify-center border-2 rounded-[25px] bg-white">
        <img src={prodImage} className="w-[115px]" />
      </div>
      <div className="flex flex-col">
        <span className="font-inconsolata font-bold text-[32px]">
          {prodName}
        </span>
        <span className="font-inconsolata text-[24px]">{prodPrice}</span>
        <button
          style={{ backgroundColor: color }}
          className="font-pixelify text-[24px] rounded-[10px] p-[10px] cursor-pointer"
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}
