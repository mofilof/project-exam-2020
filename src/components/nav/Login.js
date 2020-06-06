import React, { useRef } from "react";
import { useForm, usestate } from "react-hook-form";
import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
//import { Link } from "react-router-dom";

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
      <div>
        <h1>Login</h1>
        <input value={nameValue} onChange={onChange} placeholder="Username" type="text" />
        <input placeholder="Password" value={password} onChange={onChangePassword} type="password" />
        <Button id="loginButton" type="submit" onClick={submitted}>
          Login
                </Button>
      </div>
    </>
  );
};

export default Login;

/*
return (
  <>
        <main>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Form.Group>
              <Form.Label><p>Username</p></Form.Label>
              <Form.Control name="username" placeholder="Username" ref={register} />
            </Form.Group>

            <Form.Group>
              <Form.Label><p>Password</p></Form.Label>
              <Form.Control name="password" placeholder="Password" ref={register} />
            </Form.Group>

            <Button type="submit">Login</Button>
          </Form>

          <p>Admin user?</p>

          <Link to={'/admin'}>
            <Button>Click here</Button>
          </Link>
        </main>
      </>
);
}
*/
