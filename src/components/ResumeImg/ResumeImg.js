import React from "react";
import myResume from "./resume.png";
import "./resume.css";


function ResumeImg() {
    return (
        <div className= "animate__heartBeat">
            <img src={myResume} className="img-fluid" alt="Dana Weijers Resume" />
        </div>
    )
}

export default ResumeImg;