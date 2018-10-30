import React from "react";
import "./names.css";




const Profile = props => (
  <div>

    <div className="mainname12314">  {/* main1 */}
      <div className="containernameyikmn"> {/* container1 */}
        <img src={props.img} alt="Avatar" className="image1name31234asd4" />
           {/* image1 */}
        <h3 className="ygkubhjnkm">Name : {props.usernames}</h3>
        <h4> {props.Gender} , {props.age} , {props.City} </h4>
        <h4>{props.email}</h4>

          <button id={props.id} className="btn11name" onClick={props.onClick}><i className="fa fa-trash">&nbsp;Delete</i></button>
      </div>

    </div>
    <br />
    <br />
        
  </div>
)

export default Profile;


