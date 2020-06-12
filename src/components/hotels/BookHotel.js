import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, POST } from "../../constant/Api";
import Datepicker from "./DatePicker";


function Booking() {
  const { register, handleSubmit } = useForm()
  const history = useHistory();

  async function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "enquiries";
    console.log(url);
    const options = { headers, method: POST, body: JSON.stringify(data) };

    try {
      const response = await fetch(url, options);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    //Remember that messages need to be a const value in the contact fetch [booking, setBooking]....
    history.push("/admin/booking");
  }



  return (
    <>
      <main>
        <h1>Book your hotel now!</h1>
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
            <Form.Control name="message" placeholder="Type your message" ref={register} />
          </Form.Group>

          <Datepicker />

          <button className="mybtn" type="submit">
            Book hotel
          </button>
        </Form>
      </main>
    </>
  );
}

export default Booking;
