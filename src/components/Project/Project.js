import React from "react";
import "./project.css"
import { Container, Row, Col } from 'react-bootstrap';
import projects from "../../projects.json";


function Project(props) {

    let grid = [];

    projects.map(project => {

    })



    return (
        <>
        {/* <div className="container">
            <div className="row">
                <div className="card col-3">
                    <img className="card-img-top" src={props.image} alt={props.name}/> 
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-primary">github</a> 
                        <a href={props.deploy} target="_blank" rel="noreferrer" className="btn btn-primary">deploy</a>  
                    </div>
                </div>
                
            </div>
        </div> */}


        <Container>
            <Row>
                <Col className="card"> 
                <div className="card col-3">
                    <img className="card-img-top" src={projects[0].image} alt={props.name}/> 
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-primary">github</a> 
                        <a href={props.deploy} target="_blank" rel="noreferrer" className="btn btn-primary">deploy</a>  
                    </div>
                </div>

                </Col>
                <Col>
                <div className="card col-3">
                    <img className="card-img-top" src={projects[1].image} alt={props.name}/> 
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-primary">github</a> 
                        <a href={props.deploy} target="_blank" rel="noreferrer" className="btn btn-primary">deploy</a>  
                    </div>
                </div>
                
                </Col>
            </Row>
            <Row>
            <Col className="card"> 
                <div className="card col-3">
                    <img className="card-img-top" src={projects[0].image} alt={props.name}/> 
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-primary">github</a> 
                        <a href={props.deploy} target="_blank" rel="noreferrer" className="btn btn-primary">deploy</a>  
                    </div>
                </div>

                </Col>
                <Col>
                <div className="card col-3">
                    <img className="card-img-top" src={projects[1].image} alt={props.name}/> 
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-primary">github</a> 
                        <a href={props.deploy} target="_blank" rel="noreferrer" className="btn btn-primary">deploy</a>  
                    </div>
                </div>
                
                </Col>


            </Row>
        </Container>
        </>
    )
}

export default Project;
