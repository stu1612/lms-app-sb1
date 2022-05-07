// NPM packages
import { useState } from "react";
import FormNotice from "../components/FormNotice";
import HomeIcon from "../components/HomeIcon";

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
      <HomeIcon />
      <div className="form-content">
        <h2>Recover Password</h2>
        <p>
          Enter your email used when you signed up. After submitting your
          request, check both inbox and spam to make sure you have recieved your
          password instructions.
        </p>
        <form onSubmit={onRecover} className="form-fields">
          <InputField setup={form.email} state={[email, setEmail]} />
          <button className="btn btn-primary">Get new password</button>
        </form>
        <FormNotice
          title="remebered your password"
          link="/login"
          btn="go back"
        />
      </div>
    </div>
  );
}
