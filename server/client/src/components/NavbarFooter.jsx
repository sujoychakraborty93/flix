import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

class NavbarFooterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      header: "Welcome to Flix",
    };
  }
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="jumbotron">
        <div className="navFoot navFootGroup">
          <Nav.Link href="/">Our Team</Nav.Link>
          <Nav.Link href="/">About Us</Nav.Link>
          <Nav.Link href="/">Contact Us</Nav.Link>
        </div>
        <div className="navFootGroup">
          <FontAwesomeIcon icon={faFacebook} className="iconCls" />
          <FontAwesomeIcon icon={faGithubAlt} className="iconCls" />
          <FontAwesomeIcon icon={faTwitter} className="iconCls" />
          <FontAwesomeIcon icon={faLinkedinIn} className="iconCls" />
          <FontAwesomeIcon icon={faGoogle} className="iconCls" />
        </div>
      </Navbar>
    );
  }
}

export default NavbarFooterClass;
