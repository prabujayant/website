import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scale = width > 992 ? 1.5 : width > 768 ? 1.2 : width > 576 ? 0.9 : 0.6;

  return (
    <div className="resume-section">
      <Container fluid>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col xs={12} className="text-center">
            <p className="section-eyebrow" style={{ display: "inline-block" }}>Resume</p>
            <h1 className="project-heading">My Experience</h1>
            <Button
              variant="outline-warning"
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="download-button mt-3"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        <Row className="resume justify-content-center" style={{ paddingTop: "24px" }}>
          <Col xs={12} className="d-flex justify-content-center">
            <div className="resume-page">
              <Document file={pdf} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={scale} />
              </Document>
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "20px" }}>
          <Col xs={12} className="text-center">
            <Button
              variant="outline-warning"
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="download-button"
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
