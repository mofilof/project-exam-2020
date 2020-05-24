import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from '../../components/home/Home';
import SearchHotels from '../../components/home/SearchHotels';


//Menu
function Menu() {
  return (
    <>
      <div className="colorM">
        <Navbar>
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav>
              <Nav.Link href="/home"><div id="home">HOME</div></Nav.Link>
              <Nav.Link href="/hotels"><div id="hotels">HOTELS</div></Nav.Link>
              <Nav.Link href="/contact"><div id="contact">CONTACT</div></Nav.Link>
            </Nav>

          </Navbar.Collapse>
          <SearchHotels />

        </Navbar>
      </div>
    </>
  );
}


export default Menu;

//Under SearchHotels, make a button that onclick displays result, it may solve the display search issue??
