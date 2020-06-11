import React, {/* useRef */ } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [nameValue, setNameValue] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChange = (event) => {
    setNameValue(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  function submitted() {
    console.log("form submitted");
    localStorage.setItem("username", nameValue);
    localStorage.setItem("password", password);
    window.location.href = '/welcome';

  }

  return (
    <>
      <main>
        <div className="column">
          <div className="col">
            <h1>Login</h1>
            <p>You can use whatever username and password you want to test the login.</p>
          </div>
          <div className="col">
            <input value={nameValue} onChange={onChange} placeholder="Username" type="text" />
          </div>
          <div className="col">
            <input placeholder="Password" value={password} onChange={onChangePassword} type="password" />
          </div>
          <div className="col">
            <button id="loginButton" className="mybtn" type="submit" onClick={submitted}>Login</button>
          </div>
          <div className="col">
            <p>Are you an Admin user?</p>
            <Link to={'/admin'}>
              <button className="adminbtn">Go to admin login</button>
            </Link>
          </div>
        </div>
      </main>

    </>
  );
};

export default Login;