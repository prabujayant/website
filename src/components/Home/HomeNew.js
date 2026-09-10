import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/annis.png";
import Particle from "../Particle";
import Type from "./Type";
import ProjectCard from "../Projects/ProjectCards";
import { PROJECTS_DATA, HOME_ACHIEVEMENTS } from "../../Constants";

function Home() {
  const featuredProjects = PROJECTS_DATA.slice(0, 2); // Show top 2 projects

  return (
    <section className="home-section-container">
      <Particle />
      <Container className="home-content-wrapper">
        
        {/* 1. HERO SECTION */}
        <Row className="hero-row g-4">
          <Col md={7} xs={12} lg={7} className="hero-column">
            <div className="greeting-section">
              <h1 className="hero-greeting">
                Hi There! <span className="wave-emoji" role="img" aria-label="wave">👋</span>
              </h1>
            </div>

            <div className="hero-name-section">
              <h1 className="hero-name-subtitle">
                <span className="hero-name-im">I'M</span>
                <strong className="hero-main-name">SITI ANNISA DAHLAN</strong>
              </h1>
              <div className="hero-decorative-line"></div>
            </div>

            <div className="hero-professional-tags">
              <span className="hero-tag">🎓 HCI Researcher</span>
              <span className="hero-tag purple-tag">🎨 UI/UX Designer</span>
              <span className="hero-tag">📖 English Educator</span>
            </div>

            <div className="typewriter-container">
              <div className="typewriter-box">
                <Type />
              </div>
            </div>

            <div className="hero-mission-statement">
              <p className="hero-mission-text">
                Driven by the passion to merge <span className="text-gold">education</span>,
                <span className="text-gold"> technology</span>, and
                <span className="text-gold"> user-centered design</span> to empower communities.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button as={Link} to="/project" className="btn-gold">
                  View My Work
                </Button>
                <Button as={Link} to="/about" variant="outline-light" className="btn-primary">
                  About Me
                </Button>
              </div>
            </div>
          </Col>

          <Col md={5} xs={12} lg={5} className="hero-avatar-col">
            <div className="avatar-wrapper">
              <div className="avatar-glow"></div>
              <div className="avatar-border"></div>
              <img src={homeLogo} alt="Siti Annisa Dahlan" className="avatar-img" />
            </div>
          </Col>
        </Row>

        {/* 2. INTRODUCTION SECTION */}
        <Row className="spacing-vertical-lg">
          <Col xs={12} className="intro-text-section visible text-center">
            <span className="section-eyebrow">Introduction</span>
            <h2 className="section-title">
              LET ME <span>INTRODUCE</span> MYSELF
            </h2>
            <div className="glass-card">
              <p className="text-body-primary">
                I am an <span className="text-gold">Aspiring HCI/UI/UX Researcher and Designer</span> with hands-on experience in user research, wireframing, and user-centered design. I'm passionate about synthesizing insights and translating findings into actionable design solutions.
                <br /><br />
                My journey bridges the gap between English pedagogy and specialized expertise in HCI research. I lead with intention, always striving to make digital experiences more accessible through <span className="text-gold">user-centered principles and creative innovation</span>.
              </p>
            </div>
          </Col>
        </Row>

        {/* 3. FEATURED PROJECTS (New Addition for UX Flow) */}
        <Row className="spacing-vertical-lg">
          <Col xs={12} className="text-center">
            <span className="section-eyebrow">Selected work</span>
            <h2 className="section-title">
              FEATURED <span>CASE STUDIES</span>
            </h2>
            <Row className="projects-row g-4">
              {featuredProjects.map((project) => (
                <Col md={6} xs={12} lg={6} className="d-flex justify-content-center" key={project.id}>
                  <ProjectCard
                    isBlog={project.isBlog || false}
                    title={project.title}
                    description={project.description.split('\n')[0]} // Show brief excerpt
                    imgPath={project.imgPath}
                    demoLink={`/project/${project.id}`} // Route to internal Case Study
                    customButtonText="Read Case Study"
                  />
                </Col>
              ))}
            </Row>
            <div className="text-center mt-4">
               <Button as={Link} to="/project" className="btn-primary">View All Projects</Button>
            </div>
          </Col>
        </Row>

        {/* 4. ACHIEVEMENTS CAROUSEL */}
        <Row className="spacing-vertical-lg">
          <Col xs={12} className="text-center">
            <span className="section-eyebrow">Recognition</span>
            <h2 className="section-title">🏆 ACHIEVEMENTS & AWARDS</h2>
            <div className="achievements-carousel">
              {HOME_ACHIEVEMENTS.map((achievement, index) => (
                <div key={index} className="achievement-card" style={{ background: achievement.gradient }}>
                  <h4 className="achievement-card-title text-white">{achievement.title}</h4>
                  <p className="achievement-card-description">{achievement.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Home;