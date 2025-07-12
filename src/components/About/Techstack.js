import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  MdLanguage
} from "react-icons/md";
import {
  IoLogoInstagram, IoLogoTiktok, IoLogoTwitter, IoLogoYoutube
} from "react-icons/io5";

function Techstack() {
  const boxStyle = {
    background: "linear-gradient(135deg, rgba(29, 29, 29, 0.9) 0%, rgba(45, 45, 60, 0.9) 100%)", // Subtle gradient background
    borderRadius: "15px",
    padding: "30px 25px", // Increased padding for more space
    boxShadow: "0 8px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(212, 175, 55, 0.2)", // Enhanced shadow
    transition: "all 0.3s ease-in-out", // Smooth transition for all properties
    border: "1px solid rgba(212, 175, 55, 0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // Ensure consistent height for boxes in a row
    cursor: "default", // Informational display, not interactive
  };

  const hoverEffect = {
    onMouseEnter: (e) => {
      e.currentTarget.style.transform = "translateY(-10px) scale(1.02)"; // Lift and slight scale
      e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.7), 0 0 25px rgba(199, 112, 240, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)"; // More pronounced shadow with purple/gold glow
      e.currentTarget.style.background = "linear-gradient(135deg, rgba(45, 45, 60, 0.95) 0%, rgba(29, 29, 29, 0.95) 100%)"; // Subtle background change on hover
      // Change color of text/icons inside on hover for social media icons
      const icons = e.currentTarget.querySelectorAll('svg');
      icons.forEach(icon => icon.style.color = "#c770f0"); // Purple on hover
      const textDivs = e.currentTarget.querySelectorAll('div');
      textDivs.forEach(div => div.style.color = "#c770f0"); // Purple on hover for text
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(212, 175, 55, 0.2)";
      e.currentTarget.style.background = "linear-gradient(135deg, rgba(29, 29, 29, 0.9) 0%, rgba(45, 45, 60, 0.9) 100%)";
      // Revert color of text/icons inside on leave for social media icons
      const icons = e.currentTarget.querySelectorAll('svg');
      icons.forEach(icon => icon.style.color = "#d4af37"); // Gold on leave
      const textDivs = e.currentTarget.querySelectorAll('div');
      textDivs.forEach(div => div.style.color = "white"); // White on leave for text
    }
  };

  return (
    <Container style={{ paddingTop: "80px", paddingBottom: "80px", textAlign: "center" }}>
      <h2 style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "60px", fontSize: "2.8rem", textShadow: "0 0 15px rgba(255, 215, 0, 0.3)" }}>
        My Professional <strong style={{ color: "#c770f0" }}>Skillset</strong>
      </h2>

      {/* Core Competencies Section */}
      <h3 style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "30px", fontSize: "2rem" }}>
        Core Competencies
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px", gap: "30px" }}> {/* Increased gap */}
        <Col xs={12} md={5} lg={3} className="tech-skills-item mb-4">
          <div style={boxStyle} {...hoverEffect}>
            <p style={{ color: "white", fontSize: "1.15rem", marginBottom: "0" }}>
              <MdLanguage style={{ color: "#d4af37", marginRight: "10px", fontSize: "1.8rem", verticalAlign: "middle" }} /> {/* Larger icon */}
              <strong style={{ color: "#d4af37" }}>Languages:</strong> Bahasa Indonesia, English
            </p>
          </div>
        </Col>
        <Col xs={12} md={5} lg={3} className="tech-skills-item mb-4">
          <div style={boxStyle} {...hoverEffect}>
            <p style={{ color: "white", fontSize: "1.15rem", marginBottom: "0" }}>
              <strong style={{ color: "#d4af37" }}>Soft Skills:</strong> Communication, Collaboration, Public Speaking, Time Management
            </p>
          </div>
        </Col>
        <Col xs={12} md={5} lg={3} className="tech-skills-item mb-4">
          <div style={boxStyle} {...hoverEffect}>
            <p style={{ color: "white", fontSize: "1.15rem", marginBottom: "0" }}>
              <strong style={{ color: "#d4af37" }}>Marketing & Analytics:</strong> SEO (basic), Google Analytics (basic), Social Media Strategy
            </p>
          </div>
        </Col>
      </Row>

      {/* Digital Tools Section */}
      <h3 style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "30px", fontSize: "2rem" }}>
        Digital Tools
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px", gap: "30px" }}> {/* Reduced paddingBottom */}
        <Col xs={12} md={5} lg={4} className="tech-skills-item mb-4">
          <div style={boxStyle} {...hoverEffect}>
            <p style={{ color: "white", fontSize: "1.15rem", marginBottom: "0" }}>
              Canva, CapCut, Adobe Photoshop
            </p>
          </div>
        </Col>
        <Col xs={12} md={5} lg={4} className="tech-skills-item mb-4">
          <div style={boxStyle} {...hoverEffect}>
            <p style={{ color: "white", fontSize: "1.15rem", marginBottom: "0" }}>
              Microsoft Word, Excel, Google Docs
            </p>
          </div>
        </Col>
      </Row>

      {/* Social Media Platforms Section */}
      <h3 style={{ color: "#d4af37", fontWeight: "bold", marginBottom: "15px", fontSize: "2rem" }}> {/* Reduced marginBottom */}
        Social Media Platforms
      </h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px", gap: "30px" }}> {/* Increased gap */}
        <Col xs={6} md={3} lg={2} className="tech-icons mb-4">
          <div style={{ ...boxStyle, cursor: "pointer" }} {...hoverEffect}>
            <IoLogoInstagram style={{ color: "#d4af37", fontSize: "3.5rem" }} /> {/* Larger icon */}
            <div style={{ color: "white", marginTop: "10px", fontSize: "1.1rem" }}>Instagram</div> {/* Larger text */}
          </div>
        </Col>
        <Col xs={6} md={3} lg={2} className="tech-icons mb-4">
          <div style={{ ...boxStyle, cursor: "pointer" }} {...hoverEffect}>
            <IoLogoTiktok style={{ color: "#d4af37", fontSize: "3.5rem" }} />
            <div style={{ color: "white", marginTop: "10px", fontSize: "1.1rem" }}>TikTok</div>
          </div>
        </Col>
        <Col xs={6} md={3} lg={2} className="tech-icons mb-4">
          <div style={{ ...boxStyle, cursor: "pointer" }} {...hoverEffect}>
            <IoLogoTwitter style={{ color: "#d4af37", fontSize: "3.5rem" }} />
            <div style={{ color: "white", marginTop: "10px", fontSize: "1.1rem" }}>Twitter</div>
          </div>
        </Col>
        <Col xs={6} md={3} lg={2} className="tech-icons mb-4">
          <div style={{ ...boxStyle, cursor: "pointer" }} {...hoverEffect}>
            <IoLogoYoutube style={{ color: "#d4af37", fontSize: "3.5rem" }} />
            <div style={{ color: "white", marginTop: "10px", fontSize: "1.1rem" }}>YouTube</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;