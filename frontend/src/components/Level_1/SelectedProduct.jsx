import PlusSign from "../../assets/plus-sign.svg";
import MinusSign from "../../assets/minus-sign.svg";

export function SelectedProduct({
  prodName,
  quantity,
  totalPrice,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="w-[65%] flex flex-col">
      <div className="flex justify-between">
        <span className="font-bold text-[32px] font-inconsolata">
          {prodName}
        </span>
        <div className="flex items-center bg-[#F3AE39] border-2 rounded-[15px] h-fit">
          <img
            onClick={() => onIncrement(prodName)}
            src={PlusSign}
            className="px-[13px] py-[10px] cursor-pointer"
          />
          <span className="h-[26px] w-[2px] bg-[#000000]" />
          <img
            onClick={() => onDecrement(prodName)}
            src={MinusSign}
            className="px-[13px] py-[15px] cursor-pointer"
          />
        </div>
      </div>
      <div className="flex gap-x-[20px] text-[20px]">
        <span>{`x${quantity}`}</span>
        <span>{`$${totalPrice}`}</span>
      </div>
    </div>
  );
}
