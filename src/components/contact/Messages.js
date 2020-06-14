import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, POST } from "../../constant/Api";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string()
    .required("Your name is required.")
    .min(2, "Minimum two characters"),
  email: yup
    .string()
    .email("Enter valid email.")
    .required("We need your email."),
  message: yup
    .string()
    .min(10, "Minimum ten characters")
    .required("You forgot to type in your question."),
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
    history.push('/success');
  }

  return (
    <>
      <main>
        <h1>Send us a message</h1>
        <p>Send us your questions or feedback. We appriciate your feedback, good or bad. We always strive to be better and make all our customers satisfied. We will answer your message as soon as we can.</p>
        <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <b>Full name:</b>
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" placeholder="Full name" ref={register} />
            {errors.name && <p className="errorMessage">{errors.name.message}</p>}
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
            {errors.message && <p className="errorMessage">{errors.message.message}</p>}
          </Form.Group>

          <button className="mybtn" type="submit" >
            Send message
          </button>
        </Form>
      </main>
    </>
  );
}

export default Messages;


