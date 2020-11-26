import React from "react";
import Form from "../components/Form/Form";

const style = {
    h3: {
        fontFamily: 'IM Fell English, serif',
        fontSize: "50px",
        textAlign: "center",
        paddingTop: "150px",
        color: "#5D5C61",
        paddingBottom: "100px",
    },
}

function Contact() {
    return (
        <>
        
        <h3 style={style.h3}>Please contact me about any web development needs.</h3>
        <Form />
     
        </>
    )
}

export default Contact;