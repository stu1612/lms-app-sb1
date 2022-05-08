// NPM packages
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// Project files
import InputField from "../components/InputField";
import validateString from "../scripts/validateString";
import form from "../data/signUp.json";
import { createUser } from "../firebase/fireAuth";
import { createDocumentWithId } from "../firebase/fireStore";
import HomeIcon from "../components/HomeIcon";
import { AuthContext } from "../contexts/AuthContext";

export default function SignUp() {
  // global state
  const { uid, setUID } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function onSignUp(event) {
    event.preventDefault();

    // 1 Create UID
    const newUID = await createUser(email, password);

    // 2 Create user document
    const newUser = {
      name: name,
      role: "student",
    };
    const payload = await createDocumentWithId("users", newUID, newUser);

    if (payload.error) {
      console.log(payload.error);
    } else {
      setUID(newUID);
      navigate("/dashboard");
    }
  }

  return (
    <div id="sign-up" className="form-container">
      <HomeIcon />
      <div className="form-content">
        <h2>Sign Up</h2>
        <p>Please complete all fields so that we can get you started !</p>
        <form onSubmit={onSignUp} className="form-fields">
          <InputField
            setup={form.name}
            state={[name, setName]}
            validation={validateString}
          />
          <InputField setup={form.email} state={[email, setEmail]} />
          <InputField
            setup={form.password}
            state={[password, setPassword]}
            validation={validateString}
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
