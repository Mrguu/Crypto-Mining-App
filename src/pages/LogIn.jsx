import React, { useState, useEffect } from "react";
import homebg from "../images/homebg.jpg";
import "../styles/LogIn.css";
import LogInInput from "../components/LogInInput";
import logo from "../images/logo.png";
import Main from "../Main";

function LogIn() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const localEmail = localStorage.getItem("Email");
  const localUsername = localStorage.getItem("Username");
  const localPassword = localStorage.getItem("Password");

  const inputs = [
    {
      id: 10,
      name: "username",
      type: "text",
      label: "Username",
      errorMessage:
        "We are not found this username, Please enter correct username!",
      pattern: localUsername,
      required: true,
    },
    {
      id: 11,
      name: "email",
      type: "email",
      label: "Email",
      errorMessage:
        "We are not found this email address, Please enter correct email!",
      pattern: localEmail,
      required: true,
    },
    {
      id: 12,
      name: "password",
      type: "password",
      label: "Password",
      errorMessage: "Enter correct password!",
      pattern: localPassword,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const localRegister = localStorage.getItem("Register");
  const [show, setShow] = useState(false);
  const handleLogIn = () => {
    if (
      localUsername == values.username &&
      localEmail == values.email &&
      localPassword == values.password
    ) {
      localStorage.setItem("Register", values.email);
      alert("LogIn successfully!");
      window.location.reload();
    }
  };

  useEffect(() => {
    if (localEmail) {
      setShow(true);
    }
  });

  console.log(values);
  return (
    <div
      className="logInContainer"
      style={{ backgroundImage: `url(${homebg})` }}>
      <div className="LogInHeader">
        <img src={logo} alt="" />
        <h1>ScamMining</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>LogIn here!</h1>
        {inputs.map((input) => (
          <LogInInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={handleLogIn}>Log In</button>
        <p>
          If you don't have a account <a href="SignUp">Register here!</a>
        </p>
      </form>
    </div>
  );
}

export default LogIn;
