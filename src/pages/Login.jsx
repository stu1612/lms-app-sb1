// NPM packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormNotice from "../components/FormNotice";

// Project files
import InputField from "../components/InputField";
import form from "../data/login.json";
import { loginUser } from "../firebase/fireAuth";
import HomeIcon from "../components/HomeIcon";

export default function Login() {
  const navigate = useNavigate();

  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Method

  async function onLogin(event) {
    event.preventDefault();

    const returnedUID = await loginUser(email, password);

    // if (returnedUID) {
    //   setUID(returnedUID);
    //   returnedUID === admin && navigate("/admin");
    //   returnedUID !== admin && navigate("/dashboard");
    // }
  }

  // function handleChange() {
  //   setChecked(!checked);
  //   console.log(checked.toString());
  // }

  return (
    <div id="login" className="form-container">
      <HomeIcon />
      <div className="form-content">
        <h2>Welcome back</h2>
        <p>Please enter your email and password to access your LMS dashboard</p>
        <form onSubmit={onLogin} className="form-fields">
          <InputField setup={form.email} state={[email, setEmail]} />
          <InputField setup={form.password} state={[password, setPassword]} />
          <label>
            {/* <input type="checkbox" checked={checked} onChange={handleChange} /> */}
            <small>Keep me signed in</small>
            <input type="checkbox" checked={true} />
          </label>
          <button className="btn btn-primary">Submit</button>
        </form>
        <FormNotice
          title="Did you forget your password?"
          link="/recover-password"
          btn="reset password"
        />
      </div>
    </div>
  );
}
