export function RequirementsModal({ requirements, onClose, level }) {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className="absolute z-4 flex justify-center items-center w-full h-full bg-black/80">
      <div className="flex flex-col w-[70%] gap-y-[20px] bg-[#F3AE39]/85 border-2 rounded-[20px] text-black p-[25px]">
        <span className="text-[40px] font-pixelify font-bold">
          {requirements.heading}
        </span>
        <p className="font-inconsolata">
          {requirements.paragraphs.map((paragraph) => (
            <p className="my-[15px] text-[18px]">{paragraph}</p>
          ))}
        </p>
        <button
          onClick={handleCloseModal}
          className="font-pixelify text-[36px] w-fit cursor-pointer self-center"
        >
          Back
        </button>
      </div>
    </div>
  );
}
