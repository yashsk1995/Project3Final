import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
//used so browser back and front button works
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setCurrentUser } from "./actions/authActions";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/common/privateRoutes";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

// import Dashboard from "./components/auth/Dashboard";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Saved from "./pages/Saved";
import Matches from "./pages/Matches";
import Email from "./pages/Email";

import "./App.css";

//check for token
if (localStorage.jwtToken) {
  //set auth token header off
  setAuthToken(localStorage.jwtToken);

  //decode the token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);

  //set user and is authenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/Email" component={Email} />
              <Route exact path="/matches" component={Matches} />
              <Route exact path="/saved" component={Saved} />
              <Route exact path="/profile" component={Profile} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
