// import React,{ useState }from "react";
// import { Document, Page } from "react-pdf";
// import PDF from "./resume.js"


// function Resume() {
    // const [numPages, setNumPages] = useState(null);
   

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }

    // const { PDF } = props;

    import React, { useState } from 'react';
    import { Document, Page } from 'react-pdf';
    import Background from "../components/Background/Background";
     
    function Resume() {
      const [numPages, setNumPages] = useState(1);
      const [pageNumber, setPageNumber] = useState(1);
     
      function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
     
      return (
        <>
        <Background backgroundImage="https://images.unsplash.com/photo-1507646871303-331b8f659227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80.jpg">
        <div>
             <p>is this working</p>
          <Document
            file="../resume.pdf"
            options={{ workerSrc: "/pdf.worker.js" }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
           
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
        </Background>
        </>
      );
    }
     

// }

export default Resume;