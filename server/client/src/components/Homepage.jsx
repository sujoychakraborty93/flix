import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavbarTopClass from "./NavbarTop";
import NavbarFooterClass from "./NavbarFooter";
import axios from "axios";
import Card from "react-bootstrap/Card";

class HomepageClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Welcome to Flix",
      profilename: this.props.location.state
        ? this.props.location.state.profilename
        : "",
      profileDetails: {},
      allMovies: [],
      msg_noSuggestedMovie: "No Suggested Movie",
      default_pic: "http://niveditabanerjee.com/images/cheloKabab1.jpg",
    };
  }

  showMovieCard = (movie) => {
    console.log("movie");
    console.log(movie);
    return (
      <Card key={movie._id} className="col-sm-3">
        <Card.Img
          variant="top"
          src={movie.poster_path ? movie.poster_path : this.state.default_pic}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          {/* <Card.Text>{movie[0].summary}</Card.Text> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
  };

  displayMovies = (profileDetails, allMovies) => {
    return (
      <div className="row mt-2 mb-2">
        {profileDetails.movies_suggested.map((el) => {
          return allMovies.length > 0
            ? this.showMovieCard(allMovies.filter((m) => m._id === el)[0])
            : null;
        })}
      </div>
    );
  };

  displayAllMovies = (allMovies) => {
    console.log("insode all movies");
    console.log(allMovies.length);
    return (
      <div className="row mt-2 mb-2">
        {allMovies.map((el) => {
          console.log("going to moviecard");
          console.log(el);
          return this.showMovieCard(el);
        })}
      </div>
    );
  };

  componentDidMount() {
    if (this.state.profilename) {
      axios
        .get(`/api/userprofiles/profilename/${this.state.profilename}`)
        .then((res) => {
          this.setState({
            profileDetails: res.data,
          });
        });
    }
    axios.get(`/api/movies`).then((res) => {
      this.setState({
        allMovies: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <NavbarTopClass />

        <div className="container">
          <h1>{this.state.header + ", " + this.state.profilename}</h1>
          {Object.keys(this.state.profileDetails).length > 0
            ? this.state.profileDetails["movies_suggested"].length > 0
              ? this.displayMovies(
                  this.state.profileDetails,
                  this.state.allMovies
                )
              : this.displayAllMovies(this.state.allMovies)
            : this.displayAllMovies(this.state.allMovies)}
        </div>
        <NavbarFooterClass />
      </div>
    );
  }
}

export default withRouter(HomepageClass);
