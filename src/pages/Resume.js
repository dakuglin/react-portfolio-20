import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
import Background from "../components/Background/Background";
import ResumeImg from "../components/ResumeImg/ResumeImg";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";


  
function Resume() {
  
  return (
    <>
    <Background backgroundImage="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg">

      <Container>
        <Row>
          <Col size="md-12">
            <div>
              <ResumeImg />
            </div>
          </Col>   
        </Row>  
      </Container>
    </Background>
    </>
  );
}
  



export default Resume;



// const [numPages, setNumPages] = useState(1);
  // const [pageNumber, setPageNumber] = useState(1);
  
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }


    {/* <div>
          <p>is this working</p>
      <Document
        file="../resume.pdf"
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
        
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div> */}