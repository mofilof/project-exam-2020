import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import HotelList from './components/home/HotelList';
import Contact from './components/contact/Contact';
import Menu from './components/nav/Menu';
import Login from './components/nav/Login';
import Admin from './components/nav/Admin';
//import HotelList from './components/home/HotelList';
//import SearchHotels from './components/home/SearchHotels';
import Welcome from './components/nav/Welcome';

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
              <Route path="/contact" component={Contact} />
              <Route path="/admin" component={Admin} />
              <Route path="/login" component={Login} />
              <Route path="/welcome" component={Welcome} />
            </Switch>
          </Router>
        </div>
      </body>

    </>
  );
}

export default App;

