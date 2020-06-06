import React from "react";
import Login from './Login';

function Welcome() {
  var username = localStorage.getItem('username');

  return (
    <main>
      <h1>Welcome {username}</h1>
    </main>
  )
}

export default Welcome;