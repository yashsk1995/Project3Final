import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./dashboard.css";
import Box from "../../components/Box";
import Jumbotron from "../../components/Jumbotron";

// import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <Container fluid>
        {/* <div>Name: {user.name}</div> <div>Name: {user.password}</div> */}
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>
                We welcome you{" "}
                <b>
                  <u>{user.name}</u>
                </b>{" "}
                to our group and looking forward to find perfect roommates !!{" "}
              </h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Box
              color="dash-box dash-box-color-2"
              gyp="glyphicon glyphicon-screenshot"
              title="Best Matches"
              // text="To see best matches as per your profile"
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
              // text="Get your all saved friends"
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
              // text="Edit your profile here"
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
