export function Button({
  children,
  backColor,
  textColor,
  width,
  textSize,
  onHandleModal,
}) {
  return (
    <button
      onClick={onHandleModal}
      style={{
        backgroundColor: backColor,
        color: textColor,
        width: width,
        fontSize: textSize,
      }}
      className="w-full py-[10px] rounded-[8px] font-pixelify text-[32px] border-b-2 border-r-2 cursor-pointer transition hover:opacity-80 active:border-t-2 active:border-b-0 active:border-r-0 active:border-l-2 border-black"
    >
      {children}
    </button>
  );
}
