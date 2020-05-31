import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Admin() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log("data", data);
  }

  return (
    <>
      <main>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login for admin user</h1>
          <Form.Group>
            <Form.Label><p>Admin username</p></Form.Label>
            <Form.Control name="adminusername" placeholder="Username" ref={register} />
          </Form.Group>

          <Form.Group>
            <Form.Label><p>Password</p></Form.Label>
            <Form.Control name="password" placeholder="Password" ref={register} />
          </Form.Group>

          <Button type="submit">Login</Button>
        </Form>
      </main>

    </>
  );
}

export default Admin;