import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HolidazeLogo from "../images/logo/o-logo-l.png"

function Menu() {
  const adminUser = sessionStorage.getItem('adminUser');

  function logout() {
    sessionStorage.removeItem('adminUser');
    window.location.href = '/home'
    console.log('You are loged out');
  };

  console.log('After you log out, adminUser has this value: ' + adminUser);

  if (adminUser === 'Admin') {
    return (
      <>
        <div className="colorM row">

          <Navbar>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link className="" href="/">
                <img className="holidaze" src={HolidazeLogo} />
              </Nav.Link>
              <Nav className="col text-left">
                <Nav.Link href="/home"><div id="home">HOME</div></Nav.Link>
                <Nav.Link href="/hotels"><div id="hotels">HOTELS</div></Nav.Link>
                <Nav.Link href="/contact"><div id="contact">CONTACT</div></Nav.Link>
                <Nav.Link href="/adminUser"><div className="login">ADMIN</div></Nav.Link>
              </Nav>
              <div className="text-right">
                <button id="logout" onClick={logout}>LOGOUT</button>
              </div>
            </Navbar.Collapse>

          </Navbar>

        </div>
      </>
    );

  }

  else {
    return (
      <>
        <div className="colorM row">

          <Navbar>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link className="col" href="/">
                <img className="holidaze" src={HolidazeLogo} />
              </Nav.Link>
              <Nav>

                <Nav.Link href="/home"><div id="home">HOME</div></Nav.Link>
                <Nav.Link href="/hotels"><div id="hotels">HOTELS</div></Nav.Link>
                <Nav.Link href="/contact"><div id="contact">CONTACT</div></Nav.Link>
                <Nav.Link href="/login"><div className="login">LOGIN</div></Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
        </div>
      </>
    );
  }
}

export default Menu;