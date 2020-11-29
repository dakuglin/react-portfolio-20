import React, { Component } from "react";
import Background from "../components/Background/Background";
import Project from "../components/Project/Project";
import projects from "../projects.json";


class Portfolio extends Component {

    // Setting this.state.projects to the projects json array
    state = {
      projects
    };
    render() {
        return (
      
            <Background backgroundImage="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg">

                {this.state.projects.map(project => (
                <Project
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    github={project.github}
                    deployed={project.deployed}
                    image={project.image}
                 
                />
                ))}
                
            </Background>

        )
    }
}

export default Portfolio;