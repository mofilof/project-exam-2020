import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

/*
function Login() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log("data", data);
  }
*/

const Login = () => {
  //EXAMPLE
  const [nameValue, setNameValue] = React.useState('');
  const onChange = event => setNameValue(event.target.value);
  //
  const [usernameValue, setUsernameValue] = React.useState('');
  const rememberValue = event => setNameValue(event.target.value);

  //WHY CAN'T I TYPE SOMETHING IN THE INPUT I USE THE ONSUBMIT?
  //THE onChange WORKS FINE...

  const loginbtn = document.getElementById('loginButton');
  const klikk = loginbtn.onclick;
  function submitted() {
    if (klikk = true) {
      onSubmit{ rememberValue }
    }
  };


  return (
    <>
      //EXAMPLE
      <div>
        <h1>Hello React with Local Storage!</h1>
        <input value={nameValue} type="text" onChange={onChange} />
        <p>{nameValue}</p>
      </div>
      //
      <div>
        <h1>Login</h1>

        <input value={usernameValue} placeholder="Username" type="text" />

        <input placeholder="Password" type="password" />

        <Button id="loginButton" type="submit">Login</Button>




      </div>

    </>

  );
  submitted();
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