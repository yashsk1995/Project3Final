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
                </Col>
                
                <Col size="md-2"></Col> 
                </Row><br></br>
                <Row>  
                <Col size="md-1"></Col> 
                    <Col size="md-10">   
                <p className="font"><b>{props.usernames}</b>,{props.Gender} , {props.age} , {props.City} </p>
                </Col> 
                <Col size="md-1"></Col> 
                </Row>
                <Row>
                    <Col size="md-3"></Col>
                    <Col size="md-5">
                <h6>Match {props.percentage}%</h6>
                </Col>
                <Col size="md-4"></Col>
                </Row>
               
                <div className="overlay1name">
                    <button className="btn1name" onClick={props.saveid}><i className="fa fa-save">&nbsp;Save</i></button>
                    <button id={props.id} className="btn11name" onClick={props.hiddenid}><i className="fa fa-trash">&nbsp;Remove</i></button>
                    <button className="btn21name" onClick={props.show}><i className="fa fa-ellipsis-h">&nbsp;View More</i></button>
                </div>
               
                </Container>
            </div>
          
        </div>
    </div>
)

export default Usernames;