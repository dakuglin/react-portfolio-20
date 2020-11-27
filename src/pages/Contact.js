import React from "react";
import Background from "../components/Background/Background";
import Form from "../components/Form/Form";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
// import me from "../picture.png";
import Picture from "../components/Picture/Picture"
function Contact() {
    return (
        <>
        
        <Background backgroundImage="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg" > 
            <h3 >Please contact me about any web development needs.</h3>
            <Container>
                <Row>
                    <Col size="sm-6">
                        <Form />

                    </Col>
                    <Col size="sm-6">
                        <Picture />
                    </Col>
                  </Row>  
            </Container>
            
        </Background>
        </>
    )
}

export default Contact;