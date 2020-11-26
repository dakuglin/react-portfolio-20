import React from "react";
import Hero from "../components/Hero/Hero";
import Container from "../components/Container/Container";
import Col from "../components/Col/Col";
import Row from "../components/Row/Row";

const style = {
    p: {
        color: "#5D5C61",
        fontSize:"31px",
        fontFamily: 'Open Sans Condensed, sans-serif',   
    },
    span: {
        fontStyle: "italic",
    },
}

function AboutMe() {
    return(
        <div>
            <Hero backgroundImage="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg">
                <h1>Oh, hello.</h1>
                <h1>Nice to meet you.</h1>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12"></Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p style={style.p}> 
                        Please allow me introduce myself, my name is <span style={style.span}>Dana Ann Weijers.</span>
                        </p>
                        <br></br>
                        <p style={style.p}>
                            I am a full stack web developer with a background in chemical engineering. I recently graduated from Denver University with a certificate in full stack web development. I am confident my unique background and education will positively impact the web development industry. I absolutely love front end development because it allows me to express my creativity and animate my energetic personality! I hope you will take time to get to know me by exploring this site, and feel free to reach out with any questions or potential job opportunities. Thank you!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;