import React from "react";
import "./names.css";



const Profile = props => (
  <div>

    <div className="mainname">  {/* main1 */}
      <div className="containername"> {/* container1 */}

        <img src={props.img} alt="Avatar" className="image1name" />   {/* image1 */}
        <h3>{props.usernames}</h3>
        <h4> {props.Gender} , {props.age} , {props.City} </h4>

        <div className="overlay1name">
          <button id={props.id} className="btn11name" onClick={props.onClick}><i className="fa fa-trash">&nbsp;Delete</i></button>
        </div>
      </div>

    </div>
  </div>
)

export default Profile;


