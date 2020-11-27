import React from "react";
import "./picture.css";
import me from "./picture.png"

function Picture() {
    return (
        <div>
            <img src={me} alt="Dana Weijers" />
        </div>
    )
}

export default Picture;