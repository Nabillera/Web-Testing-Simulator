import { useState } from "react";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { TextInputField } from "./TextInputField";

export function ReportForm({ onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    stepsToReproduce: "",
    actualResult: "",
    expectedResult: "",
    severity: "",
    type: "",
    level: "0",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Report added to DB:", data);

      onClose();
    } catch (error) {
      console.log("Error occured:", error);
    }
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div className="absolute w-full h-full flex justify-center items-center bg-black/80 z-5">
      <div className=" flex flex-col gap-y-[10px] p-[20px] w-[650px] self-center bg-[#D9D9D9]/90 rounded-[20px] border-2 ">
        <div className="font-pixelify self-center text-[36px] font-bold">
          <span>CAUGHT THE </span>
          <span className="text-[#0A5598]">M</span>
          <span className="text-[#F3AE39]">O</span>
          <span className="text-[#E75809]">T</span>
          <span className="text-[#C1011A]">H</span>
          <span>?</span>
        </div>
        <div className="flex flex-col">
          <TextInputField
            onChange={(event) => handleChange("title", event.target.value)}
            label="Summary"
            placeholder="Short summary of the bug"
            outlineColor="#0A5598"
            textSize="16px"
          />
          <TextInputField
            onChange={(event) =>
              handleChange("stepsToReproduce", event.target.value)
            }
            label="Steps to Reproduce"
            placeholder="Steps to follow to reproduce the bug"
            outlineColor="#0A5598"
            textSize="16px"
            multiline={true}
            rows={5}
          />
          <TextInputField
            onChange={(event) =>
              handleChange("actualResult", event.target.value)
            }
            label="Actual Result"
            placeholder="Enter the actual behaviour of the element"
            outlineColor="#0A5598"
            textSize="16px"
            multiline={true}
          />
          <TextInputField
            onChange={(event) =>
              handleChange("expectedResult", event.target.value)
            }
            label="Expected Result"
            placeholder="Enter the expected behaviour"
            outlineColor="#0A5598"
            textSize="16px"
            multiline={true}
          />
        </div>
        <div className="flex gap-x-[30px]">
          <Dropdown
            value={formData.severity}
            onSelect={(value) => handleChange("severity", value)}
            options={["Critical", "Major", "Average", "Low"]}
            label="Severity"
            textSize="16px"
            placeholder="Set bug severity"
          />
          <Dropdown
            value={formData.type}
            onSelect={(value) => handleChange("type", value)}
            options={["GUI", "Functional"]}
            label="Type"
            textSize="16px"
            placeholder="Set bug type"
          />
        </div>
        <div className="flex gap-x-[45px]">
          <Button
            onClick={handleCloseModal}
            backColor="#C1011A"
            textSize="24px"
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} backColor="#C1011A" textSize="24px">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
