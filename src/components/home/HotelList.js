import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constant/Api";

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

  return (
    <>
      <h1>Hotels</h1>
      <div className="row">
        {hotels.map((list) => {
          return (
            <>
              <div className="col-sm-3">
                <h2 key={list.id}>
                  {list.name}
                </h2>
                <img src={list.image} width="300px" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Hotels;