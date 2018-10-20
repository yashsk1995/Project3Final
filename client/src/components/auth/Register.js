import React, { Component } from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import axios from "axios"; this will be replaced by redux actions
import classnames from "classnames";
import { connect } from "react-redux";
import { registeruser } from "../../actions/authActions";

class Register extends Component {
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
      errors: {}
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
  //Check hide intro
  hideIntro = e => {
    this.setState({ hideintro: true });
    console.log(this.state);
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
      // avatar: this.state.avatar
      avatar:
        "https://banner2.kisspng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"
    };
    console.log(newUser);
    this.props.registeruser(newUser, this.props.history);
  };
  render() {
    //Getting the errrors varibale form the state - dstructuring
    const { errors } = this.state;

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
                    {this.hideintro
                      ? console.log("apple")
                      : console.log("mango")}
                    {console.log(this.check)};
                    <input
                      className="form-control form-control-sm col-sm-1 "
                      name="myage"
                      onChange={this.onChange}
                    />
                    &nbsp; years old &nbsp;
                    <select
                      className="form-control form-control-sm col-sm-1"
                      name="mygender"
                      onChange={this.onChange}
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
                    />
                    &nbsp; area. I belong to the tribe of
                  </p>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamsportLover"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Sport Lovers</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iampetLover"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Pet Lovers</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamsnorer"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Snorers</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamcleanFreak"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Clean freaks</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamcomputerNeard"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Computer nerds</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamheavyDrinker"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Heavy drinkers</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iampartyLover"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Party goers</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamsmoker"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Smokers</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="iamborrower"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Borrowers</label>
                    </div>
                  </div>
                </div>

                {/* <!-- Looking for ####################################################################################--> */}

                <div className="my-partner-intro-p row text-center justify-content-center">
                  <p className="form-inline justify-content-center">
                    I am a looking for &nbsp;
                    <select
                      className="form-control form-control-sm col-sm-1"
                      name="lookingForgender"
                      onChange={this.onChange}
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
                    />
                    &nbsp;-&nbsp;
                    <input
                      className="form-control form-control-sm col-sm-1 "
                      name="lookingForage2"
                      onChange={this.onChange}
                    />
                    &nbsp; years old, who lives in &nbsp;
                    <input
                      className="form-control form-control-sm col-sm-1"
                      name="lookingForlocation"
                      onChange={this.onChange}
                    />
                    &nbsp; and who
                  </p>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnerloveSports"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Loves sports</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnerlovePets"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Loves pets</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="formcheck">
                      <input
                        type="checkbox"
                        name="partner-doesNotSnore"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Does not snore</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnercleans"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Cleans</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="formcheck">
                      <input
                        type="checkbox"
                        name="partner-isComputerNerd"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">
                        Is a computer neard
                      </label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnerdrinks"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Drinks</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnerloveParties"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Loves parties</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnersmokes"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">Smokes</label>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="partnerdoesNotBorrow"
                        onChange={this.onChange}
                      />
                      &nbsp;
                      <label className="form-check-label">
                        Does not borrow
                      </label>
                    </div>
                  </div>

                  {/* <!--Proceed btn ####################################################################################--> */}

                  <div className="proceed-btn col-sm-12 text-center">
                    <p className="btn btn-primary " onClick={this.hideIntro}>
                      Proceed
                    </p>
                  </div>
                </div>

                {/* <!-- upload image ####################################################################################--> */}
                <div className="upload-image col-sm-12 text-center">
                  <input type="file" className="btn  btn-lg btn-upload" />
                  <span>
                    <button className="btn btn-lg btn-primary">Upload</button>
                  </span>
                </div>

                {/* <!-- upload image ####################################################################################--> */}

                <div className="test" />

                {/* <!--####################################################################################--> */}

                <div className="form-group col-md-6">
                  <input
                    type="text"
                    // className="is-invalid form-control form-control-md"
                    className={classnames("form-control form-control-md", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className={classnames("form-control form-control-md", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="password"
                    className={classnames("form-control form-control-md", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="password"
                    className={classnames("form-control form-control-md", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4 col-md-6"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registeruser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registeruser }
)(withRouter(Register));
