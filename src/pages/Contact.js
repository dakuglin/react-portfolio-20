import React from "react";
import Background from "../components/Background/Background";
import Form from "../components/Form/Form";
//import Background from "../components/Background/Background";

// const style = {
//     h3: {
//         fontFamily: 'IM Fell English, serif',
//         fontSize: "50px",
//         textAlign: "center",
//         paddingTop: "150px",
//         color: "#5D5C61",
//         paddingBottom: "100px",
//     },
// }

function Contact() {
    return (
        <>
        
        
        <Background backgroundImage="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg" > 
            <h3 >Please contact me about any web development needs.</h3>
            <Form />
        </Background>
      
       
     
        </>
    )
}

export default Contact;