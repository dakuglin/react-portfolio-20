import React from "react";
import "./background.css";

function Background(props) {
  return (
    <div className="background text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Background;