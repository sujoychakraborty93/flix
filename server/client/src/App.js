import React from "react";
import HomepageClass from "./components/Homepage";
import ProfileClass from "./components/Profiles";
import AdminClass from "./components/Admin";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomepageClass} />
          <Route path="/home" component={HomepageClass} />
          <Route path="/admin" component={AdminClass} />
          <Route path="/profile" component={ProfileClass} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
