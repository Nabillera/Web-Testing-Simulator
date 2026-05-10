import { REQUIREMENTS } from "../../../DATA/Level_requirements";
import { Button } from "../Button";
import { TextField } from "./TextField";
import { Checkbox } from "./Checkbox";
import { RadioButton } from "./RadioButton";
import { Dropdown } from "../Dropdown";
import { useState } from "react";
import { VALIDATION } from "../../../DATA/Level-3_regex";

export function LevelThree() {
  const [dropdownValues, setDropdownValues] = useState({
    gender: "",
    colour: "",
  });

  const [radioValues, setRadioValues] = useState({
    allergies: "",
    music: "",
    preference: "",
  });

  const [fieldValues, setFieldValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthday: "",
    number: "",
    motto: "",
    details: "",
  });
  const handleSelectDropdown = (field, value) => {
    setDropdownValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectRadio = (field, value) => {
    setRadioValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSetField = (field, value) => {
    setFieldValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col w-[80%] items-center p-[20px] pt-[10px]">
      <h2 className="font-pixelify font-bold text-[40px]">
        Level 3: Intuition is your best friend
      </h2>
      <div className="flex flex-col gap-y-[10px] w-[95%] items-center bg-[#D9D9D9] border-2 rounded-[20px] p-[15px] shadow-[8px_8px_15px_rgba(0,0,0,0.4)]">
        <div className="font-pixelify text-[40px] font-bold">
          <span>LET'S BREAK THE </span>
          <span className="text-[#F3AE39]">I</span>
          <span className="text-[#E75809]">C</span>
          <span className="text-[#0A5598]">E</span>
          <span>!</span>
        </div>

        <div className="w-full flex flex-col gap-y-[10px]">
          <div className="flex gap-x-[20px]">
            <TextField label="First Name" placeholder="Enter your first name" />
            <TextField label="Last Name" placeholder="Enter your last name" />
            <Dropdown
              value={dropdownValues.gender}
              label="Gender"
              options={["Male", "Female", "Chair"]}
              textSize="20px"
              placeholder="Select your gender"
              onSelect={(value) => handleSelectDropdown("gender", value)}
            />
          </div>
          <div className="flex gap-x-[20px]">
            <TextField
              label="Email Address"
              placeholder="Enter your email address"
            />
            <TextField
              label="Phone number"
              placeholder="Enter your phone number"
            />
            <TextField
              label="Date of Birth"
              placeholder="Enter your birth date"
            />
          </div>
          <div className="flex gap-x-[20px]">
            <TextField
              label="Favourite Number"
              placeholder="Enter your favourite number"
            />
            <Dropdown
              value={dropdownValues.colour}
              label="Favourite colour"
              options={["Green", "Red", "Blue"]}
              textSize="20px"
              placeholder="Select a color"
              onSelect={(value) => handleSelectDropdown("colour", value)}
            />
            <div className="flex flex-col w-full">
              <span className="font-inconsolata text-[20px] font-bold">
                Do you have any allergies?
              </span>
              <div className="flex items-center h-full font-inconsolata justify-between">
                <RadioButton
                  label="Yes"
                  onSelect={(value) => handleSelectRadio("allergies", value)}
                  selectedOption={radioValues.allergies}
                />
                <RadioButton
                  label="No"
                  onSelect={(value) => handleSelectRadio("allergies", value)}
                  selectedOption={radioValues.allergies}
                />
                <RadioButton
                  label="Who knows?"
                  onSelect={(value) => handleSelectRadio("allergies", value)}
                  selectedOption={radioValues.allergies}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-inconsolata text-[20px] font-bold">
              Favourite Music Genre
            </span>
            <div className="flex justify-between">
              <Checkbox
                label="Option 1"
                onSelect={(value) => handleSelectRadio("music", value)}
                selectedOption={radioValues.music}
              />
              <Checkbox
                label="Option 2"
                onSelect={(value) => handleSelectRadio("music", value)}
                selectedOption={radioValues.music}
              />
              <Checkbox
                label="Option 3"
                onSelect={(value) => handleSelectRadio("music", value)}
                selectedOption={radioValues.music}
              />
              <Checkbox
                label="Option 4"
                onSelect={(value) => handleSelectRadio("music", value)}
                selectedOption={radioValues.music}
              />
              <Checkbox
                label="Option 5"
                onSelect={(value) => handleSelectRadio("music", value)}
                selectedOption={radioValues.music}
              />
              <Checkbox
                label="Option 6"
                onSelect={(value) => handleSelectRadio("music", value)}
                selectedOption={radioValues.music}
              />
              <Checkbox
                label="Option 7"
                onSelect={(value) => handleSelectRadio("music", value)}
                selectedOption={radioValues.music}
              />
            </div>
          </div>
          <div className="flex gap-x-[20px]">
            <TextField label="Life Motto" placeholder="Enter your life motto" />
            <div className="flex flex-col w-full max-w-[439px]">
              <span className="font-inconsolata text-[20px] font-bold">
                Your Preference
              </span>
              <div className="flex h-full items-center gap-x-[97px] font-inconsolata">
                <RadioButton
                  label="Melon"
                  onSelect={(value) => handleSelectRadio("preference", value)}
                  selectedOption={radioValues.preference}
                />
                <RadioButton
                  label="Watermelon"
                  onSelect={(value) => handleSelectRadio("preference", value)}
                  selectedOption={radioValues.preference}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-inconsolata text-[20px] font-bold">
              More Details
            </label>
            <textarea
              placeholder="Tell us a few fun facts about yourself!"
              className="font-inconsolata border-2 rounded-[10px] p-[7px] bg-white outline-[#0A5598] text-[20px] min-h-[130px]"
            />
          </div>
        </div>
        <div className="flex gap-x-[150px]">
          <Button
            backColor="#0A5598"
            textColor="#FFFFFF"
            textSize="20px"
            width="240px"
          >
            Clear
          </Button>
          <Button
            backColor="#0A5598"
            textColor="#FFFFFF"
            textSize="20px"
            width="240px"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
