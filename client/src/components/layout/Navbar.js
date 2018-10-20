import React, { Component } from "react";
//Replacement for a tags
import { Link } from "react-router-dom";

import propTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  //On click log out function
  onLogoutClick(e) {
    e.preventDefault(e);
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    //auth links - these are the links that authorized users can see
    const authLinks = (
      <ul>
        <a className="logout" href="/" onClick={this.onLogoutClick.bind(this)}>
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: "45px", height: "45px", marginRight: "5px" }}
          />
          <button className="btn  btn-primary navButtons">Logout</button>
        </a>
      </ul>
    );

    const guestLinks = (
      <ul>
        <Link to="/register">
          <button className="btn  btn-primary navButtons">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="btn  btn-primary navButtons">Login</button>
        </Link>
      </ul>
    );
    return (
      <div className="nav">
        <a className="navbar-brand" href="/">
          ROOMMATES
        </a>
        <nav className="navbar ml-auto">
          <div className="navBtns">
            {/* Conditional statements to display nav items */}
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
