import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constant/Api";
import { Link } from "react-router-dom";

function Booked() {
  const [booking, setBooking] = useState([]);

  const url = BASE_URL + "enquiries";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log("Booking fetch");
        console.table(json);
        setBooking(json);
      })
      .catch((error) => console.log(error));
  }, []);

  function displayBookings() {
    return (

      <main>

        <section className="row">
          <Link className="col" to={'/booked'}>
            <button className="adminbtn col">Customer Bookings</button>
          </Link>
          <Link className="col" to={'/adminmessages'}>
            <button className="mybtn col">Customer Messages</button>
          </Link>
          <Link className="col" to={'/new'}>
            <button className="mybtn col">New establishment</button>
          </Link>
        </section>

        <h1>Customer Bookings:</h1>

        <div>
          {booking.map((book, id) => {
            return (
              <section className="frame row" key={id}>
                <div className="col">
                  <p><b>Name: </b>{book.name}</p>
                  <p><b>Chek In date: </b>{book.checkIn}</p>
                  <p><b>Chek out date: </b>{book.checkOut}</p>
                </div>
              </section>
            )
          })}
        </div>

      </main>
    );
  }

  return <div>{displayBookings()}</div>;
}

export default Booked;
