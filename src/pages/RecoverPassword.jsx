// NPM packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project files
import InputField from "../components/InputField";
import form from "../data/recoverPassword.json";
import { recoverUser } from "../firebase/fireAuth";

export default function RecoverPassword() {
  // Local state
  const [email, setEmail] = useState("");

  // Method
  async function onRecover(event) {
    event.preventDefault();

    await recoverUser(email);
    alert(`We sent an email to ${email}. Check you spam folder as well.`);
  }

  return (
    <div id="recover-password" className="form-container">
      <div className="form-content">
        <h2>Recover Password</h2>
        <p>
          Enter your email used when you signed up. After submitting your
          request, check both inbox and spam to make sure you have recieved your
          password instructions.
        </p>
        <p>Don't forget to check every inbox including the spam folder.</p>
        <form onSubmit={onRecover} className="form-fields">
          <InputField setup={form.email} state={[email, setEmail]} />
          <button className="btn btn-primary">Get new password</button>
        </form>
        <div className="form-fields">
          <label>
            <small>Remebered your password?</small>
          </label>
          <Link to="/login" className="btn btn-primary">
            go back
          </Link>
        </div>
      </div>
    </div>
  );
}
