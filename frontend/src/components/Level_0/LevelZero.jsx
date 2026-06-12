import { Button } from "../Button";
import { TextInputField } from "../TextInputField";
import { REQUIREMENTS } from "../../../DATA/Level_requirements";
import { useState } from "react";

export function LevelZero() {
  const [userText, setUserText] = useState({ isProvided: false, text: "" });

  const handleUserInput = (event) => {
    let userInput = event.target.value.trim();
    setUserText((prev) => ({ ...prev, text: userInput }));
  };

  const handlePrint = () => {
    if (userText.text.length == 0) {
      return;
    }
    setUserText((prev) => ({ ...prev, isProvided: true }));
    console.log("Your text: " + userText.text);
  };

  return (
    <div className="flex flex-col w-[80%] items-center gap-y-[180px] p-[30px]">
      <h2 className="font-pixelify font-bold text-[32px]">
        Level 0: Polish the magnifying glass
      </h2>
      <div className="flex flex-col gap-y-[40px] w-[70%] items-center">
        <div className="flex items-center gap-x-[40px] w-full justify-between">
          <TextInputField
            placeholder="Enter text here..."
            outlineColor="#F3AE39"
            width="570px"
            maxCharacters="20"
            onChange={handleUserInput}
          />
          <Button backColor="#F3AE39" width="200px" onClick={handlePrint}>
            Print
          </Button>
        </div>
        <div className="flex gap-x-[20px] w-full font-inconsolata justify-start">
          <span className="text-[32px]">Result here &rarr; </span>
          <span className="font-bold text-[32px]">
            {userText.isProvided && "Check the console :D"}
          </span>
        </div>
      </div>
    </div>
  );
}
