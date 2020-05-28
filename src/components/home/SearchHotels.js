import React from 'react';
import PropTypes from "prop-types";



function SearchHotels({ doSearch }) {

  return (
    <>
      <input className="searchbar" placeholder="Search hotels..." />

      <button onClick={function (hotelResult) {
        console.log(hotelResult.target.value);
        doSearch(hotelResult.target.value);
      }} id="searchresult" className="search">Search2.0</button>

    </>
  );
}

SearchHotels.propTypes = {
  doSearch: PropTypes.func.isRequired
};

export default SearchHotels;

/*
      <input className="searchbar"
        placeholder="Search for hotels..."
        onChange={function (e) {
          console.log(e.target.value);
          doSearch(e.target.value);
        }}
      />
      <button id="searchresult" className="search">Search</button>

*/



/*
function App() {

  function sayHello() {
    alert('Hello!');
  }

  return (
    <button onClick={sayHello}>
      Click me!
    </button>
  );
}
*/
