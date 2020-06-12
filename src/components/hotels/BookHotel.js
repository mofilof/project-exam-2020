import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, POST } from "../../constant/Api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Booking() {
  const { register, handleSubmit, control } = useForm();
  const history = useHistory();

  const { id } = useParams();

  console.log(id);

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
    // history.push("/admin/booking");
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

          <input type="hidden" name="establishmentId" value={id} ref={register} />

          <Controller
            autoComplete="none"
            as={DatePicker}
            control={control}
            valueName="selected"
            onChange={([selected]) => selected}
            name="checkIn"
            className="form-control form-box__datepicker form-box__datepicker--check-in"
            placeholderText="Select check-in date"
            isClearable
            dateFormat="MMMM d yyyy"
            minDate={new Date()}
          />

          <Controller
            autoComplete="none"
            as={DatePicker}
            control={control}
            valueName="selected"
            onChange={([selected]) => selected}
            name="checkOut"
            className="form-control form-box__datepicker form-box__datepicker--check-in"
            placeholderText="Select check-out date"
            isClearable
            dateFormat="MMMM d yyyy"
            minDate={new Date()}
          />

          <button className="mybtn" type="submit">
            Book hotel
                    </button>
        </Form>
      </main>
    </>
  );
}

export default Booking;
