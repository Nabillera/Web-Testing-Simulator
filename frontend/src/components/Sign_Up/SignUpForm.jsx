import { Button } from "../Button";
import { TextInputField } from "../TextInputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseAuth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseAuth";

export function SignUpForm({ onAnonymousLogin }) {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError("");
    if (
      !userCredentials.username ||
      !userCredentials.email ||
      !userCredentials.password ||
      !userCredentials.confirmPassword
    ) {
      setError("Fill in all the fields, please!");
      return;
    } else if (userCredentials.password != userCredentials.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userCredentials.email,
        userCredentials.password,
      );
      await setDoc(doc(db, "users", userCredential.user.uid), {
        username: userCredentials.username,
        email: userCredentials.email,
        createdAt: new Date(),
      });
      console.log("User created: ", userCredential.user.uid);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="absolute flex flex-col w-[620px] h-fit p-[30px] gap-y-[10px] items-center border-2 rounded-[30px] bg-[#F2F2F2]/90">
      <span className="font-pixelify font-bold text-[42px]">Sign Up</span>
      <div className="flex flex-col w-full font-inconsolata text-[48px] gap-y-[20px]">
        <TextInputField
          value={userCredentials.username}
          onChange={(event) =>
            setUserCredentials((prev) => ({
              ...prev,
              username: event.target.value,
            }))
          }
          textSize="20px"
          label="Username"
          placeholder="Enter your username"
          outlineColor="#F3AE39"
        />
        <TextInputField
          value={userCredentials.email}
          onChange={(event) =>
            setUserCredentials((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }
          textSize="20px"
          label="Email Address"
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
          textSize="20px"
          label="Password"
          placeholder="Enter your password"
          outlineColor="#F3AE39"
        />
        <TextInputField
          value={userCredentials.confirmPassword}
          onChange={(event) =>
            setUserCredentials((prev) => ({
              ...prev,
              confirmPassword: event.target.value,
            }))
          }
          textSize="20px"
          label="Confirm Password"
          placeholder="Confirm your password"
          outlineColor="#F3AE39"
        />
      </div>
      {error && (
        <span className="self-start font-inconsolata font-bold text-[18px] text-[#C1011A]">
          {error}
        </span>
      )}
      <div className="flex flex-col items-center gap-y-[15px] mt-[20px]">
        <Button onClick={handleSignUp} backColor="#F3AE39" width="275px">
          Sign Up
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
