import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { withRouter } from "react-router-dom";

class ProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      header: "Select profile",
      profiles: ["sujoy", "nivi", "arihant", "guest"],
    };
  }
  card = (name, bgc) => {
    return (
      <div className="center-mid">
        <Card
          style={{ width: "14rem", backgroundColor: bgc }}
          className="profile-card"
          onClick={(e) => {
            this.props.history.push({
              pathname: "/",
              state: { profilename: name.toLowerCase() },
            });
          }}
        >
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Click here to enter the profile</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="background-gray">
          <div className="container height-full-vh">
            <h1 className="h1-profile">{this.state.header}</h1>
            <div className="flex">
              {this.card(this.state.profiles[0], "#28A745")}
              {this.card(this.state.profiles[1], "#DC3545")}
              {this.card(this.state.profiles[2], "#FFC107")}
              {this.card(this.state.profiles[3], "#17A2B8")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileClass);
