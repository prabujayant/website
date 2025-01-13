import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiVercel } from "react-icons/si";
import { FaWindows } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows style={{ color: "#d4af37" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: "#d4af37" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: "#d4af37" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel style={{ color: "#d4af37" }} />
      </Col>
    </Row>
  );
}

export default Toolstack;
