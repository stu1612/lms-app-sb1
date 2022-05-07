// npm
import { Link } from "react-router-dom";
// files
import img from "../assets/images/landing.png";

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="landing__image">
        <img src={img} alt="stack of book" />
      </div>
      <div className="landing__content">
        <h1 className="landing__title">
          Welcome to our LMS Software Programme
        </h1>
        <p>
          With our amazing support programme you will gain the skills needed to
          further your development goals
        </p>
        <div className="landing__buttons">
          <Link className="btn btn-primary w-100" to="/signup">
            Sign Up
          </Link>
          <Link className="btn btn-primary w-100" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
