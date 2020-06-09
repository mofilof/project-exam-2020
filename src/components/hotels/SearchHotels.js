import React, { useState, /*useEffect*/ } from "react";
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


