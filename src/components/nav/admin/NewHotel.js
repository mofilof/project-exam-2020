import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { BASE_URL, headers } from "../../../constant/Api";

function NewHotel() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  async function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "establishments";
    const options = { headers, method: "POST", body: JSON.stringify(data) };

    await fetch(url, options);

    history.push("/admin/hotels");
  }

  return (
    <>
      <main>
        <h4>Create establishment</h4>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Add Hotel</h1>
          <Form.Group>
            <Form.Label>Establishment</Form.Label>
            <Form.Control name="name" placeholder="Establishment name" ref={register} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" placeholder="Description" ref={register} />
          </Form.Group>

          <button className="mybtn" type="submit">Create</button>
        </Form>
      </main>
    </>
  );
}

export default NewHotel;
