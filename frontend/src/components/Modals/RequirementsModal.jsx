import { useEffect, useState } from "react";

export function RequirementsModal({
  requirementsOpen,
  requirements,
  onClose,
  level,
}) {
  const [visibleTransition, setVisibleTransition] = useState(false);
  const handleCloseModal = () => {
    onClose();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleTransition(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ opacity: visibleTransition ? 100 : 0 }}
      className="absolute z-4 flex justify-center items-center w-full h-full bg-black/80 transition-all duration-[1500ms] ease-out"
    >
      <div
        style={
          visibleTransition
            ? { opacity: 100, scale: 1, transform: "translateY(0)" }
            : { opacity: 0, scale: 0.95, transform: "translateY(40px)" }
        }
        className="flex flex-col w-[70%] gap-y-[20px] bg-[#F3AE39]/85 border-2 rounded-[20px] text-black p-[25px] transition-all duration-[1500ms] ease-out"
      >
        <span className="text-[40px] font-pixelify font-bold">
          {requirements.heading}
        </span>
        <div className="font-inconsolata">
          {requirements.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="my-[15px] text-[18px]">{paragraph}</p>
          ))}
        </div>
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
