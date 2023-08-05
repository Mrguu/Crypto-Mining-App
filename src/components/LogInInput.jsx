import React, { useState } from "react";

const LogInInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { id, label, onChange, errorMessage, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocus(true);
  };

  return (
    <div className="logInInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focus={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default LogInInput;
