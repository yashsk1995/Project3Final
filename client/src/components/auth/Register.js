import React, { Component } from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import Dropzone from "react-dropzone";
import Dropzone from "react-dropzone";
import axios from "axios";
import classnames from "classnames";
import { connect } from "react-redux";
import { registeruser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      formErrormyAge: 0,
      formErrormyGender: 0,
      formErrormyLocation: 0,
      formErrorlookingForGender: 0,
      formErrorloogingForAge1: 0,
      formErrorlookingForAge2: 0,
      formErrorlookingForLocation: 0,

      step1: 0,
      step2: 0,
      step3: 0,
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

      file: null,
      avatar: "",
      name: "",
      email: "",
      password: "",
      password2: "",
      saved: [],
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

  //function to grab checked items
  checkIfChecked = () => {
    const aboutMe = [];
    if (this.state.iamsportLover.length > 0) {
      aboutMe.push(this.state.iamsportLover);
    }
    if (this.state.iampetLover.length > 0) {
      aboutMe.push(this.state.iampetLover);
    }
    if (this.state.iamsnorer.length > 0) {
      aboutMe.push(this.state.iamsnorer);
    }
    if (this.state.iamcleanFreak.length > 0) {
      aboutMe.push(this.state.iamcleanFreak);
    }
    if (this.state.iamcomputerNeard.length > 0) {
      aboutMe.push(this.state.iamcomputerNeard);
    }
    if (this.state.iamheavyDrinker.length > 0) {
      aboutMe.push(this.state.iamheavyDrinker);
    }
    if (this.state.iampartyLover.length > 0) {
      aboutMe.push(this.state.iampartyLover);
    }
    if (this.state.iamsmoker.length > 0) {
      aboutMe.push(this.state.iamsmoker);
    }
    if (this.state.iamborrower.length > 0) {
      aboutMe.push(this.state.iamborrower);
    }
    console.log(aboutMe);
    return aboutMe;
  };

  //function to grab checked items
  checkIfChecked2 = () => {
    const interesteIn = [];

    if (this.state.lookingForgender.length > 0) {
      interesteIn.push(this.state.lookingForgender);
    }
    if (this.state.lookingForage1.length > 0) {
      interesteIn.push(this.state.lookingForage1);
    }
    if (this.state.lookingForage2.length > 0) {
      interesteIn.push(this.state.lookingForage2);
    }
    if (this.state.lookingForlocation.length > 0) {
      interesteIn.push(this.state.lookingForlocation.toLowerCase());
    }
    if (this.state.partnerloveSports.length > 0) {
      interesteIn.push(this.state.partnerloveSports);
    }
    if (this.state.partnerlovePets.length > 0) {
      interesteIn.push(this.state.partnerlovePets);
    }
    if (this.state.partnerdoesNotSnore.length > 0) {
      interesteIn.push(this.state.partnerdoesNotSnore);
    }
    if (this.state.partnercleans.length > 0) {
      interesteIn.push(this.state.partnercleans);
    }
    if (this.state.partnerisComputerNerd.length > 0) {
      interesteIn.push(this.state.partnerisComputerNerd);
    }
    if (this.state.partnerdrinks.length > 0) {
      interesteIn.push(this.state.partnerdrinks);
    }

    if (this.state.partnerloveParties.length > 0) {
      interesteIn.push(this.state.partnerloveParties);
    }
    if (this.state.partnersmokes.length > 0) {
      interesteIn.push(this.state.partnersmokes);
    }
    if (this.state.partnerdoesNotBorrow.length > 0) {
      interesteIn.push(this.state.partnerdoesNotBorrow);
    }
    console.log(interesteIn);
    return interesteIn;
  };

  //on check function
  onCheck = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Proceed to step 2
  proceedToStep2 = e => {
    e.preventDefault();
    this.setState({ step1: 1, step2: 1 });
  };

  //proceed to step 3
  proceedToStep3 = e => {
    e.preventDefault();
    this.state.myage === ""
      ? this.setState({ formErrormyAge: 1 })
      : this.setState({ formErrormyAge: 0 });
    this.state.mygender === ""
      ? this.setState({ formErrormyGender: 1 })
      : this.setState({ formErrormyGender: 0 });
    this.state.mylocation === ""
      ? this.setState({ formErrormyLocation: 1 })
      : this.setState({ step2: 0, step3: 1 });
  };

  //on file upload function
  handleDrop = files => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "zhdszg9l"); // Replace the preset name with your own
      formData.append("api_key", "979144221523772"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios
        .post(
          // "https://api.cloudinary.com/v1_1/codeinfuse/image/upload",
          "https://api.cloudinary.com/v1_1/djrmxber1/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" }
          }
        )
        .then(response => {
          const data = response.data;
          console.log("#####this is avatar url" + data.secure_url);
          this.setState({ avatar: data.secure_url });
        });
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
    });
  };

  //On submit function
  onSubmit = e => {
    const aboutMe = this.checkIfChecked();
    const intrestedIn = this.checkIfChecked2();
    // console.log("Test for image url " + this.state.file[0].name);
    e.preventDefault();
    console.log(this.state); // This is a test remove this later
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      myAge: parseInt(this.state.myage),
      myGender: this.state.mygender,
      myLocation: this.state.mylocation.toLocaleLowerCase(),

      avatar: this.state.avatar,
      // "https://banner2.kisspng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg",
      aboutMe: aboutMe,
      interestedIn: intrestedIn,
      saved: this.state.saved
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
                {/* upload Image ####################################################################################--> */}
                <div className={this.state.step1 === 0 ? "show" : "hide"}>
                  <div className="imageAndUploadBtn">
                    <div className="imageUploadRows row text-center justify-content-center">
                      <div>
                        <div
                          className={
                            this.state.avatar.length > 0 ? "hide" : "show"
                          }
                        >
                          <h4 className="dropZoneTitle">
                            {" "}
                            <p>Let's start by uploading an image </p>
                            <p className="dropZoneTitle2">
                              {" "}
                              Drag and drop or click on image to upload
                            </p>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="imageUploadRows row text-center justify-content-center">
                      <Dropzone
                        onDrop={this.handleDrop}
                        multiple
                        accept="image/*"
                        className="dropZone"
                      >
                        <img
                          className="dropZoneImage"
                          src={this.state.avatar}
                          height="335px"
                          width="335px"
                          alt=""
                        />
                      </Dropzone>
                    </div>

                    <div className="imageUploadRows row  text-center justify-content-center">
                      <div
                        className={
                          this.state.avatar.length > 0 ? "show" : "hide"
                        }
                      >
                        <p
                          className="btn btn-primary"
                          onClick={this.proceedToStep2}
                        >
                          {" "}
                          Upload{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Abt me ####################################################################################--> */}
                <div className={this.state.step2 === 0 ? "hide" : "show"}>
                  <div className="my-intro-p row text-center justify-content-center">
                    <p className="form-inline justify-content-center">
                      I am &nbsp;
                      <input
                        className={
                          this.state.formErrormyAge === 0
                            ? "form-control form-control-sm col-sm-1"
                            : "is-invalid form-control form-control-sm col-sm-1"
                        }
                        name="myage"
                        onChange={this.onChange}
                      />
                      &nbsp; years old &nbsp;
                      <select
                        // className="form-control form-control-lg col-sm-1"
                        className={
                          this.state.formErrormyGender === 0
                            ? "form-control form-control-lg col-sm-1"
                            : "is-invalid form-control form-control-lg col-sm-1"
                        }
                        name="mygender"
                        onChange={this.onChange}
                      >
                        <option> </option>
                        <option> Male </option>
                        <option> Female </option>
                      </select>
                      &nbsp; looking for a roommate in &nbsp;
                      <input
                        // className="form-control form-control-sm col-sm-1"
                        className={
                          this.state.formErrormyLocation === 0
                            ? "form-control form-control-sm col-sm-1"
                            : "is-invalid form-control form-control-sm col-sm-1"
                        }
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
                          value="sport lover"
                          onChange={this.onCheck}
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
                          value="pet lover"
                          onChange={this.onCheck}
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
                          value="snorer"
                          onChange={this.onCheck}
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
                          value="clean"
                          onChange={this.onCheck}
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
                          value="computer neard"
                          onChange={this.onCheck}
                        />
                        &nbsp;
                        <label className="form-check-label">
                          Computer nerds
                        </label>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="iamheavyDrinker"
                          value="drinker"
                          onChange={this.onCheck}
                        />
                        &nbsp;
                        <label className="form-check-label">
                          Heavy drinkers
                        </label>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="iampartyLover"
                          value="party lover"
                          onChange={this.onCheck}
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
                          value="smoker"
                          onChange={this.onCheck}
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
                          value="borrower"
                          onChange={this.onCheck}
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
                        className="form-control form-control-lg col-sm-1"
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
                          value="sport lover"
                          onChange={this.onCheck}
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
                          value="pet lover"
                          onChange={this.onCheck}
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
                          value="snorer"
                          onChange={this.onCheck}
                        />
                        &nbsp;
                        <label className="form-check-label">
                          Does not snore
                        </label>
                      </div>
                    </div>

                    <div className="col-sm-4">
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
                    </div>

                    <div className="col-sm-4">
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
                    </div>

                    <div className="col-sm-4">
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
                    </div>

                    <div className="col-sm-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="partnerloveParties"
                          value="party lover"
                          onChange={this.onCheck}
                        />
                        &nbsp;
                        <label className="form-check-label">
                          Loves parties
                        </label>
                      </div>
                    </div>

                    <div className="col-sm-4">
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
                    </div>

                    <div className="col-sm-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          name="partnerdoesNotBorrow"
                          value="borrower"
                          onChange={this.onCheck}
                        />
                        &nbsp;
                        <label className="form-check-label">
                          Does not borrow
                        </label>
                      </div>
                    </div>

                    {/* <!--Proceed btn ####################################################################################--> */}

                    <div className="proceed-btn col-sm-12 text-center">
                      <p
                        className="btn btn-primary "
                        onClick={this.proceedToStep3}
                      >
                        Proceed
                      </p>
                    </div>
                  </div>
                </div>

                {/* <!singn up from --####################################################################################--> */}
                <div className="regInfo">
                  <div className={this.state.step3 === 0 ? "hide" : "show"}>
                    <div className="form-group col-md-6 col-md-offset-3">
                      <input
                        type="text"
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
                    <div className="form-group col-md-6 col-md-offset-3">
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
                    <div className="form-group col-md-6 col-md-offset-3">
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
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="form-group col-md-6 col-md-offset-3">
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
                        <div className="invalid-feedback">
                          {errors.password2}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 col-md-offset-3">
                      <input
                        type="submit"
                        className="btn btn-block btn-primary  "
                      />
                    </div>
                  </div>
                </div>
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
