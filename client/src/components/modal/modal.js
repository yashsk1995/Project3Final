import React from "react";
import "./model.css";
import { Col, Row, Container } from "../../components/Grid";

//({ handleClose, show, children ,userid, username })
const Modal = props => {
  let age = [];
  let text1 = [];
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';
  return (

    <div className={showHideClassName}>
      <section className='modal-main'>
        <Container fluid>

          <Row>

            <Col size="md-12">
              <div className="imasdf">

              </div>
              <img className="imgnew" src={props.avatarUrl} alt="imge" />
            </Col>
          </Row>
          <Row>
            <Col size="md-4"></Col>
            <Col size="md-4">
              <h2 className="texxtte abbte"><b>{props.name}</b>,&nbsp;{props.Gender}&nbsp;,&nbsp;{props.Age}&nbsp;Yrs</h2>
            </Col>
            <Col size="md-4"></Col>

          </Row>

          <Row>
            <Col size="md-4"></Col>

            <Col size="md-4">

              <h2 className="abbte"><b>About me</b></h2>


            </Col>
            <Col size="md-4"></Col>
          </Row>
          <Row>
            <Col size="md-3"></Col>

            <Col size="md-5">
              <Container fluid>
                <Row>
                  <Col size="md-0">
                  </Col>

                  {props.About_me.map((interest) => {
                    return (

                      <Col size="md-4">
                        <div className="intrested">
                          <br />
                          <h7><img className="eimg" src="https://png.icons8.com/ios/80/000000/guest-male-filled.png" />&nbsp;&nbsp;{interest}</h7>
                        </div>
                      </Col>


                    )
                  })
                  }

                  <Col size="md-5">
                  </Col>
                </Row>

              </Container>
              {/* <h4 className="h555555">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.About_me}</h4> */}


            </Col>
            <Col size="md-4"></Col>
          </Row>
          <Row>
            <Col size="md-4"></Col>

            <Col size="md-4">
              <br /><br />

              <h2 className="abbte"><b>Interest In</b></h2>


            </Col>
            <Col size="md-4"></Col>
          </Row>



          <Row>
            <Col size="md-3"></Col>
            <Col size="md-5">
              <Container fluid>
                <Row>
                  {props.interestIn.map((interest) => {

                    if (isNaN(interest)) {
                      text1.push(interest);


                    }
                    else {
                      age.push(interest);

                    }
                    console.log("text1", text1);
                    console.log("age", age);


                  })}
                  <Col size="md-12">

                    <h3 className="dadsqrtf">I am looking forward to find someone who is between {age[0]} to {age[1]} years old and {text1.shift()}, who resides in {text1.shift()} and who's </h3>

                    <br />
                    <br />
                  </Col>


                </Row>
                <Row>
                  <Col size="md-12">
                  {text1.map((interest) => {
                    return (
                      <Col size="md-6">
                      <br />
                      <h3><img className="eimg434" src="https://png.icons8.com/material-rounded/50/000000/enter-2.png" />{interest}</h3>
                      </Col>
                    )
                  })
                  }
                  </Col>
                </Row>
              </Container>

            </Col>
            <Col size="md-4"></Col>


          </Row>





          <Row>
            <Col size="md-5"></Col>
            <Col size="md-3">
              <br />
              <br />
              <h4><img className="eimg1" src="https://png.icons8.com/color/40/000000/marker.png" alt="location" />            {props.location}</h4>
            </Col>
            <Col size="md-4">
            </Col>
          </Row>






          <Row>
            <Col size="md-5"></Col>
            <Col size="md-3">
              <h4> <img className="eimg2" src="https://png.icons8.com/dusk/80/000000/gmail.png" alt="gmail" />{props.email}</h4>
            </Col>
            <Col size="md-4">
            </Col>
          </Row>

          <br></br>
          <Row>
            <Col size="md-5"></Col>
            <Col size="md-2">
              <button className="btn btn-primary btnnnnnn" onClick={props.handleClose}  >Close</button>
              <br /><br />
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

