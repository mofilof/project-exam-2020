import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../constant/Api";
import { useParams } from "react-router-dom";

//import { useForm } from "react-hook-form";
//import * as yup from "yup";

/*
const schema = yup.object().shape({
  fullName: yup.string().required("Your name is required.")
    .min(2, "Minimum two characters"),
  email: yup
    .string()
    .email("Enter valid email.")
    .required("We need your email."),
  textMessage: yup.string().required("Ops, that message is to short.")
    .min(2, "Minimum two characters.")
    .max(100, "Maximun 100 characters."),
});
 */

function HotelResult() {
  /*   const { register, handleSubmit, errors } = useForm({
      validationSchema: schema
    }); */


  //To get the hotel specifics
  const [hotels, setHotels] = useState([]);

  const { id } = useParams();

  const book = BASE_URL + "establishments" + '/' + id;
  const options = { headers };

  useEffect(() => {
    fetch(book, options)
      .then((response) => response.json())
      .then((json) => {
        console.log('Mona vil sove');
        console.table(json);
        setHotels(json);
      })
      .catch((error) => console.log(error));
  }, []);

  //


  const [rooms, setRooms] = React.useState("");
  const [breakfast, setBreakfast] = React.useState("");

  const setRoomsValue = (event) => {
    setRooms(event.target.value);
  }
  const setBreakfastValue = (event) => {
    setBreakfast(event.target.value);
  }

  const [children, setChildren] = React.useState("");
  const [adults, setAdults] = React.useState("");

  const setChildrenValue = (event) => {
    setChildren(event.target.value);
  }
  const setAdultsValue = (event) => {
    setAdults(event.target.value);
  }

  const [dateDI, setDateDI] = React.useState("");
  const [dateMI, setDateMI] = React.useState("");
  const [dateYI, setDateYI] = React.useState("");

  const dateDIValue = (event) => {
    setDateDI(event.target.value);
  }
  const dateMIValue = (event) => {
    setDateMI(event.target.value);
  }
  const dateYIValue = (event) => {
    setDateYI(event.target.value);
  }

  const [dateDO, setDateDO] = React.useState("");
  const [dateMO, setDateMO] = React.useState("");
  const [dateYO, setDateYO] = React.useState("");

  const dateDOValue = (event) => {
    setDateDO(event.target.value);
  }
  const dateMOValue = (event) => {
    setDateMO(event.target.value);
  }
  const dateYOValue = (event) => {
    setDateYO(event.target.value);
  }

  function submitBooking() {
    sessionStorage.setItem('rooms', rooms);
    sessionStorage.setItem('breakfast', breakfast);
    sessionStorage.setItem('children', children);
    sessionStorage.setItem('adults', adults);

    console.log('Rooms: ' + rooms + ' Breakfast: ' + breakfast + ' Children: ' + children + ' Adults: ' + adults)

    sessionStorage.setItem('dateDI', dateDI);
    sessionStorage.setItem('dateMI', dateMI);
    sessionStorage.setItem('dateYI', dateYI);
    sessionStorage.setItem('dateDO', dateDO);
    sessionStorage.setItem('dateMO', dateMO);
    sessionStorage.setItem('dateYO', dateYO);

    console.log('In: ' + dateDI + '.' + dateMI + '.' + dateYI + ' Out: ' + dateDO + '.' + dateMO + '.' + dateYO)

    window.location.href = '/success';
  }


  return (
    <>
      <main>
        <div className="row">
          <div className="col frame">

            <form className="col row">
              <div className="col">
                <b>Rooms:</b>
                <input value={rooms} onChange={setRoomsValue} className="dtg col" name="rooms" placeholder="0" />
              </div>

              <div className="col">
                <b>Breakfast</b>
                <select onChange={setBreakfastValue}
                  className="dtg col" name="breakfast" >
                  <option>Y / N ?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </form>

            <form className="col row">
              <div className="col">
                <b>Children:</b>
                <input value={children} onChange={setChildrenValue} className="dtg col" name="children" placeholder="0" />
              </div>
              <div className="col">
                <b>Adults:</b>
                <input value={adults} onChange={setAdultsValue} className="dtg col" name="adults" placeholder="0" />
              </div>
            </form>

            <b className="col">Check in date:</b>
            <form className="col row" >
              <div className="col">
                <select onChange={dateDIValue}
                  className="dtg col" name="dayIn" >
                  <option>Day</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>

              <div className="col">
                <select onChange={dateMIValue}
                  className="dtg col" name="monthIn" >
                  <option>Month</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>

              <div className="col">
                <select type="submit" onChange={dateYIValue}
                  className="dtg col" name="yearIn" >
                  <option>Year</option>
                  <option value="2020">2020</option>
                  <option value="2020">2021</option>
                  <option value="2020">2022</option>
                </select>
              </div>
            </form>

            <b className="col">Check out date:</b>
            <form className="col row" >
              <div className="col">
                <select onChange={dateDOValue}
                  className="dtg col" name="dayOut" >
                  <option>Day</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>

              <div className="col">
                <select onChange={dateMOValue}
                  className="dtg col" name="monthOut" >
                  <option>Month</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>

              <div className="col">
                <select type="submit" onChange={dateYOValue}
                  className="dtg col" name="yearOut" >
                  <option>Year</option>
                  <option value="2020">2020</option>
                  <option value="2020">2021</option>
                  <option value="2020">2022</option>
                </select>
              </div>
            </form>

            <div className="col">
              <button className="col-sm-3 mybtn" onClick={submitBooking}>Send</button>
            </div>
          </div>

          <div className="col">

            <h1>hellå {hotels.name}</h1>
            <p>{hotels.description}</p>

          </div>

        </div>

      </main>
    </>


  )
};



export default HotelResult;