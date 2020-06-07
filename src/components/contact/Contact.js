import React from "react";
import { useForm, useState } from "react-hook-form";
import * as yup from "yup";
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

  function onSubmit(data) {
    console.log("data", data);
    localStorage.setItem('formName', formName);
    localStorage.setItem('formEmail', formEmail);
    localStorage.setItem('formText', formText);
    window.location.href = '/success';
  }

  return (
    <>
      <main>
        <form className="col-sm-4" onSubmit={handleSubmit(onSubmit)}>

          <input value={formName} className="col" name="fullName" placeholder="Full name" ref={register()} />
          {errors.fullName && <p className="contactError">{errors.fullName.message}</p>}

          <input value={formEmail} className="col" name="email" placeholder="Email" ref={register()} />
          {errors.email && <p className="contactError">{errors.email.message}</p>}

          <input value={formText} className="messageArea col" name="textMessage" placeholder="Message" ref={register()} />
          {errors.textMessage && <p className="contactError">{errors.textMessage.message}</p>}

          <input className="col" className="submitInput" type="submit" />
        </form>

      </main>
    </>
  );
}

export default Contact;
