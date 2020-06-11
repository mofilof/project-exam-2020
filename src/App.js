import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import HotelList from "./components/home/HotelList";
import Contact from "./components/contact/Contact";
import Menu from "./components/nav/Menu";
import Login from "./components/nav/Login";
import Admin from "./components/admin/Admin";
import HotelResult from "./components/hotels/HotelResult";
import Welcome from "./components/nav/Welcome";
import AdminUser from "./components/admin/AdminUser";
import Success from "./components/contact/Success";
import NewHotel from "./components/admin/NewHotel";

function App() {
  return (
    <>
      <body className="bodycolor">
        <Menu />
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/hotels" component={HotelList} />
              <Route path="/booking/:id" component={HotelResult} />
              <Route path="/contact" component={Contact} />
              <Route path="/admin" component={Admin} />
              <Route path="/login" component={Login} />
              <Route path="/welcome" component={Welcome} />
              <Route path="/adminuser" component={AdminUser} />
              <Route path="/success" component={Success} />
              <Route path="/new" component={NewHotel} />
            </Switch>
          </Router>
        </div>
      </body>
    </>
  );
}

export default App;
