import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, POST } from "../../constant/Api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string()
    .required("Your name is required.")
    .min(2, "Minimum two characters"),
  email: yup
    .string()
    .email("Enter valid email.")
    .required("We need your email."),
  checkIn: yup
    .date()
    .required("Ops, when will you check in?"),
  checkOut: yup
    .date()
    .required("No check out? Are you moving in permanently?"),
});

function Booking() {
  const { register, handleSubmit, control, errors } = useForm({
    validationSchema: schema
  });

  const { id } = useParams();
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
    history.push('/success');
  }


  return (
    <>
      <main>

        <section className="row">
          <section className="frame col">

            <h1>Book your hotel now!</h1>
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

              <input type="hidden" name="establishment" value={id} ref={register} />

              <b>Check in date:</b>
              <Form.Group>
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
                  dateFormat="MM dd yyyy"
                  minDate={new Date()}
                  ref={register}
                />
                {errors.checkIn && <p className="errorMessage">{errors.checkIn.message}</p>}
              </Form.Group >

              <b>Check out date:</b>
              <Form.Group>
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
                  dateFormat="MM dd yyyy"
                  minDate={new Date()}
                  ref={register}
                />
                {errors.checkOut && <p className="errorMessage">{errors.checkOut.message}</p>}
              </Form.Group>


              <button className="mybtn" type="submit">
                Book hotel
              </button>
            </Form>
          </section>


        </section>


      </main>
    </>
  );
}

export default Booking;
