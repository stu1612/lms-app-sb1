// npm
import { useState } from "react";
// files
import onValidate from "../scripts/validateInput";

export default function InputField({ setup, state, validation }) {
  const { label, placeholder, type, required, autoFocus } = setup;
  const [getter, setter] = state;
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="input-field">
      <label>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          value={getter}
          autoFocus={autoFocus}
          onBlur={() => onValidate(validation, getter, setter, setErrorMessage)}
          onChange={(event) => setter(event.target.value)}
          required={required}
        />
        <small className="error">{errorMessage}</small>
      </label>
    </div>
  );
}
