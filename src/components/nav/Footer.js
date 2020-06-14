import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HolidazeLogo from "../images/logo/o-logo-l.png"

function Footer() {
  return (
    <>
      <Navbar className="footer">
        <div className="col text-center">
          <img className="footerLogo " src={HolidazeLogo} />
        </div>
      </Navbar>
    </>
  );
}

export default Footer;