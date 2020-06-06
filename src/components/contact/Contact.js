import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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

  function onSubmit(data) {
    console.log("data", data);

  }

  return (
    <>
      <main>
        <form className="col-sm-4" onSubmit={handleSubmit(onSubmit)}>

          <input className="col" name="fullName" placeholder="Full name" ref={register()} />
          {errors.fullName && <p className="contactError">{errors.fullName.message}</p>}

          <input className="col" name="email" placeholder="Email" ref={register()} />
          {errors.email && <p className="contactError">{errors.email.message}</p>}

          <input className="messageArea col" name="textMessage" placeholder="Message" ref={register()} />
          {errors.textMessage && <p className="contactError">{errors.textMessage.message}</p>}

          <input className="col" className="submitInput" type="submit" />
        </form>


      </main>
    </>
  );
}

export default Contact;
