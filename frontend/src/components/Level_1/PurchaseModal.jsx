import { Button } from "../Button";

export function PurchaseModal() {
  return (
    <div className="p-[20px] flex flex-col gap-y-[50px] items-center bg-[#F3AE39]/30 border-2 rounded-[25px] w-[700px] shadow-[10px_10px_10px_rgba(0,0,0,0.5)]">
      <p className="font-pixelify text-[54px] text-center">
        Purchase <br /> Successful!
      </p>
      <Button backColor="#F3AE39" textSize="26px" width="50%">
        Awesome
      </Button>
    </div>
  );
}
