import React from 'react';
import PropTypes from "prop-types";

function SearchHotels({ doSearch }) {
  return (
    <>
      <input className="searchbar"
        placeholder="Search for hotels..."
        onChange={function (e) {
          console.log(e.target.value);
          doSearch(e.target.value);
        }}
      />
      <button className="search">Search</button>
    </>
  );
}

SearchHotels.propTypes = {
  doSearch: PropTypes.func.isRequired
};

export default SearchHotels;