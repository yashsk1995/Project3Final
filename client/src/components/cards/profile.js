import React from "react";
import "./name.css";
import PieChart from 'react-minimal-pie-chart';



const Usernames = props => (
    <div>

        <div className="mainname">  {/* main1 */}
            <div className="containername"> {/* container1 */}

                <img src={props.img} alt="Avatar" className="image1name" />   {/* image1 */}
                <h3>{props.usernames}</h3>
                <h4> {props.Gender} , {props.age} , {props.City} </h4>
                <h6>{props.percentage}%</h6>

                <h6>{props.About_me}</h6>
                <PieChart className="charting" data={[
                       { title: 'One', label: "100", value: props.percentage, color: '#921E05  ' },
                       { title: 'Two', label: "80", value: 100 - props.percentage, color: "#D2BFBA" },
                   ]}
                   />
                <div className="overlay1name">
                    <button className="btn1name" onClick={props.saveid}><i className="fa fa-save">&nbsp;Save</i></button>
                    <button id={props.id} className="btn11name" onClick={props.hiddenid}><i className="fa fa-trash">&nbsp;Remove</i></button>
                    <button className="btn21name" onClick={props.show}><i className="fa fa-ellipsis-h">&nbsp;View More</i></button>
                </div>
            </div>

        </div>
    </div>
)

export default Usernames;