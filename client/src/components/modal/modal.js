import React from "react";
import "./model.css";
import { Col, Row, Container } from "../../components/Grid";

//({ handleClose, show, children ,userid, username })
const Modal = props => {
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';
  return (
    
    <div className={showHideClassName}>
    <section className='modal-main'>
      <Container fluid>
        <Row>
           <Col size="md-4"></Col>
            <Col size="md-3"><img className="imgnew" src={props.avatarUrl} alt="imge" /></Col>
            <Col size="md-5"></Col>
</Row>
<Row>
  <Col size="md-4"></Col>
             <Col size="md-3">
              <h2><b>{props.name}</b>,&nbsp;{props.Gender}&nbsp;,&nbsp;{props.Age}&nbsp;Yrs</h2>
            </Col>
            <Col size="md-5"></Col>
      
        </Row>

        <Row>
          <Col size="md-4"></Col>

          <Col size="md-4">

            <h2><b>About me</b></h2>
            

          </Col>
          <Col size="md-4"></Col>
        </Row>
        <Row>
          <Col size="md-3"></Col>

          <Col size="md-5">

            <h4 className="h555555">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.About_me}</h4>
            

          </Col>
          <Col size="md-4"></Col>
        </Row>
        <Row>
          <Col size="md-4"></Col>

          <Col size="md-8">
           <h4>
           {props.interestIn.map((interest) =>{
             return (
               <div className="intrested">
                <h7><img className="eimg" src="https://png.icons8.com/material/80/000000/checkmark.png"/>&nbsp;&nbsp;{interest}</h7>
               </div>
             ) 
           })}
           </h4>
          </Col>
        </Row>

        <Row>
          <Col size="md-4"></Col>
          <Col size="md-3">
          <h4 className="h555555"><img className="eimg1" src="https://png.icons8.com/color/40/000000/marker.png" alt="location" /></h4>
          </Col>
          <Col size="md-5">
          </Col>
        </Row>
          

            <Row>
          <Col size="md-4"></Col>
          <Col size="md-3">
          <h4 className="h555555">{props.location}</h4>
          </Col>
          <Col size="md-5">
          </Col>
        </Row>
       

       
          <Row>
          <Col size="md-5"></Col>
          <Col size="md-3">
          <img className="eimg2" src="https://png.icons8.com/dusk/80/000000/gmail.png" alt="gmail"/>
          </Col>
          <Col size="md-4">
          </Col>
        </Row>
        <Row>
          <Col size="md-3"></Col>

          <Col size="md-5">

            <h4 className="h555555">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.email}</h4>
            

          </Col>
          <Col size="md-4"></Col>
        </Row>
       <br></br>
      <Row>
      <Col size="md-5"></Col>
        <Col size="md-2">
      <button  className="btn btn-primary btnnnnnn" onClick={props.handleClose}  >Close</button>
      </Col>
      <Col size="md-5"></Col>
      </Row>
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

      </Container>
      </section>
    </div>
    
  );
};


export default Modal;

