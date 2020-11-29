import React from "react";
import "./project.css"

function Project(props) {
    return (
        <>
        <div style={{display: 'flex', flexDirection: 'row'}} className="container">
            <div className="row" style={{flex: 1}}>
                <div className="card col-3">
                    <img className="card-img-top" src={props.images} alt={props.name}/> 
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-primary">github</a> 
                        <a href={props.deploy} target="_blank" rel="noreferrer" className="btn btn-primary">deploy</a>  
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Project;
