import { useState } from "react";
import "./CustomInput.css";
const CustomInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, pattern, id, ...inputProps } = props;
  return (
    <div>
      <div className="custominput__layout">
        <div className="custominput__label">
          <div className="custominput__index">{id}</div>
          <div>
            Update your <span className="custominput__boldlabel">{label}</span>
          </div>
        </div>
        <div>
          <input
            className="custominput"
            {...inputProps}
            onChange={onChange}
            onBlur={() => setFocused((p) => !p)}
            onFocus={() => setFocused((p) => !p)}
            focused={focused.toString()}
            pattern={pattern}
            required
          />
          <span className="input__errormessage">{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
