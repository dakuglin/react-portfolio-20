import React from "react";
import Hero from "../components/Hero/Hero";
// import Container from "../components/Container/Container"
// import Col from "../components/Col/Col";
// import Row from "../components/Row/Row";

function AboutMe() {
    return(
        <div>
            <Hero backgroundImage="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg">
                <h1>Oh, hello,</h1>
                <h1>Nice to meet you.</h1>
            </Hero>
        </div>
    )
}

export default AboutMe;