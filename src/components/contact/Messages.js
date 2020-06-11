import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, POST } from "../../constant/Api";

import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string()
    .required("Your name is required.")
    .min(2, "Minimum two characters"),
  email: yup
    .string()
    .email("Enter valid email.")
    .required("We need your email."),
  textMessage: yup.string()
    .required("Ops, that message is to short.")
    .min(2, "Minimum two characters.")
    .max(100, "Maximun 100 characters."),
});



function Messages() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  })
  const history = useHistory();

  async function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "contacts";
    console.log(url);
    const options = { headers, method: POST, body: JSON.stringify(data) };

    try {
      const response = await fetch(url, options);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    //Remember that messages need to be a const value in the contact fetch [messages, setMessages]....
    history.push("/admin/messages");
  }

  return (
    <>
      <main>
        <h1>Send us a message</h1>
        <p>Send us your questions or feedback. We appriciate your feedback, good or bad. We always strive to be better and make all our customers satisfied. We will answer your message as soon as we can.</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <b>Full name:</b>
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" placeholder="Full name" ref={register} />
            {errors.fullName && <p className="errorMessage">{errors.fullName.message}</p>}
          </Form.Group>

          <Form.Group>
            <b>Email adress:</b>
            <Form.Label>Email adress</Form.Label>
            <Form.Control name="email" placeholder="Email adress" ref={register} />
            {errors.email && <p className="errorMessage">{errors.email.message}</p>}
          </Form.Group>

          <Form.Group>
            <b>Message:</b>
            <Form.Label>Message</Form.Label>
            <Form.Control name="message" placeholder="Type your message" ref={register} />
            {errors.textMessage && <p className="errorMessage">{errors.textMessage.message}</p>}
          </Form.Group>

          <button className="mybtn" type="submit">
            Send message
          </button>
        </Form>
      </main>
    </>
  );
}

export default Messages;
