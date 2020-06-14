import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constant/Api";
import { Link } from "react-router-dom";

function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const url = BASE_URL + "contacts";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log("Messages fetch");
        console.table(json);
        setMessages(json);
      })
      .catch((error) => console.log(error));
  }, []);

  function displayMessages() {
    return (

      <main>

        <section className="row">
          <Link className="col" to={'/booked'}>
            <button className="mybtn col">Customer Bookings</button>
          </Link>
          <Link className="col" to={'/adminmessages'}>
            <button className="adminbtn col">Customer Messages</button>
          </Link>
          <Link className="col" to={'/new'}>
            <button className="mybtn col">New establishment</button>
          </Link>
        </section>

        <h1>Customer Messages:</h1>

        <div>
          {messages.map((contact, id) => {
            return (
              <section className="frame row" key={id}>
                <div className="col">
                  <p><b>Name: </b>{contact.name}</p>
                  <p><b>Email: </b>{contact.email}</p>
                </div>
                <div className="col"><p><b>Message: </b>{contact.message}</p></div>
              </section>
            )
          })}
        </div>

      </main>


    );

  }

  return <div>{displayMessages()}</div>;
}

export default AdminMessages;





/*import React, {useState, useEffect} from "react";
import {BASE_URL, headers} from "../../constant/Api";
//import {NavLink} from "react-router-dom";

function AdminMessages() {





  const url = BASE_URL + "contacts";
  const options = {headers};

  fetch(url, options)
    .then((r) => r.json())
    .then((j) => console.log(j));

}
export default AdminMessages; */

/*
 const [messages, setMessages] = useState([]);

  const url = BASE_URL + "contacts";
  const options = {headers};

  useEffect(() => {
            fetch(url, options)
              .then((response) => response.json())
              .then((json) => {
                console.log("Messages");
                console.table(json);
                setMessages(json);
              })
              .catch((error) => console.log(error));
  }, []);


  messages.map((messages, id) => {
    return (
      <p>{messages.name}</p>
    );
  })
}


*/