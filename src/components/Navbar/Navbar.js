import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/aboutme"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              about me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              contact
            </Link>
          </li>
          {/* <li className="nav-item"> */}
            <Link className="navbar-brand" to="/">  
                  <h1>Dana Weijers</h1>
            </Link> 
          {/* </li> */}
          <li className="nav-item active">
              <a className="nav-link" href="https://www.linkedin.com/in/danakuglin" target="_blank">linkedin</a>
          </li>
          <li className="nav-item active">
              <a className="nav-link" href="https://github.com/dakuglin" target="_blank">github</a>
          </li>
          <li className="nav-item">
          <Link
            to="/resume"
            className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
          >
            resume
          </Link>
          </li>
        </ul>
      </div>
    </nav>
      
    )
};

export default Navbar;


 