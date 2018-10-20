
import React from "react";
import { Link } from "react-router-dom";
import "./Box.css";

const Box = props => (


<div className={props.color}>
<div className="dash-box-icon">
  <i className={props.gyp}></i>
</div>
<div className="dash-box-body">
  <span className="dash-box-count">{props.title}</span>
  <span className="dash-box-title">{props.text}</span>
</div>
<img src={props.src} alt={props.alt} className="imgonbox"/>
<button className="myButt a1 three"><Link to={props.linkto}>{props.button}</Link></button>
</div>
);
export default Box;

