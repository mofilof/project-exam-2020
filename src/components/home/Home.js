import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constant/Api";
import SearchHotels from "../hotels/SearchHotels";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const url = BASE_URL + "establishments";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log('Home')
        console.table(json);
        setHotels(json);
        setFilteredHotels(json);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleSearch(inputValue) {
    console.log("Inputvalue: ", inputValue);

    const lowerCaseInput = inputValue.toLowerCase();

    const filteredArray = hotels.filter(function (hotel) {
      const lowercaseName = hotel.name.toLowerCase();

      if (lowercaseName.includes(lowerCaseInput)) {
        return true;
      } else {
        return false;
      }
    });

    setFilteredHotels(filteredArray);
  }

  function displayHotelDetails() {
    return filteredHotels.map(function (hotel) {
      return (
        <>
          <main >
            <h1>Welcome to Holidaze!</h1>
            <p>We have hotels and establishments for all type of vacations and events. Take a look and book today, we look forward to making your stay a great one.</p>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  {filteredHotels.map((hotel, index) => {
                    const href = "/booking/" + hotel.id;
                    return (
                      <div key={index.odd}>
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
                    );
                  })}
                </div>
              </div>
            </div>
          </main >
        </>
      );
    });
  }

  return (
    <div>
      {displayHotelDetails()}
    </div>
  );
}

export default Home;