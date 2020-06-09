import React from "react";
import { useForm } from "react-hook-form";
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

  const [dateD, setDateD] = React.useState("");
  const [dateM, setDateM] = React.useState("");
  const [dateY, setDateY] = React.useState("");

  const dateDValue = (event) => {
    setDateD(event.target.value);
  }
  const dateMValue = (event) => {
    setDateM(event.target.value);
  }
  const dateYValue = (event) => {
    setDateY(event.target.value);
  }


  function submitBooking() {
    console.log(dateD + '.' + dateM + '.' + dateY)
    sessionStorage.setItem('dateD', dateD);
    sessionStorage.setItem('dateM', dateM);
    sessionStorage.setItem('dateY', dateY);
    window.location.href = '/success';
  }

  return (
    <>
      <main>
        <div>
          <div>
            <form className="col-sm-6 row" >

              <select onChange={dateDValue}
                className="dtg col" name="day" >
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

              <select onChange={dateMValue}
                className="dtg col" name="month" >
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

              <select type="submit" onChange={dateYValue}
                className="dtg col" name="year" >
                <option>Year</option>
                <option value="2020">2020</option>
                <option value="2020">2021</option>
                <option value="2020">2022</option>
              </select>
            </form>
            <button className="col-sm-2 mybtn" onClick={submitBooking}>Send</button>
          </div>

          <div className="col">

          </div>
        </div>

      </main>
    </>
  );
}

export default HotelResult;