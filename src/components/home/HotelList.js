import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constant/Api";
import SearchHotels from './SearchHotels';

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


//Is there something wrong with handleSearch(inputValue)?
  function handleSearch(inputValue) {
    const lowerCaseInput = inputValue.toLowerCase();

    const filteredArray = hotels.filter(function (hotel) {
      const lowercaseName = hotel.name.toLowerCase();

      if (lowercaseName.startsWith(lowerCaseInput)) {
        return true;
      } else {
        return false;
      }
    });

    setFilteredHotels(filteredArray);


  function displayResults() {
    if (filteredHotels.length === 0) {
      return <div>No results</div>;
    }
    return filteredHotels.map(function (hotel) {
      const href = "/hotel/" + hotel.id;

    });
  }

  return (
    <>
  
      <SearchHotels doSearch={handleSearch} />
      {displayResults()}
    
    </>
  );
  }



return (
  <>
    <h6>HotelList.js.js</h6>
    <h1>Welcome to holidaze!</h1>
    <div>
      {hotels.map((list) => {
        return (
          <>
            <div className="row" key={list.id}>
              <div className="col-sm-6">
                <h2>
                  {list.name}
                </h2>
                <p>
                  {list.description}
                </p>
                <p>
                  <b>Guest capasity:</b> {list.name} has room for {list.maxGuests} guests.
                  </p>
                <p>
                  Prices from: <b>{list.price},- </b>
                </p>
              </div>
              <div className="col-sm-6">
                <img className="col" src={list.image} />
              </div>
            </div>
          </>
        );
      })}
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