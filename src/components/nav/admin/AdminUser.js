import React from 'react';

function AdminUser() {
  const adminUser = sessionStorage.getItem('adminUser');

  //Contact
  const formName = sessionStorage.getItem('formName');
  const formEmail = sessionStorage.getItem('formEmail');
  const formText = sessionStorage.getItem('formText');

  const c = ['Name: ', 'Email: ', 'Message: ']

  const contactFormResults =
    [
      <div className="row">
        <div className="col">
          <p><b>{c[0]}</b>{formName}</p>
          <p><b>{c[1]}</b>{formEmail}</p>
        </div>
        <div className="col">
          <p><b>{c[2]}</b>{formText}</p>
        </div>
      </div>
    ];

  console.log(contactFormResults);

  //Booking
  const rooms = sessionStorage.getItem('rooms');
  const breakfast = sessionStorage.getItem('breakfast');
  const children = sessionStorage.getItem('children');
  const adults = sessionStorage.getItem('adults');

  const dIn = sessionStorage.getItem('dateDI');
  const mIn = sessionStorage.getItem('dateMI');
  const yIn = sessionStorage.getItem('dateYI');
  const dOut = sessionStorage.getItem('dateDO');
  const mOut = sessionStorage.getItem('dateMO');
  const yOut = sessionStorage.getItem('dateYO');

  const b = ['Rooms: ', 'Breakfast: ', 'Children: ', 'Adults: ', 'Check in date: ', 'Check out date: ', '.'];



  const bookingFormResults =
    [
      <div className="row">
        <div className="col">
          <p><b>{b[0]}</b>{rooms}</p>
          <p><b>{b[1]}</b>{breakfast}</p>
          <p><b>{b[2]}</b>{children}</p>
          <p><b>{b[3]}</b>{adults}</p>
        </div>
        <div className="col">
          <p><b>{b[4]}</b>{dIn}{b[6]}{mIn}{b[6]}{yIn}</p>
          <p><b>{b[5]}</b>{dOut}{b[6]}{mOut}{b[6]}{yOut}</p>
        </div>
      </div>
    ];

  console.log(bookingFormResults);

  return (
    <main>
      <h1>Welcome {adminUser}</h1>
      <p>Here you have a list of booking and contact.</p>

      <h2>Contact</h2>
      <div className="frame">
        {contactFormResults.map((contact, messages) => {
          return (
            <>
              <div key={messages}>
                <p>{contact}</p>
              </div>
            </>)
        })}
      </div>

      <h2>Booking</h2>
      <div className="frame">
        {bookingFormResults.map((booked, bookings) => {
          return (
            <>
              <div key={bookings}>
                <p>{booked}</p>
              </div>
            </>)
        })}
      </div>


    </main>
  )
}

export default AdminUser;