import React from "react";
import Background from "../components/Background/Background";
import Form from "../components/Form/Form";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Picture from "../components/Picture/Picture";

const style = {
    h4: {
        color:"#5D5C61",
        paddingTop: "100px",
        fontFamily: 'IM Fell English, serif',
        fontSize: "55px",
    },
    contact: {
        color:"green",
        fontFamily: 'Open Sans Condensed, sans-serif',
        fontSize: "40px",
        fontWeight: "bold",
    },
    span1: {
        fontStyle: "italic",
        color: "#C38D9E",  
        fontFamily: 'Open Sans Condensed, sans-serif',
        fontSize: "40px",
        fontWeight: "bold",
        paddingBottom: "20px",
    },
 

}


function Contact() {
    return (
        <>
        
        <Background backgroundImage="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg" > 
            <h4 style={style.h4}>Please contact me about any web development needs.</h4>
            <h5> <span style={style.span1}>phone 970.237.9712  email dakuglin@gmail.com</span></h5>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <Row>
                    <Col size="md-6">
                        <Form />

                    </Col>
                    <Col size="md-6">
                        <Picture />
                        
                    </Col>
                  </Row>  
            </Container>
            
            
        </Background>
        </>
    )
}

export default Contact;