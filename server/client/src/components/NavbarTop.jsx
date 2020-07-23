import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class NavbarTopClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      header: "Welcome to Flix",
    };
  }

  navbar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">Flix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/admin">Admin</Nav.Link> */}
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profiles</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="#">Notification</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Account
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    );
  };
  render() {
    return <div>{this.navbar()}</div>;
  }
}

export default NavbarTopClass;
