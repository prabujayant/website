import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Resume_UIUX_Annis.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-section">
      <Container fluid>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="outline-warning"
            href={pdf}
            target="_blank"
            className="download-button"
          >
            <AiOutlineDownload />
            Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ paddingTop: "50px" }}>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "30px" }}>
          <Button
            variant="outline-warning"
            href={pdf}
            target="_blank"
            className="download-button"
          >
            <AiOutlineDownload />
            Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
