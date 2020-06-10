import React from 'react';

function Success() {
  const max = 867;
  const min = 2324

  const refOne = Math.random() * (max - min) + min;
  const refTwo = Math.random() * (max - min) + min;
  const one = Math.round(refOne);
  const two = Math.round(refTwo);

  return (
    <main>
      <h1>Refrence number:</h1>
      <h2>MØ-{one}-{two}</h2>
    </main>
  )
}

export default Success;

