import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, POST } from "../../constant/Api";


function Messages() {
  const { register, handleSubmit } = useForm()

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
    history.push('/success');
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
          </Form.Group>

          <Form.Group>
            <b>Email adress:</b>
            <Form.Label>Email adress</Form.Label>
            <Form.Control name="email" placeholder="Email adress" ref={register} />
          </Form.Group>

          <Form.Group>
            <b>Message:</b>
            <Form.Label>Message</Form.Label>
            <Form.Control name="tmessage" placeholder="Type your message" ref={register} />
          </Form.Group>

          <button className="mybtn" type="submit" onSubmit={handleSubmit()}>
            Send message
          </button>
        </Form>
      </main>
    </>
  );
}

export default Messages;


