export function RequirementsModal({ requirements, onClose, level }) {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className="absolute z-4 flex justify-center items-center w-full h-full bg-black/80">
      <div className="flex flex-col gap-y-[20px] bg-[#0A5598]/85 border-2 rounded-[20px] text-white p-[15px]">
        <span className="text-[40px] font-pixelify font-bold">{`Level ${level}: Requirements`}</span>
        <p className="font-inconsolata">{requirements}</p>
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
