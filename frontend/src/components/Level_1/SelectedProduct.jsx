export function SelectedProduct({ prodName, quantity, totalPrice }) {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between">
        <span className="font-bold text-[30px] font-inconsolata">
          {prodName}
        </span>
        <div className="flex items-center justify-around text-[32px] font-bold bg-[#F3AE39] border-2 rounded-[15px]">
          <span className="w-[50px] text-center cursor-pointer">+</span>
          <span className="h-[70%] w-[2px] bg-[#000000]" />
          <span className="w-[50px] text-center cursor-pointer">-</span>
        </div>
      </div>
      <div>
        <span>{quantity}</span>
        <span>{totalPrice}</span>
      </div>
    </div>
  );
}
