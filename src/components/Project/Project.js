import React from "react";
import "./project.css"

function Project(props) {
    return (
        <>
    
        <div class="row">
            <div class="card  col-xs-12 col-md-4">
                {/* <img class="card-img-top" src="asset/images/dog friendly denver.JPG" alt="Dog Friendly Denver Homepage"/>  */}
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href={props.github} target="_blank" class="btn btn-primary">github</a> 
                    <a href={props.deploy} target="_blank" class="btn btn-primary">deploy</a>  
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Project;
