import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
              <Nav.Link href="/login"><div id="login">LOGIN</div></Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    </>
  );
}

export default Menu;