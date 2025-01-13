import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/prabur_resume.pdf";
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
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="outline-warning"
            href={pdf}
            target="_blank"
            style={{
              maxWidth: "250px",
              borderRadius: "25px",
              padding: "12px 20px",
              fontSize: "1.1em",
              fontWeight: "600",
              borderColor: "#d4af37",
              color: "#d4af37",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            className="download-button"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
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
            style={{
              maxWidth: "250px",
              borderRadius: "25px",
              padding: "12px 20px",
              fontSize: "1.1em",
              fontWeight: "600",
              borderColor: "#d4af37",
              color: "#d4af37",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            className="download-button"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
