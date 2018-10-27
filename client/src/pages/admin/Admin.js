import React, { Component } from "react";
import { Container } from "../../components/Grid";
// import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API";
import Profiles from "../../components/cards";
import PieChart from 'react-minimal-pie-chart';


class Admin extends Component {
    state = {
        users: [],
        genders: [],
        maleCount: 0,
        femaleCount: 0,
        showResults: false
    };

    componentDidMount() {
        this.show();
    };

    show = () => {
        API.getUsers()
            .then(res => {
                this.setState({ users: res.data })
                this.setState({
                    genders: res.data.map(genders => (
                        genders.myGender
                    ))
                })
                this.setState({ maleCount: this.state.genders.filter(male => male === "Male").length })
                this.setState({ femaleCount: this.state.genders.filter(female => female === "Female").length })
            })
    };

    delete = (id) => {
        API.deleteUser(id)
            .then(res => this.show())
            .catch(err => console.log(err))
    };

    handleTransition = () => {
        this.setState({ showResults: true })
    };

    handleBack = () => {
        this.setState({ showResults: false })
    }

    render() {
        const { user } = this.props.auth;

        return (
            <Container fluid>
                {!this.state.showResults ?
                    <PieChart data={[
                        { title: 'Male', value: this.state.genders.length / this.state.maleCount, color: '#41C8F9' },
                        { title: 'Female', value: this.state.genders.length / this.state.femaleCount, color: "#B2D0DB" },
                    ]}
                    >
                        <h1 style={{ textAlign: 'center', padding: '10px' }}>Male: {this.state.maleCount}, Female: {this.state.femaleCount}, Total: {this.state.users.length}</h1>
                        <button style={{ marginRight: "40%", marginLeft: "40%", width: "10%" }} className="btn btn-primary btn-block mt-2" onClick={() => this.handleTransition()}>Proceed</button>
                    </PieChart> : null}
                {this.state.showResults ?
                    this.state.users.map((users, i) => (
                        <Profiles
                            key={i}
                            img={users.avatar}
                            usernames={users.name}
                            Gender={users.myGender}
                            age={users.myAge}
                            City={users.myLocation}
                            onClick={() => this.delete(users._id)}
                        />
                    )) : null}
            </Container >
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