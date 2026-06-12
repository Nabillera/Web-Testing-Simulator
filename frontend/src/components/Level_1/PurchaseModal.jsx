import { Button } from "../Button";

export function PurchaseModal({ onHandleModal, totalPrice }) {
  return (
    <div className="absolute top-[30%] left-auto p-[20px] flex flex-col gap-y-[20px] items-center bg-[#D9D9D9]/95 border-2 rounded-[25px] w-[700px] shadow-[10px_10px_100px_rgba(0,0,0,0.9)]">
      <p className="font-pixelify text-[54px] text-center font-bold">
        Purchase <br /> Successful!
      </p>
      <p className="font-inconsolata text-[24px]">{`Your total: $${totalPrice * 2}`}</p>
      <Button
        onClick={onHandleModal}
        backColor="#F3AE39"
        textSize="26px"
        width="50%"
      >
        Awesome!
      </Button>
    </div>
  );
}
