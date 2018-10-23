import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./dashboard.css";
import Box from "../../components/Box";
import Jumbotron from "../../components/Jumbotron";

// import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      // <div>Name: {user.name}</div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h5>User ID : {user.id}</h5>
              <h5>Name : {user.name}</h5>
              <h5>{user.aboutMe}</h5>
              <h5>{user.interestedIn}</h5>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Box
              color="dash-box dash-box-color-2"
              gyp="glyphicon glyphicon-screenshot"
              title="Best Matches"
              text="To see best matches as per your profile"
              src="./images/match2.png"
              alt="Best Matches"
              linkto="/matches"
              button="View Matches"
            />
          </Col>
          <Col size="md-4">
            <Box
              color="dash-box dash-box-color-2"
              gyp="glyphicon glyphicon-floppy-saved"
              title="Saved Friend List"
              text="Get your all saved friends"
              src="./images/save2.png"
              alt="save"
              linkto="/saved"
              button="View Saved"
            />
          </Col>
          <Col size="md-4">
            <Box
              color="dash-box dash-box-color-2"
              gyp="glyphicon glyphicon-user"
              title="Profile"
              text="Edit your profile here"
              src="./images/editProfile.png"
              alt="profile"
              linkto="/profile"
              button="Edit Profile"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// export default Dashboards;

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
