import { useLocation, useNavigate } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";
import Background from "../../assets/background-wide.png";
import { SignInForm } from "./SignInForm";
import { signInAnonymously } from "firebase/auth";
import { auth } from "../../config/firebaseAuth";

export function AuthenticationPage() {
  const location = useLocation();
  const path = location.pathname;

  const isSignUp = path == "/sign-up";
  const isSignIn = path == "/sign-in";
  const navigate = useNavigate();

  const handleAnonymousLogin = async () => {
    try {
      await signInAnonymously(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-[calc(100vh-92px)] overflow-hidden">
        <img src={Background} className="opacity-50 w-[100%]" />
      </div>
      {isSignUp && <SignUpForm onAnonymousLogin={handleAnonymousLogin} />}
      {isSignIn && <SignInForm onAnonymousLogin={handleAnonymousLogin} />}
    </div>
  );
}
