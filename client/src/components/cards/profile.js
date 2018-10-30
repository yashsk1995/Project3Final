import React from "react";
import "./name.css";
import PieChart from 'react-minimal-pie-chart';
import { Col, Row, Container } from "../../components/Grid";



const Usernames = props => (
    <div>

        <div className="mainname">  {/* main1 */}
            <div className="containername"> {/* container1 */}
                  <Container fluid>
                  <Row>
                  <Col size="md-2"></Col>    
                  <Col size="md-8">
                <img src={props.img} alt="Avatar" className="image1name" />  
               <br />
                </Col>  
                <Col size="md-2">
                </Col> 
                </Row>
                <Row>  
                <Col size="md-2"></Col> 

                <Col size="md-8">   
                <h3 className="font"><b>{props.usernames}</b></h3>
                <h5 className="font">{props.Gender} , {props.age} , {props.City} </h5>
                </Col> 
                <Col size="md-2"></Col> 
                </Row>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8">
                    <br />
                <h4 className="font">{props.percentage}% Match</h4>
                </Col>
                <Col size="md-2"></Col>
                </Row>
               
                <div className="overlay1name">
                <Container fluid>
                  <Row>
                  <Col size="md-3"></Col>    
                  <Col size="md-7">
                  <br></br>
                  <br></br>
                  
                  <button className="btn1name" onClick={props.saveid}><i className="fa fa-save">&nbsp;Save</i></button>
                </Col>
                <Col size="md-2">
                </Col> 
                </Row>
                <Row>
                  <Col size="md-3"></Col>    
                  <Col size="md-7">
                  <br></br>
                  <br></br>
                  <button id={props.id} className="btn11name" onClick={props.hiddenid}><i className="fa fa-trash">&nbsp;Remove</i></button>
                </Col>
                <Col size="md-2">
                </Col> 
                </Row>
                <Row>
                  <Col size="md-3"></Col>    
                  <Col size="md-7">
                  <br></br>
                  <br></br>
                  <button className="btn21name" onClick={props.show}><i className="fa fa-ellipsis-h">&nbsp;View More</i></button>
                </Col>
                <Col size="md-2">
                </Col> 
                </Row>
                
                </Container>
                    
                </div>
               
                </Container>
            </div>
          
        </div>
    </div>
)

export default Usernames;