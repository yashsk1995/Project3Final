import React from "react";
import "./cm.css";
import { Col, Row, Container } from "../../components/Grid";

//({ handleClose, show, children ,userid, username })
const Cm = props => {
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';
  return (
    
    <div className={showHideClassName}>
    <section className='modal-main'>
      <Container fluid>
        <Row>
         
            <Col size="md-5"></Col>

            <Col size="md-3">
                    <h1>{props.msgs}</h1>
            </Col>
            <Col size="md-4"></Col>
      
        </Row>

      </Container>
      <button onClick={props.handleClose}  >  Close </button>
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


export default Cm;

