import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Messages from './Messages';
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";



function Contact() {



  return (
    <>
      <main>

        <Messages />

      </main>
    </>
  );
}

export default Contact;

/*

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

*/

/*
        <form className="col-sm-6" onSubmit={handleSubmit(onSubmit)}>

          <div className="col">
            <h4>Full name:</h4>
            <input value={formName} onChange={setNameValues}
              className="col" name="fullName" placeholder="Full name" ref={register()} />
            {errors.fullName && <p className="contactError">{errors.fullName.message}</p>}
          </div>

          <div className="col">
            <h4>Email adress:</h4>
            <input value={formEmail} onChange={setEmailValues}
              className="col" name="email" placeholder="Email" ref={register()} />
            {errors.email && <p className="contactError">{errors.email.message}</p>}
          </div>

          <div className="col">
            <h4>Message:</h4>
            <textarea rows="5" value={formText} onChange={setTextValues}
              className="messageArea col" name="textMessage" placeholder="Message" ref={register()} />
            {errors.textMessage && <p className="contactError">{errors.textMessage.message}</p>}
          </div>

          <div className="col">
            <button className="col mybtn" type="submit" onClick={submitFormData}>Send</button>
          </div>

        </form>
*/