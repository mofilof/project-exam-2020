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

  return (
    <>
      <div className="bodycolor">
        <main>
          <h6>HotelList.js.js</h6>
          <h1>Welcome to holidaze!</h1>
          <div>
            <SearchHotels doSearch={handleSearch} />

            {filteredHotels.map((hotel, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-sm-6">
                    <h2>{hotel.name}</h2>
                    <p>{hotel.description}</p>
                    <p>
                      <b>Guest capasity: </b>
                      {hotel.name} has room for
                      {hotel.maxGuests} guests.
                                        </p>
                    <p>
                      Prices from: <b>{hotel.price},- </b>
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <img className="col" src={hotel.image} alt={hotel.name} />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default Hotels;

/* OLD without search
      function Hotels() {
    const [hotels, setHotels] = useState([]);

    const url = BASE_URL + "establishments";
    const options = { headers };

    useEffect(() => {
      fetch(url, options)
        .then((response) => response.json())
        .then((json) => {
          console.table(json);
          setHotels(json);
        })
        .catch((error) => console.log(error));
    }, []);
  */

/* Fetch for the list of games, api search
    function GameList() {

      const [results, setResults] = useState([]);
      const [filteredResults, setFilteredResults] = useState([]);

      useEffect(function() {
          fetch(BASE_URL)
              .then(function(response) {
                  return response.json();
              })
              .then(function(json) {
                  console.dir(json.results);
                  setResults(json.results);
                  setFilteredResults(json.results);
              })
              .catch(function(error) {
                  console.log(error);
              });
      }, []);

  */
