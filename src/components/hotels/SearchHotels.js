import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";



function SearchHotels({ doSearch }) {
  const [searchValue, setSearchValue] = useState("");

  function changeValue(event) {
    setSearchValue(event.target.value);
  }

  return (
    <>
      <input value={searchValue} onChange={changeValue} className="searchbar" placeholder="Search hotels..." />

      <button onClick={function () {
        doSearch(searchValue);
      }}
        id='searchresult'
        className='search'
      >
        Search hotels
        </button>

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
