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
    results1:[],
    newResults: [],
    finalResults: [],
    finalResults1:[],
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
    this.find(user.id,user.interestedIn[0],user.interestedIn[1],user.interestedIn[2],user.interestedIn[3]);

  }
  find = (id,startAge, EndAge, Gender, Area) => {
    console.log("find done")
    API.findYourUser(id,startAge, EndAge, Gender, Area)
      .then(res => {
        
        this.setState({ results: res.data })
            console.log(this.state.results);
        this.sortByMatches();
        this.sortMyData();
        this.setState({finalResults:this.state.results})
        // console.log(parseInt(this.state.results[3].percentage));
          console.log(this.state.results);
        console.log(this.state.newResults);
          // console.log({user.name})
      });
  }
  sortByMatches = () =>{
    console.log(this.state.results);
    let matchedUsers = this.state.results1;
    const { isAuthenticated, user } = this.props.auth;

//initialize 
// let myLikes = currentUser.interestIn;
let interestIn = user.interestedIn.slice(4);
console.log(interestIn);
let myLikes = interestIn;
let theirLikes = [];

matchedUsers.map((userObject) => {
    let matchedInterestCount = 0;
    theirLikes = userObject.aboutMe;

    myLikes.forEach((like) => {
        if (theirLikes.includes(like)) {
            matchedInterestCount++;
        }
    });
    //add a new key value (this one does not match up with our data model, because we only care about it when we are building this list on the page)
    //userObject.matchCount = matchedInterestCount;
    //this is actually better:
        this.setState({newResults:userObject});
console.log(this.state.newResults)

 userObject.percentage = parseInt(matchedInterestCount / myLikes.length * 100);
    return null;
});
}
sortMyData = () => {
  this.state.results.sort(function(a, b){
    return b.percentage-a.percentage
})
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
      this.setState({ results1: res.data })
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
  this.state.results1.forEach(results1 =>useridList.forEach(useridList => {
    // console.log(useridList);
    if (results1._id == useridList) {
      console.log("hi");
      final.push(results1);
      console.log(final);
        // console.log(results);
    }
    else {

    }
  this.setState({finalResults1:final});
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

      {this.state.finalResults1.length ? (
        <div>
          {this.state.finalResults1.map(user => (
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
