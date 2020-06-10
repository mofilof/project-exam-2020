import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Menu() {
  const adminUser = sessionStorage.getItem('adminUser');

  function logout() {
    sessionStorage.removeItem('adminUser');
    window.location.href = '/home'
    console.log('You are loged out');
  };

  console.log('After you log out, adminUser has this value: ' + adminUser);

  if (adminUser == 'Admin') {
    return (
      <>
        <div className="colorM">
          <Navbar>
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav>
                <Nav.Link href="/home"><div id="home">HOME</div></Nav.Link>
                <Nav.Link href="/hotels"><div id="hotels">HOTELS</div></Nav.Link>
                <Nav.Link href="/contact"><div id="contact">CONTACT</div></Nav.Link>
                <Nav.Link href="/adminUser"><div className="login">ADMIN</div></Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <button id="logout" onClick={logout}>LOGOUT</button>
          </Navbar>

        </div>
      </>
    );

  }

  else {
    return (
      <>
        <div className="colorM">
          <Navbar>
            <Navbar.Collapse id="basic-navbar-nav">

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