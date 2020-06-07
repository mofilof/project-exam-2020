import React from "react";

function Welcome() {
  const username = localStorage.getItem('username');

  return (
    <main>
      <h1>Welcome {username}</h1>

    </main>
  )
}

export default Welcome;