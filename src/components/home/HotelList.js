import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constant/Api";
import SearchHotels from "../hotels/SearchHotels";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const url = BASE_URL + "establishments";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log("Hotel");
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
    // return filteredHotels.map(function (hotel) {
    return (
      <>
        <main>
          <h1>Search holidaze and find the hotel for you!</h1>
          <SearchHotels doSearch={handleSearch} />

          <div>
            {filteredHotels.map((hotel, id) => {
              const href = "/booking/" + hotel.id;
              return (
                <div className="row frame" key={id}>
                  <div className="col">
                    <h2>{hotel.name}</h2>
                    {hotel.description && <p>{hotel.description}</p>}

                    <p>
                      <b>Guest capasity: </b>
                      {hotel.name} has room for {hotel.maxGuests} guests.
                    </p>
                    <p>
                      Prices from: <b>{hotel.price},- </b>
                    </p>
                    <button className="mybtn">
                      <a href={href}>Book now!</a>
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <img className="col" src={hotel.image} alt={hotel.name} />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </>
    );
    // });
  }

  return <div>{displayHotelDetails()}</div>;
}

export default Hotels;
