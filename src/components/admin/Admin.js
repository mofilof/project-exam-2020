import React from "react";
//import { useForm } from "react-hook-form";
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Admin = () => {
  const [adminUser, setAdminUser] = React.useState("");
  const [adminPassword, setAdminPassword] = React.useState("");

  const onUser = (event) => {
    setAdminUser(event.target.value);
  };

  const onPassword = (event) => {
    setAdminPassword(event.target.value);
  };

  function adminSubmit() {
    sessionStorage.setItem("adminUser", adminUser);
    localStorage.setItem("adminPassword", adminPassword);
    window.location.href = '/adminUser';

  }

  return (
    <>
      <main>
        <div className="column">
          <div className="col">
            <h1>Admin login</h1>
            <p>It is importent that you use <b>Admin</b> ad your user to get to the page for Admin users! </p>
          </div>
          <div className="col">
            <input value={adminUser} onChange={onUser} placeholder="Username is Admin" type="text" />
          </div>
          <div className="col">
            <input placeholder="Type anything" value={adminPassword} onChange={onPassword} type="password" />
          </div>
          <div className="col">
            <button className="mybtn" type="submit" onClick={adminSubmit}>
              Login</button>
          </div>
          <div className="col">
            <p>Not an Admin user?</p>
            <Link to={'/login'}>
              <button className="adminbtn">Back to login</button>
            </Link>
          </div>

        </div>



      </main>

    </>
  );
};

export default Admin;

/*

import { useHistory } from "react-router-dom";

function Admin() {
  const { register, handleSubmit } = useForm();

  let thedata = useHistory();

  function onSubmit(data) {
    console.log("data", data);
    thedata.push("/adminuser")
    window.location.href = '/adminuser';
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

          <button className="adminbtn" type="submit">Login</button>
        </Form>
      </main>

    </>
  );
}

export default Admin;
*/