import React from "react";
import "./cm.css";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import axios from "axios"; this will be replaced by redux actions
// import classnames from "classnames";
// import API from "../../utils/API";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
//({ handleClose, show, children ,userid, username })
const Cm = props => {
  const showHideClassName = props.show ? 'modal2 display-block' : 'modal2 display-none';
  return (
    
    <div className={showHideClassName}>
    <section className='modal2-main'>
      <Container fluid>
        <Row>
         
            {/* <Col size="md-5"></Col> */}

            <Col size="md-12">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1>{props.msgs}</h1>
            </Col>
            {/* <Col size="md-4"></Col> */}
      
        </Row>

      </Container>
      <br />

      <Link to={props.red}> <button onClick={props.handleClose} className="btasmdot"> Close </button></Link>
      {/* //   <section className='modal-main'>
      //   <p>{props.userid}</p>
      //   <p>Name: {props.name}</p>
      //   <p>Gender:{props.Gender}</p>
      //   <p>Age: {props.Age}</p> 
      //   <p>About_me: {props.About_me}</p>
      //     {/* //{children} */}
      {/* //     <button */}
      {/* //       onClick={props.handleClose} */}
      {/* //     > */}
      {/* //       Close */}
      {/* //     </button> */}
      {/* //   </section> */}
      </section>
    </div>
    
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Cm);

// export default ;

