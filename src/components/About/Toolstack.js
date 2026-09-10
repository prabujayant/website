import React from "react";
import { Col, Row, Container } from "react-bootstrap";
// No specific react-icons for these general tools, so they will be listed as text.
// If specific icons are desired for popular tools, they would need to be imported here.

function Toolstack() {
  const toolBoxStyle = {
    backgroundColor: "#2e2e2e",
    borderRadius: "15px",
    padding: "25px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    border: "1px solid rgba(212, 175, 55, 0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    cursor: "default",
  };

  const onMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.6)";
  };

  const onMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
  };

  return (
    <Container style={{ paddingTop: "8px", textAlign: "center" }}>
      {/* Section title is rendered by About.js */}
      <Row className="g-4" style={{ justifyContent: "center", paddingBottom: "12px" }}>
        <Col xs={6} md={4} lg={2} className="tech-tool-item mb-4">
          <div style={toolBoxStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div style={{ color: "white", marginTop: "10px", fontSize: "1rem" }}>Figma</div>
          </div>
        </Col>
        <Col xs={6} md={4} lg={2} className="tech-tool-item mb-4">
          <div style={toolBoxStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div style={{ color: "white", marginTop: "10px", fontSize: "1rem" }}>Notion</div>
          </div>
        </Col>
        <Col xs={6} md={4} lg={2} className="tech-tool-item mb-4">
          <div style={toolBoxStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div style={{ color: "white", marginTop: "10px", fontSize: "1rem" }}>Slack</div>
          </div>
        </Col>
        <Col xs={6} md={4} lg={2} className="tech-tool-item mb-4">
          <div style={toolBoxStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div style={{ color: "white", marginTop: "10px", fontSize: "1rem" }}>Canva</div>
          </div>
        </Col>
        <Col xs={6} md={4} lg={2} className="tech-tool-item mb-4">
          <div style={toolBoxStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div style={{ color: "white", marginTop: "10px", fontSize: "1rem" }}>Google Workspace</div>
          </div>
        </Col>
        <Col xs={6} md={4} lg={2} className="tech-tool-item mb-4">
          <div style={toolBoxStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div style={{ color: "white", marginTop: "10px", fontSize: "1rem" }}>Adobe Photoshop</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Toolstack;