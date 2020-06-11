import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers, POST } from "../../constant/Api";

function NewHotel() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  async function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "establishments";
    console.log(url);
    const options = { headers, method: POST, body: JSON.stringify(data) };

    try {
      const response = await fetch(url, options);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    history.push("/admin/hotels");
  }

  return (
    <>
      <main>
        <h1>Create establishment</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <b>Name of establishment:</b>
            <Form.Label>Establishment</Form.Label>
            <Form.Control name="name" placeholder="Establishment name" ref={register} />
          </Form.Group>

          <Form.Group>
            <b>Price estimate:</b>
            <Form.Label>Price</Form.Label>
            <Form.Control classname="col-sm-6" name="price" placeholder="Price" ref={register} />
          </Form.Group>


          <Form.Group>
            <b>Max number of guests:</b>
            <Form.Label>Max guests</Form.Label>
            <Form.Control classname="col-sm-6" name="maxGuests" placeholder="Max guests" ref={register} />
          </Form.Group>

          <Form.Group>
            <b>Illustrative image:</b>
            <Form.Label>Image url</Form.Label>
            <Form.Control name="image" placeholder="Image" ref={register} />
          </Form.Group>

          <button className="mybtn" type="submit">
            Create new establishment
          </button>
        </Form>
      </main>
    </>
  );
}

export default NewHotel;
