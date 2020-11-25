import React from "react";
import "../styles/navbar.css";

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">about me </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">resume</a>
                    </li>
                </ul>
           
                <div className="name"> 
                    <h1>dana weijers</h1>
                </div>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://www.linkedin.com/in/danakuglin" target="_blank">linkedin</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="https://github.com/dakuglin" target="_blank">github</a>
                        </li>
                    </ul> 
                </div> 
            </div>
        </nav>
        </>
    )
};

export default Navbar;


 