import React from "react";
import "./project.css"
// import { Container, Row, Col } from 'react-bootstrap';
// import projects from "../../projects.json";


function Project(props) {

    return (
       
        // <Container>
        //     <Row>
        //         <Col>
                <div className="container card">
                    <div className="img-container">
                        <img src={props.image} alt={props.name} className="card-image-top"/> 
                    </div>
                    <div className="card-body content" >
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <div className="card-body">
                            <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-primary">github</a> 
                            <a href={props.deployed} target="_blank" rel="noreferrer" className="btn btn-primary">deploy</a>
                            <p>{props.footer}</p>
                        </div>  
                    </div>
                    </div>
        //         </Col>
        //     </Row>
        // </Container>
    )
}

export default Project;

