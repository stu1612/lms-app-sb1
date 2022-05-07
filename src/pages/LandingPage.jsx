// npm
import { useContext } from "react";
// files
import { AuthContext } from "../contexts/AuthContext";
import img from "../assets/images/landing.png";
import LoginButtons from "../components/LoginButtons";
import ReturnToApp from "../components/ReturnToApp";

export default function LandingPage() {
  const { uid } = useContext(AuthContext);
  return (
    <div className="landing">
      <div className="landing__image">
        <img src={img} alt="stack of book" />
      </div>
      <div className="landing__content">
        <h1 className="landing__title">
          {!uid ? "Welcome to our LMS Software Programme" : "Welcome back"}
        </h1>
        <p>
          {!uid
            ? "With our amazing support programme you will gain the skills needed to further your development goals"
            : "You are still logged in"}
        </p>
        {!uid && <LoginButtons />}
        {uid && <ReturnToApp />}
      </div>
    </div>
  );
}
