import React, { Component } from "react";
import { Container } from "../../components/Grid";
// import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API";
import Profiles from "../../components/cards";


class Admin extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.show();
    };

    show = () => {
        API.getUsers()
            .then(res => {
                this.setState({ users: res.data })
                console.log(res.data);
                console.log(this.state.users);
            })
    };

    delete = () => {

    }

    render() {
        const { user } = this.props.auth;

        return (
            <Container fluid>
                {this.state.users.map((users, i) => (
                    <Profiles
                        key={i}
                        img={users.avatar}
                        usernames={users.name}
                        Gender={users.myGender}
                        age={users.myAge}
                        City={users.myLocation}
                    />
                ))}
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