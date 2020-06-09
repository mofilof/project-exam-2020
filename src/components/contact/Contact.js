import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
  fullName: yup.string().required("Your name is required.")
    .min(2, "Minimum two characters"),
  email: yup
    .string()
    .email("Enter valid email.")
    .required("We need your email."),
  textMessage: yup.string().required("Ops, that message is to short.")
    .min(2, "Minimum two characters.")
    .max(100, "Maximun 100 characters."),
});

function Contact() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  const [formName, setformNameValue] = React.useState("");
  const [formEmail, setformEmailValue] = React.useState("");
  const [formText, setformTextValue] = React.useState("");

  const setNameValues = (event) => {
    setformNameValue(event.target.value);
  }
  const setEmailValues = (event) => {
    setformEmailValue(event.target.value);
  }
  const setTextValues = (event) => {
    setformTextValue(event.target.value);
  }


  function onSubmit(data) {
    console.log("data", data);
    window.location.href = '/success';
  }

  function submitFormData() {
    sessionStorage.setItem('formName', formName);
    sessionStorage.setItem('formEmail', formEmail);
    sessionStorage.setItem('formText', formText);
  }



  return (
    <>
      <main>
        <form className="col-sm-6" onSubmit={handleSubmit(onSubmit)}>

          <input value={formName} onChange={setNameValues}
            className="col" name="fullName" placeholder="Full name" ref={register()} />
          {errors.fullName && <p className="contactError">{errors.fullName.message}</p>}

          <input value={formEmail} onChange={setEmailValues}
            className="col" name="email" placeholder="Email" ref={register()} />
          {errors.email && <p className="contactError">{errors.email.message}</p>}

          <input value={formText} onChange={setTextValues}
            className="messageArea col" name="textMessage" placeholder="Message" ref={register()} />
          {errors.textMessage && <p className="contactError">{errors.textMessage.message}</p>}

          <button className="col submitInput mybtn" type="submit" onClick={submitFormData}>Send</button>
        </form>

      </main>
    </>
  );
}

export default Contact;
