import React from 'react';
import ContactData from '../contact/ContactData';

function AdminUser() {
  const user = localStorage.getItem('adminUser');

  return (
    <main>
      <h1>Welcome {user}</h1>

      <h1>Contact</h1>
      <h3>Name, email and messages from customers:</h3>
      <div>
        <ContactData />
      </div>



    </main>
  )
}

export default AdminUser;