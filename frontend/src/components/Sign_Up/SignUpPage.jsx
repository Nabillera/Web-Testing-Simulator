import { useLocation } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";
import Background from "../../assets/background-wide.png";
import { SignInForm } from "./SignInForm";

export function SignUpPage() {
  const location = useLocation();
  const path = location.pathname;

  const isSignUp = path == "/sign-up";
  const isSignIn = path == "/sign-in";

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-[calc(100vh-92px)] overflow-hidden">
        <img src={Background} className="opacity-50 w-[100%]" />
      </div>
      {isSignUp && <SignUpForm />}
      {isSignIn && <SignInForm />}
    </div>
  );
}
