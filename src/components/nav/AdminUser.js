import React from 'react';
//import ContactData from '../contact/ContactData';

function AdminUser() {
  const user = localStorage.getItem('adminUser');

  const formName = localStorage.getItem('formName');
  const formEmail = localStorage.getItem('formEmail');
  const formText = localStorage.getItem('formText');

  return (
    <main>
      <h1>Welcome {user}</h1>

      <h1>Contact</h1>
      <h3>Name, email and messages from customers:</h3>

      <h2>Message from {formName}</h2>
      <p><b>Name:</b> {formName}</p>
      <p><b>Email:</b> {formEmail}</p>
      <p><b>Message:</b> {formText}</p>




    </main>
  )
}

export default AdminUser;