import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import HotelList from './components/home/HotelList';
import Contact from './components/contact/Contact';
import Menu from './components/nav/Menu';
//import HotelList from './components/home/HotelList';
//import SearchHotels from './components/home/SearchHotels';

function App() {
  return (
    <>
      <Menu />
      <h6>App.js</h6>

      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/hotels" component={HotelList} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>

    </>
  );
}

export default App;

