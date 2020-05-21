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