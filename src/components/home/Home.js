import React from 'react';
import HotelList from './HotelList.js';

function Home() {
  function te() {
    console.log("Hello? 123");
  }
  te();
  return (
    <>
      <h1>hei</h1>

      <HotelList></HotelList>
    </>
  );

}

export default Home;