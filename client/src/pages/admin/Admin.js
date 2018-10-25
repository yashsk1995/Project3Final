import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
// import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Box from "../../components/Box";
import Jumbotron from "../../components/Jumbotron";
import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API";
import Profile from "../../components/cards";


class Admin extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        console.log("mounted");
        this.show();
    };

    show = () => {
        API.allUsers()
            .then(res => {
                this.setState({ users: res.data })
                console.log(res.data);
                console.log("api called");
            })
    };

    delete = () => {

    }

    render() {
        const { user } = this.props.auth;

        return (
            <Container fluid>
                {this.state.users.map(users =>
                    <Profile img={users.avatar}
                        usernames={users.name}
                        Gender={users.myGender}
                        age={users.myAge}
                        City={users.myLocation}
                    ></Profile>
                )}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Admin);