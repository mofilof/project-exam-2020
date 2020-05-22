import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from '../../components/home/Home';
import SearchHotels from '../../components/home/SearchHotels';


//Menu
function Menu() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="d-flex flex-row-reverse">
            <Nav.Link href="/home" >Home</Nav.Link>
            <Nav.Link href="/hotels" >Hotels</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SearchHotels />
      </Navbar>

      <Home></Home>

    </>
  );
}


export default Menu;

//Under SearchHotels, make a button that onclick displays result, it may solve the display search issue??
