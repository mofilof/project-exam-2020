import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
  name: yup.string()
    .required("Your name is required.")
    .matches(/(Admin|admin)/),
  password: yup
    .string()
    .required("You need a password to login")
    .min(6, "Minimum six characters"),

});

const Login = () => {
  const { register, errors } = useForm({ validationSchema: schema });
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
    if (errors === false) {
      window.location.href = '/welcome';
    }


  }

  return (
    <>
      <main>
        <Form >
          <div className="col">
            <h1>Login</h1>
            <p>You can use whatever username and password you want to test the login.</p>
          </div>

          <div className="col">
            <input name="name" value={nameValue} onChange={onChange} placeholder="Username" type="text" ref={register} />
            {errors.name && <p className="errorMessage">{errors.name.message}</p>}
          </div>
          <div className="col">
            <input name="password" placeholder="Password" value={password} onChange={onChangePassword} type="password" ref={register} />
            {errors.password && <p className="errorMessage">{errors.password.message}</p>}
          </div>
          <div className="col">
            <button id="loginButton" className="mybtn" type="submit" onClick={submitted} >Login</button>
          </div>
          <div className="col">
            <p>Are you an Admin user?</p>
            <NavLink to={'/admin'}>
              <button className="adminbtn">Go to admin login</button>
            </NavLink>
          </div>
        </Form>
      </main>

    </>
  );
};

export default Login;