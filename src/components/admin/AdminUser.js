import React from 'react';
import { Link } from "react-router-dom";

function AdminUser() {

  const adminUser = sessionStorage.getItem('adminUser');


  return (
    <>
      <main>

        <h1>Welcome back {adminUser}</h1>
        <p>Here you have a list of booking and contact. Or you can create a new establishment</p>

        <section className="row">
          <Link className="col" to={'/booked'}>
            <button className="mybtn col">Customer Bookings</button>
          </Link>
          <Link className="col" to={'/adminmessages'}>
            <button className="mybtn col">Customer Messages</button>
          </Link>
          <Link className="col" to={'/new'}>
            <button className="mybtn col">New establishment</button>
          </Link>
        </section>

      </main>
    </>
  )
}

export default AdminUser;