import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import "./matches.css";
import Button from "../../components/Button";
import Name from "../../components/cards/profile";
import Modal from "../../components/modal/modal"

// import Checkbox from "../../components/Checkbox";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Saved extends Component {
  state = {
    userMain: [],
    results: [],
    newResults: [],
    finalResults: [],
    usernames: [],
    show: false,
    Info: {},
    currentUserId: null,
    showMe: true,
  };

  componentDidMount()
  //  {/* <button onClick={() => this.find(20, 30,"male", "Atlanta")} >Find</button> */}
  {
    const { isAuthenticated, user } = this.props.auth;
    this.getAlluser();
    console.log(user.id);
    this.getCurrentUser(user.id);
    
  }



showModal = id => {
  API.getInfoById(id)
    .then(res => { console.log(res); this.setState({ Info: res.data }) });
  console.log("INFO" + this.state.Info);
  this.setState({ show: true });
  this.setState({ currentUserId: id });
  // console.log("hi");

};

hideModal = () => {
  this.setState({ show: false });
}

hiddenid = (id) => {
  let newResults = this.state.finalResults.filter((user) => {
    return (user._id !== id);
  });

  this.setState({
    finalResults: newResults
  })
}
// componentDidMount() {
//   this.loadBooks();
// }

// loadBooks = () => {
//   API.getviewmatch()
//     .then(res => this.setState({ usernames: res.data }));

// };
handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

getAlluser = () => {
  API.getUsers()
    .then(res => {
      this.setState({ results: res.data })
      console.log(this.state.results);
    })



}

getCurrentUser = id => {
  API.getInfoById(id)
    .then(res => {
      this.setState({ userMain: res.data })
      console.log(this.state.userMain.saved);
      this.finalResultsDone();
    });


  // console.log("hi");

};
finalResultsDone = () => {
  let useridList= this.state.userMain.saved;
  let final = [];
  this.state.results.forEach(results =>useridList.forEach(useridList => {
    // console.log(useridList);
    if (results._id == useridList) {
      console.log("hi");
      final.push(results);
      console.log(final);
        // console.log(results);
    }
    else {

    }
  this.setState({finalResults:final});
  }
  ))
};

render() {
  const { isAuthenticated, user } = this.props.auth;

  return (
    <Container fluid>
      <Jumbotron>
        <Row>
          <Col size="md-11">

            <h3>save</h3>

          </Col>
          <Col size="md-1">
            <Button link="/dashboard" text="Back To Dashboard" />

          </Col>
        </Row>
      </Jumbotron>

      {this.state.finalResults.length ? (
        <div>
          {this.state.finalResults.map(user => (
            //   <div>
            //   <h3>{user.username}</h3>

            // </div>
            <div>

              {

                this.state.showMe ?

                  <div>
                    <Name

                      img={user.avatar}
                      usernames={user.name}
                      age={user.myAge}
                      Gender={user.myGender}
                      City={user.myLocation}
                      About_me={user.aboutMe}
                      id={user._id}
                      percentage={user.percentage}
                      key={user._id}


                      hiddenid={() => this.hiddenid(user._id)}
                      show={() => this.showModal(user._id)}
                    // show={this.showModal(user._id)}
                    //  showdata={  () => this.showdata(user._id)}
                    />        </div>
                  : null
              }


              <Modal show={this.state.show} handleClose={this.hideModal}
                avatarUrl={this.state.Info.avatar}
                name={this.state.Info.name}
                Gender={this.state.Info.myGender}
                Age={this.state.Info.myAge}
                About_me={this.state.Info.aboutMe}
                interestIn={this.state.Info.interestedIn == undefined ? [] : this.state.Info.interestedIn}
                location={this.state.Info.myLocation}
                contact_number={this.state.Info._id}
                email={this.state.Info.email}

              // interestIn={this.state.Info.interestIn}
              />

            </div>
          ))}
        </div>
      ) : (
          <h3>No Results to Display</h3>
        )}

      <div>
        {/* {this.state.usernames.map(user => ( */}

        {/* ))} */}
      </div>
    </Container>
  );
}
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Saved);

const container = document.createElement('div');
document.body.appendChild(container);
// export default Matches;
