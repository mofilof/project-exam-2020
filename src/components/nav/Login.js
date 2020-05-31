import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log("data", data);
  }

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

export default Login;