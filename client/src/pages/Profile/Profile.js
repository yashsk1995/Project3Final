import React, { Component } from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import axios from "axios"; this will be replaced by redux actions
import classnames from "classnames";
import API from "../../utils/API";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      check: "yadhap",
      hideintro: false,
      myage: "",
      mygender: "",
      mylocation: "",
      iamsportLover: "",
      iampetLover: "",
      iamsnorer: "",
      iamcleanFreak: "",
      iamcomputerNeard: "",
      iamheavyDrinker: "",
      iampartyLover: "",
      iamsmoker: "",
      iamborrower: "",

      lookingForgender: "",
      lookingForage1: "",
      lookingForage2: "",
      lookingForlocation: "",
      partnerloveSports: "",
      partnerlovePets: "",
      partnerdoesNotSnore: "",
      partnercleans: "",
      partnerisComputerNerd: "",
      partnerdrinks: "",
      partnerloveParties: "",
      partnersmokes: "",
      partnerdoesNotBorrow: "",

      name: "",
      email: "",
      password: "",
      password2: "",
      avatar: "",
      saved: [],
      errors: {},
      user: []
    };
  }

  //Component will receive props - life cycle
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  //Function that changes the initial state as user starts typing on the input boxes
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheck = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    const { isAuthenticated, user } = this.props.auth;

    this.loadUsers(user.id);
    
  }
  renderDrink(item,name,value,text) {
    const { isAuthenticated, user } = this.props.auth;

    if(user.aboutMe.includes(item)) {
      console.log("ddddddddd");
      return (
        <div className="col-sm-4">
        <div className="form-check">
          <input
            type="checkbox"
            name={name}
            value={value}
            onChange={this.onCheck}
            checked
          />
          &nbsp;
          <label className="form-check-label">{text}</label>
        </div>
      </div>
      );
    } else {
      console.log("mmmmmmmmmmm  ");
      return (
        <div className="col-sm-4">
        <div className="form-check">
          <input
            type="checkbox"
            name={name}
            value={value}
            onChange={this.onCheck}
          />
          &nbsp;
          <label className="form-check-label">{text}</label>
        </div>
      </div>
      );
    }
  }

  renderintrest(item,name,value,text) {
    const { isAuthenticated, user } = this.props.auth;

    if(user.interestedIn.includes(item)) {
      console.log("ddddddddd");
      return (
        <div className="col-sm-4">
        <div className="form-check">
          <input
            type="checkbox"
            name={name}
            value={value}
            onChange={this.onCheck}
            checked
          />
          &nbsp;
          <label className="form-check-label">{text}</label>
        </div>
      </div>
      );
    } else {
      console.log("mmmmmmmmmmm  ");
      return (
        <div className="col-sm-4">
        <div className="form-check">
          <input
            type="checkbox"
            name={name}
            value={value}
            onChange={this.onCheck}
          />
          &nbsp;
          <label className="form-check-label">{text}</label>
        </div>
      </div>
      );
    }
  }


  loadUsers = (id) => {
    API.getInfoById(id)
      .then(res => { this.setState({ user: res.data }); console.log(this.state.user); })

      .catch(err => console.log(err));

  };

  //On submit function
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state); // This is a test remove this later
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      myAge: this.state.myage,
      myGender: this.state.mygender,
      myLocation: this.state.mylocation,

      avatar:
        "https://banner2.kisspng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg",
      aboutMe: [
        this.state.iamsportLover,
        this.state.iampetLover,
        this.state.iamsnorer,
        this.state.iamcleanFreak,
        this.state.iamcomputerNeard,
        this.state.iamheavyDrinker,
        this.state.iampartyLover,
        this.state.iamsmoker,
        this.state.iamborrower
      ],
      interestedIn: [
        this.state.lookingForgender,
        this.state.lookingForage1,
        this.state.lookingForage2,
        this.state.lookingForlocation,
        this.state.partnerloveSports,
        this.state.partnerlovePets,
        this.state.partnerdoesNotSnore,
        this.state.partnercleans,
        this.state.partnerisComputerNerd,
        this.state.partnerdrinks,
        this.state.partnerloveParties,
        this.state.partnersmokes,
        this.state.partnerdoesNotBorrow
      ],
      saved: this.state.saved
    };

    console.log(newUser);
    this.props.registeruser(newUser, this.props.history);
  };
  render() {
    //Getting the errrors varibale form the state - dstructuring
    const { errors } = this.state;
    const { isAuthenticated, user } = this.props.auth;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 m-auto">
              <p className="lead text-center" />
              <form onSubmit={this.onSubmit}>
                {/* Abt me ####################################################################################--> */}

                <div className="my-intro-p row text-center justify-content-center">
                  <p className="form-inline justify-content-center">
                    I am &nbsp;
                    <input
                      className="form-control form-control-sm col-sm-1 "
                      name="myage"
                      onChange={this.onChange}
                      value={this.state.user.myAge}
                    />
                    &nbsp; years old &nbsp;
                    <select
                      className="form-control form-control-sm col-sm-1"
                      name="mygender"
                      onChange={this.onChange}
                      value={this.state.user.myGender}

                    >
                      <option> </option>
                      <option> Male </option>
                      <option> Female </option>
                    </select>
                    &nbsp; looking for a roommate in &nbsp;
                    <input
                      className="form-control form-control-sm col-sm-1"
                      name="mylocation"
                      onChange={this.onChange}
                      value={this.state.user.myLocation}

                    />
                    &nbsp; area. I belong to the tribe of
                  </p>

                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamsportLover"
                        value="sport lover"
                        onChange={this.onCheck}

                      />
                      &nbsp;
                      <label className="form-check-label">Sport Lovers</label>
                    </div>
                  </div> */}
                  {this.renderDrink("sport lover","iamsportLover","sport lover","Sport Lovers")}

                  {this.renderDrink("pet lover","iampetLover","pet lover","Pet Lovers")}

                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iampetLover"
                        value="pet lover"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">Pet Lovers</label>
                    </div>
                  </div> */}
                  {this.renderDrink("snorer","iamsnorer","snorer","Snorers")}

                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamsnorer"
                        value="snorer"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">Snorers</label>
                    </div>
                  </div> */}
                  {this.renderDrink("clean","iamcleanFreak","clean","Clean freaks")}

                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamcleanFreak"
                        value="clean"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">Clean freaks</label>
                    </div>
                  </div> */}

                  {this.renderDrink("computer neard","iamcomputerNeard","computer neard","Computer nerds")}

                  {this.renderDrink("drinker","iamheavyDrinker","drinker","Heavy drinkers")}

                  {this.renderDrink("party lover","iampartyLover","party lover","Party goers")}

                  {this.renderDrink("smoker","iamsmoker","smoker","Smokers")}

                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamsmoker"
                        value="smoker"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">Smokers</label>
                    </div>
                  </div> */}
                  {this.renderDrink("borrower","iamborrower","borrower","Borrowers")}

                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamborrower"
                        value="borrower"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">Borrowers</label>
                    </div>
                  </div>
                </div> */}

                {/* <!-- Looking for ####################################################################################--> */}

                <div className="my-partner-intro-p row text-center justify-content-center">
                  <p className="form-inline justify-content-center">
                    I am a looking for &nbsp;
                    <select
                      className="form-control form-control-sm col-sm-1"
                      name="lookingForgender"
                      onChange={this.onChange}
                      value={user.interestedIn[2]}
                    >
                      <option> </option>
                      <option> Male </option>
                      <option> Female </option>
                    </select>
                    &nbsp; who is &nbsp;
                    <input
                      className="form-control form-control-sm col-sm-1 "
                      name="lookingForage1"
                      onChange={this.onChange}
                      value={user.interestedIn[0]}
                    />
                    &nbsp;-&nbsp;
                    <input
                      className="form-control form-control-sm col-sm-1 "
                      name="lookingForage2"
                      onChange={this.onChange}
                      value={user.interestedIn[1]}
                    />
                    &nbsp; years old, who lives in &nbsp;
                    <input
                      className="form-control form-control-sm col-sm-1"
                      name="lookingForlocation"
                      onChange={this.onChange}
                      value={user.interestedIn[3]}
                    />
                    &nbsp; and who
                  </p>
                  {this.renderintrest("sport lover","partnerloveSports","sport lover","Loves sports")}

                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnerloveSports"
                        value="sport lover"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">Loves sports</label>
                    </div>
                  </div> */}
                  {this.renderintrest("pet lover","partnerlovePets","pet lover","Loves pets")}


                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnerlovePets"
                        value="pet lover"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">Loves pets</label>
                    </div>
                  </div> */}
                   {this.renderintrest("snorer","partner-doesNotSnore","snorer","Does not snore")}


                  {/* <div className="col-sm-4">
                    <div className="formcheck">
                      <input
                        type="checkbox"
                        name="partner-doesNotSnore"
                        value="snorer"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">Does not snore</label>
                    </div>
                  </div>
 */}
                    {this.renderintrest("clean","partnercleans","clean","Cleans")}

                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnercleans"
                        value="clean"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">Cleans</label>
                    </div>
                  </div> */}
                    {this.renderintrest("computer neard","partner-isComputerNerd","computer neard","Is a computer neard")}

                  {/* <div className="col-sm-4">
                    <div className="formcheck">
                      <input
                        type="checkbox"
                        name="partner-isComputerNerd"
                        value="computer neard"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">
                        Is a computer neard
                      </label>
                    </div>
                  </div> */}
                    {this.renderintrest("drinker","partnerdrinks","drinker","Drinks")}

                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnerdrinks"
                        value="drinker"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">Drinks</label>
                    </div>
                  </div> */}
              {this.renderintrest("party lover","partnerloveParties","party lover","Loves parties")}


                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnerloveParties"
                        value="party lover"
                        onChange={this.onCheck}
                      />
                      &nbsp;
                      <label className="form-check-label">Loves parties</label>
                    </div>
                  </div> */}
              {this.renderintrest("smoker","partnersmokes","smoker","Smokes")}

                  {/* <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnersmokes"
                        value="smoker"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Smokes</label>
                    </div>
                  </div> */}
                  {this.renderintrest("borrower","partnerdoesNotBorrow","borrower","Does not borrow")}


                  {/* // <div className="col-sm-4">
                  //   <div className="form-check">
                  //     <input
                  //       type="checkbox"
                  //       name="partnerdoesNotBorrow"
                  //       value="borrower"
                  //       onChange={this.onCheck}
                  //     />
                  //     &nbsp;
                  //     <label className="form-check-label">
                  //       Does not borrow
                  //     </label>
                  //   </div>
                  // </div> */}

                  {/* <!--Proceed btn ####################################################################################--> */}

                  <div className="proceed-btn col-sm-12 text-center">
                    <p className="btn btn-primary " onClick={this.hideIntro}>
                      Update
                    </p>
                  </div>
                </div>

                {/* <!-- upload image ####################################################################################--> */}
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth
});



export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);
