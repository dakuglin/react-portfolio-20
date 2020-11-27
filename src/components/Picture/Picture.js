import React from "react";
import me from "./picture.png";
import "./picture.css";


function Picture() {
    return (
        <div>
            <img id="me" src={me} alt="Dana Weijers" />
        </div>
    )
}

export default Picture;