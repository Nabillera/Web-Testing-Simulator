import { Button } from "../Button";
import { TextInputField } from "../TextInputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/firebaseAuth";

export function SignInForm({ onAnonymousLogin }) {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        userCredentials.email,
        userCredentials.password,
      );
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="absolute flex flex-col w-[620px] h-fit p-[30px] gap-y-[10px] items-center border-2 rounded-[30px] bg-[#F2F2F2]/90">
      <span className="font-pixelify font-bold text-[42px]">Sign In</span>
      <div className="flex flex-col w-full font-inconsolata text-[48px] gap-y-[20px]">
        <TextInputField
          value={userCredentials.email}
          onChange={(event) =>
            setUserCredentials((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }
          label="Email"
          placeholder="Enter your email address"
          outlineColor="#F3AE39"
        />
        <TextInputField
          value={userCredentials.password}
          onChange={(event) =>
            setUserCredentials((prev) => ({
              ...prev,
              password: event.target.value,
            }))
          }
          label="Password"
          placeholder="Enter your password"
          outlineColor="#F3AE39"
        />
      </div>
      {error && (
        <span className="self-start font-inconsolata font-bold text-[18px] text-[#C1011A]">
          {error}
        </span>
      )}
      <div className="flex flex-col items-center gap-y-[15px] mt-[20px]">
        <Button onClick={handleSignIn} backColor="#F3AE39" width="275px">
          Sign In
        </Button>
        <button
          onClick={onAnonymousLogin}
          className="font-inconsolata font-bold text-[20px] cursor-pointer"
        >
          Continue without an account
        </button>
      </div>
    </div>
  );
}
