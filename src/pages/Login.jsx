// NPM packages
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Project files
import InputField from "../components/InputField";
import form from "../data/login.json";
import { loginUser } from "../firebase/fireAuth";

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
      <div className="form-content">
        <h2>Welcome back</h2>
        <p>
          Please add in your email and password to access your LMS dashboard
        </p>
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
        <div className="form-fields">
          <label>
            <small>Did you forget your password?</small>
          </label>
          <Link to="/recover-password" className="btn btn-primary">
            Reset password
          </Link>
        </div>
      </div>
    </div>
  );
}
