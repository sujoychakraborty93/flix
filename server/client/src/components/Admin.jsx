import React, { Component } from "react";
import NavbarTopClass from "./NavbarTop";

class AdminClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      header: "Admin Page",
    };
  }
  render() {
    return (
      <div>
        <NavbarTopClass />
        <div className="container">
          <h1>{this.state.header}</h1>
        </div>
      </div>
    );
  }
}

export default AdminClass;
