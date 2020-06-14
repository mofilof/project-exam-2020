import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constant/Api";

function Home() {
  const [filteredHotels, setFilteredHotels] = useState([]);

  const url = BASE_URL + "establishments";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log('Home')
        console.table(json);
        setFilteredHotels(json);
      })
      .catch((error) => console.log(error));
  });

  return (
    <>
      <main >
        <h1>Welcome to Holidaze!</h1>
        <p>We have hotels and establishments for all type of vacations and events. Take a look and book today, we look forward to making your stay a great one.</p>

        <div className="row">

          {filteredHotels.map((hotel, index) => {
            const href = "/bookhotel/" + hotel.id;
            return (
              <div className="col-sm-6">
                <div key={index}>
                  <div className="frame">
                    <div className="col" >
                      <h4>{hotel.name}</h4>
                      <p>{hotel.description}</p>
                      <div>
                        <img className="col" src={hotel.image} alt={hotel.name} />
                      </div>
                      <button className=" mybtn"><a href={href}>Book now!</a></button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </main >
    </>
  );
}



export default Home;
