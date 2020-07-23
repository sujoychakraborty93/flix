import React, { Component } from "react";

class LoginClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      header: "Login",
    };
  }
  render() {
    return (
      <div>
        <NavbarTopClass />
        <div className="container">
          <h1>{this.state.header}</h1>
        </div>
        <NavbarFooterClass />
      </div>
    );
  }
}

export default LoginClass;
