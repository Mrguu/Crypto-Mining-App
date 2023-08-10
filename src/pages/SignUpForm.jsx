import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import "../styles/SignUp.css";
import SignupInput from "../components/SignupInput";
import homebg from "../images/homebg.jpg";
import Home from "../pages/Home";
import { Link } from "react-router-dom";
import Main from "../Main";
import LogIn from "../pages/LogIn";

function SignUpForm() {
  const [values, setValues] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: "1",
      name: "username",
      type: "text",
      errMessage:
        "Username must be  6-10 characters and shouldn't include any special character!",
      label: "User Name",
      required: true,
      pattern: "^[A-Za-z0-9]{6,16}$",
    },

    {
      id: "2",
      name: "fullname",
      type: "text",
      errMessage:
        "Fullname shouldn't include any special character and numbers!",
      label: "Full Name",
      required: true,
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: "3",
      name: "email",
      type: "email",
      errMessage: "It must be a valid email address!",
      label: "Email ",
      required: true,
    },
    {
      id: "4",
      name: "password",
      type: "password",
      errMessage:
        "Password must be 8-20 characters and include at least 1 small-letter, 1 capital-letter, 1 number and 1 special characters!",
      label: "Password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: "5",
      name: "confirmpassword",
      type: "password",
      errMessage: "Passwords don't match!",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
    },
  ];

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localRegister = localStorage.getItem("Register");
  const localEmail = localStorage.getItem("Email");
  useEffect(() => {
    if (localRegister) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });
  console.log(values.username);
  const handleClick = () => {
    let isValid = true;

    inputs.forEach((input) => {
      if (input.pattern) {
        const pattern = new RegExp(input.pattern);
        if (!pattern.test(values[input.name])) {
          alert(`${input.errMessage}`);
          isValid = false;
          return;
        }
      }
    });

    if (isValid) {
      // Save data to localStorage and perform other actions
      localStorage.setItem("Username", values.username);
      localStorage.setItem("Fullname", values.fullname);
      localStorage.setItem("Email", values.email);
      localStorage.setItem("Password", values.password);
      localStorage.setItem("ConfirmPassword", values.confirmpassword);
      localStorage.setItem("Register", values.email);
      alert("Account created successfully!");
      window.location.reload();
    } else {
      alert("Please fill all the fields correctly");
      window.location.reload();
    }
  };

  return (
    <div>
      {showHome ? (
        <Main />
      ) : show ? (
        <LogIn />
      ) : (
        <div
          className="SingUpContainer"
          style={{ backgroundImage: `url(${homebg})` }}>
          <div className="SignUpHeader">
            <img src={logo} alt="" />
            <h1>ScamMining</h1>
          </div>
          <form onSubmit={handlerSubmit}>
            <h1>Register Here</h1>
            {inputs.map((input) => (
              <SignupInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className="checkBox">
              <input type="checkbox" required={true} name="CheckBox" />
              <p>
                I comfirm that I have read, accpet and agreed to all terms of
                Use, that I am 18 years old, and I am not specified as a US
                person.
              </p>
            </div>
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUpForm;
