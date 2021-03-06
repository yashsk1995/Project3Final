import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
class Login extends Component {
  //Empty constructor - the initial value assigned to each field
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  //Life cycle
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
      // this.props.history.push("/login");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  //On change event
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //On submit event
  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    // console.log(user);
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    // const { user } = this.props.auth;

    return (
      <div className="qwqertyu">
        <div className="boxqwrf">
        {/* {user.admin} */}
        <div className="container">
        <div className="rwwrc">
        <div className="col-md-3">
          </div>
          <div className="col-md-5">
          {/* <h1 className="dqliuth">Log in</h1> */}
          </div>
          <div className="col-md-4">
          </div>
        
        </div>
        </div>
        <div className="container ">
          <div className="loginRow" >
          <div className="col-md-3">
          </div>
            <div className="col-md-5 gthyurkfm">
              {/* <h1 className="display-6 text-center">Log In</h1> */}
            
              <form onSubmit={this.onSubmit}>
                <div className="form-group ">
                  <div className="input-group ">
                    <span className="input-group-addon yuiokjhbnm">
                      <i className="glyphicon glyphicon-user gyuikjbnm" />
                    </span>

                    <input
                      type="text"
                      // className="form-control form-control-md"
                      className={classnames("form-control form-control-md gthyurkfm yuiokjhbnm", {
                        "is-invalid": errors.email
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
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon yuiokjhbnm">
                      <i className="glyphicon glyphicon-lock gyuikjbnm yuiokjhbnm" />
                    </span>
                    <input
                      type="password"
                      // className="form-control form-control-md"
                      className={classnames("form-control form-control-md gthyurkfm yuiokjhbnm", {
                        "is-invalid": errors.password
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
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-2 yuiokjhbnm"
                />
              </form>
            </div>
            <div className="col-md-4">
          </div>
          </div>
          <br />
         
        </div>
        </div>

      </div>
    );
  }
}
Login.protoTypes = {
  loginUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

//map state to props
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
