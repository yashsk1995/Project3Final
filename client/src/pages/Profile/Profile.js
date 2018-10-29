import React, { Component } from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import axios from "axios"; this will be replaced by redux actions
import classnames from "classnames";
import API from "../../utils/API";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Cm from "../../components/common modal/cm"

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

      user: [],
      interestedIn2:[],
      aboutMe2:[],
      myAge2:[],
      myLocation2:[],
      myGender2:[],
      show: false,
     showMe:true
      
    };
  }
  showModal = () => {
    this.setState({ show: true });
   
  };

  hideModal = () => {
    this.setState({ show: false });
  }


  updateProfile = (id,aboutMe,interestedIn,myLocation,myGender,myAge) => {
    const { isAuthenticated, user } = this.props.auth;
    const aboutMe1 = [];
    aboutMe1.push(this.state.iamsportLover);
    aboutMe1.push(this.state.iampetLover);
    aboutMe1.push(this.state.iamsnorer);
    aboutMe1.push(this.state.iamcleanFreak);
    aboutMe1.push(this.state.iamcomputerNeard);
    aboutMe1.push(this.state.iamheavyDrinker);
    aboutMe1.push(this.state.iampartyLover);
    aboutMe1.push(this.state.iamsmoker);
    aboutMe1.push(this.state.iamborrower);
    
     let interestedIn1 = [];
        interestedIn1.push(this.state.lookingForgender);
        interestedIn1.push(this.state.lookingForage1);
        interestedIn1.push(this.state.lookingForage2);
        interestedIn1.push(this.state.lookingForlocation);
        interestedIn1.push(this.state.partnerloveSports);
        interestedIn1.push(this.state.partnerlovePets);
        interestedIn1.push(this.state.partnerdoesNotSnore);
        interestedIn1.push(this.state.partnercleans);
        interestedIn1.push(this.state.partnerisComputerNerd);
        interestedIn1.push(this.state.partnerdrinks);
        interestedIn1.push(this.state.partnerloveParties);
        interestedIn1.push(this.state.partnersmokes);
        interestedIn1.push(this.state.partnerdoesNotBorrow);
     const myAge1= this.state.myage;
     const myGender1= this.state.mygender;
     const myLocation1 =this.state.mylocation;
     API.saveProfile(user.id,aboutMe1,interestedIn1,myLocation1,myGender1,myAge1)
    .then(res => { this.setState({ user: res.data }); console.log(this.state.user); })

    .catch(err => console.log(err));

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


  loadUsers = (id) => {
    API.getInfoById(id)
      .then(res => { this.setState({ user: res.data }); console.log(this.state.user); })
  }
  onCheck = e => {
    console.log(e.target.checked)
    if (e.target.checked) {
      this.setState({ [e.target.name]: e.target.value });
      console.log("cchecked");
    } else  {
      this.setState({ [e.target.name]: "" });
      console.log("unnnnncchecked");
    } 
  };


  componentDidMount() {
    const { isAuthenticated, user } = this.props.auth;
    this.loadUsers(user.id);


    
  }
  renderDrink(item,name,value,text) {
    const { isAuthenticated, user } = this.props.auth;
    let array2=[];
    if (this.state.user.aboutMe != undefined) {
      this.state.user.aboutMe.map(item => {
        array2.push(item)
      })
    }
    if(array2.includes(item)) {
      return (
        <div className="col-sm-4">
        <div className="form-check">
          <input
            type="checkbox"
            name={name}
            value={value}
            onChange={this.onCheck}

            // checked
            defaultChecked
          />
          &nbsp;
          <label className="form-check-label">{text}</label>
        </div>
      </div>
      );
    } else {
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
      let array= [];
    //   array=  this.state.user.map(a => {
    //    a.interestedIn.map(b => {
    //      if(b){
    //        array.push(b)
    //      }
    //    })
    //  })
    // Object.keys(this.state.user.interestedIn).map((item) => (
    //     array.push(item)
    // ))
    if (this.state.user.interestedIn != undefined) {
      this.state.user.interestedIn.map(item => {
        array.push(item)
      })
    }

    if(array.includes(item)) {
      return (
        <div className="col-sm-4">
        <div className="form-check">
          <input
            type="checkbox"
            name={name}
            value={value}
            onChange={this.onCheck}
            defaultChecked
          />
          &nbsp;
          <label className="form-check-label">{text}</label>
        </div>
      </div>
      );
    } else {
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
    const { isAuthenticated, user } = this.props.auth;

    API.getInfoById(id)
      .then(res => { this.setState({ user: res.data }); console.log("USER",this.state.user); 
        this.setState({myage:this.state.user.myAge,
          mygender:this.state.user.myGender,
          mylocation:this.state.user.myLocation,
      iamsportLover:user.aboutMe[0],
      iampetLover:user.aboutMe[1],
      iamsnorer:user.aboutMe[2],
      iamcleanFreak:user.aboutMe[3],
      iamcomputerNeard:user.aboutMe[4],
      iamheavyDrinker:user.aboutMe[5],
      iampartyLover:user.aboutMe[6],
      iamsmoker:user.aboutMe[7],
      iamborrower:user.aboutMe[8],

      
      lookingForgender:user.interestedIn[0],
      lookingForage1:user.interestedIn[1],
      lookingForage2:user.interestedIn[2],
      lookingForlocation:user.interestedIn[3],
      partnerloveSports:user.interestedIn[4],
      partnerlovePets:user.interestedIn[5],
      partnerdoesNotSnore:user.interestedIn[6],
      partnercleans:user.interestedIn[7],
      partnerisComputerNerd:user.interestedIn[8],
      partnerdrinks:user.interestedIn[9],
      partnerloveParties:user.interestedIn[10],
      partnersmokes:user.interestedIn[11],
      partnerdoesNotBorrow:user.interestedIn[12]
          
        })

    })

      .catch(err => console.log(err));

  };

  //On submit function
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

                      // value={this.state.user.myAge}
                      defaultValue={this.state.user.myAge}

                    />
                    &nbsp; years old &nbsp;
                    <select
                      className="form-control form-control-sm col-sm-1"
                      name="mygender"
                      onChange={this.onChange}
                      // value={this.state.user.myGender}
                      defaultValue={this.state.user.myGender}
                     

                    >
                     <option></option>
                      <option> Male </option>
                      <option> Female </option>
                    </select>
                    &nbsp; looking for a roommate in &nbsp;
                    <input
                      className="form-control form-control-sm col-sm-1"
                      name="mylocation"
                      onChange={this.onChange}
                      // value={this.state.user.myLocation}
                      defaultValue={this.state.user.myLocation}


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
                      defaultValue={user.interestedIn[0]}
                      // value={user.interestedIn[0]}
                    >
                                         <option></option>

                      <option> Male </option>
                      <option> Female </option>
                    </select>
                    &nbsp; who is &nbsp;
                    <input
                      className="form-control form-control-sm col-sm-1 "
                      name="lookingForage1"
                      onChange={this.onChange}
                      // value={user.interestedIn[1]}
                      defaultValue={user.interestedIn[1]}
                    />
                    &nbsp;-&nbsp;
                    <input
                      className="form-control form-control-sm col-sm-1 "
                      name="lookingForage2"
                      onChange={this.onChange}
                      // value={user.interestedIn[2]}
                      defaultValue={user.interestedIn[2]}
/>                    &nbsp; years old, who lives in &nbsp;
                    <input
                      className="form-control form-control-sm col-sm-1"
                      name="lookingForlocation"
                      onChange={this.onChange}
                      // value={user.interestedIn[3]}
                      defaultValue={user.interestedIn[3]}
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
                   {this.renderintrest("snorer","partnerdoesNotSnore","snorer","Does not snore")}


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
                    {this.renderintrest("computer neard","partnerisComputerNerd","computer neard","Is a computer neard")}

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
                    <p className="btn btn-primary " onClick={()=>{ this.updateProfile(); this.showModal() }}>
                      Update
                    </p>
                  </div>
                </div>
                  <Cm show={this.state.show} handleClose={this.hideModal}
                  msgs="your profile updated successfully"
                // interestIn={this.state.Info.interestIn}
                />
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

const container = document.createElement('div');
document.body.appendChild(container);
// export default Matches;