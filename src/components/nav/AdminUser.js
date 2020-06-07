import React from 'react';

function AdminUser() {
  const user = localStorage.getItem('adminUser');

  return (
    <main>
      <h1>Welcome {user}</h1>

    </main>
  )
}

export default AdminUser;