import React, { useState } from "react";

const SignupInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { id, label, onChange, errMessage, ...inputProps } = props;

  const handleFocused = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocused}
        focused={focused.toString()}
      />
      <span>{errMessage}</span>
    </div>
  );
};

export default SignupInput;
