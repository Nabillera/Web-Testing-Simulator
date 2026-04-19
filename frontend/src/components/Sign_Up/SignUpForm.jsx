import { Button } from "../Button";
import { TextInputField } from "../TextInputField";

export function SignUpForm() {
  return (
    <div className="absolute flex flex-col w-[620px] h-fit p-[30px] gap-y-[10px] items-center border-2 rounded-[30px] bg-[#F2F2F2]/90">
      <span className="font-pixelify font-bold text-[42px]">Sign Up</span>
      <div className="flex flex-col w-full font-inconsolata text-[48px] gap-y-[20px]">
        <TextInputField
          label="Username"
          placeholder="Enter your username"
          outlineColor="#F3AE39"
        />
        <TextInputField
          label="Email Address"
          placeholder="Enter your email address"
          outlineColor="#F3AE39"
        />
        <TextInputField
          label="Password"
          placeholder="Enter your password"
          outlineColor="#F3AE39"
        />
        <TextInputField
          label="Confirm Password"
          placeholder="Confirm your password"
          outlineColor="#F3AE39"
        />
      </div>
      <div className="flex flex-col items-center gap-y-[15px] mt-[20px]">
        <Button backColor="#F3AE39" width="275px">
          Sign Up
        </Button>
        <button className="font-inconsolata font-bold text-[20px] cursor-pointer">
          Continue without an account
        </button>
      </div>
    </div>
  );
}
