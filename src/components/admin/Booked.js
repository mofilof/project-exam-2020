import React from 'react';

import { Link } from 'react-dom';

function Booked() {
  return (
    <main>
      <section className="row">
        <Link className="col" to={'/booked'}>
          <button className="adminbtn col">Customer Bookings</button>
        </Link>
        <Link className="col" to={'/adminmessages'}>
          <button className="adminbtn col">Customer Messages</button>
        </Link>
        <Link className="col" to={'/new'}>
          <button className="mybtn col">New establishment</button>
        </Link>
      </section>
    </main>
  )
}

export default Booked;