import React from 'react';
import { Link } from "react-router-dom";
import AdminMessages from "./AdminMessages";

function AdminUser() {

  const adminUser = sessionStorage.getItem('adminUser');


  return (
    <>
      <main>

        <h1>Welcome back {adminUser}</h1>
        <p>Here you have a list of booking and contact. Or you can create a new establishment</p>

        <Link to={'/new'}>
          <button className="adminbtn">New establishment</button>
        </Link>

        <AdminMessages />

      </main>
    </>
  )
}

export default AdminUser;