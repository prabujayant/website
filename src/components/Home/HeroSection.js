import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/annis.png";
import Type from "./Type";

function HeroSection() {
  return (
    <section className="hero-section-container">
      {/* Animated background elements */}
      <div className="animated-bg-element small"></div>
      <div className="animated-bg-element large"></div>

      <Container className="hero-content-wrapper">
        <Row className="hero-row">
          <Col md={7} className="hero-column">
            {/* Greeting Section */}
            <div className="greeting-section">
              <h1 className="hero-greeting">
                Hi There!{" "}
                <span 
                  className="wave-emoji" 
                  role="img" 
                  aria-label="waving hand"
                >
                  👋
                </span>
              </h1>
            </div>

            {/* Name Section */}
            <div className="hero-name-section">
              <h1 className="hero-name-subtitle">
                <span className="hero-name-im">I'M</span>
                <br />
                <strong className="hero-main-name">SITI ANNISA DAHLAN</strong>
              </h1>
              
              <div className="hero-decorative-line"></div>
            </div>

            {/* Professional Tags */}
            <div className="hero-professional-tags">
              <div className="hero-tags">
                <span className="hero-tag">🎓 HCI Researcher</span>
                <span className="hero-tag purple-tag">🎨 UI/UX Designer</span>
                <span className="hero-tag">📖 English Educator</span>
              </div>
            </div>

            {/* Typing Animation Section */}
            <div className="typewriter-container">
              <div className="typewriter-box">
                <Type />
              </div>
            </div>

            {/* Mission Statement */}
            <div className="hero-mission-statement">
              <p className="hero-mission-text">
                Driven by the passion to merge <span className="text-gold">education</span>, 
                <span className="text-gold"> technology</span>, and 
                <span className="text-gold"> user-centered design</span> to empower communities through digital innovation.
              </p>
              
              <p className="hero-mission-text-secondary">
                My journey bridges the gap between English pedagogy and specialized expertise in HCI research and UI/UX prototyping.
              </p>
            </div>
          </Col>

          <Col md={5} className="hero-avatar-col">
            <div className="avatar-wrapper">
              <div className="avatar-glow"></div>
              <div className="avatar-border"></div>

              <img
                src={homeLogo}
                alt="Siti Annisa Dahlan - HCI Researcher and UI/UX Designer"
                className="img-fluid avatar-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
