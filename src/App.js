import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav/Menu';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <h6>App.js</h6>
      <Home></Home>

      <Nav />
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>

    </>
  );
}

export default App;

