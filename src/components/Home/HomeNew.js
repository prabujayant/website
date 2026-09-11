import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaPalette, FaBook, FaTrophy, FaArrowRight, FaEnvelope } from "react-icons/fa";
import homeLogo from "../../Assets/annis.png";
import Particle from "../Particle";
import Type from "./Type";
import ProjectCard from "../Projects/ProjectCards";
import { PROJECTS_DATA, HOME_ACHIEVEMENTS, SOCIAL_LINKS } from "../../Constants";

function Home() {
  const featuredProjects = PROJECTS_DATA.slice(0, 2); // Show top 2 projects
  const mailLink = SOCIAL_LINKS.find((s) => s.id === "mail");

  return (
    <section className="home-section-container">
      <Particle />
      <Container className="home-content-wrapper">
        
        {/* 1. HERO SECTION */}
        <Row className="hero-row g-4">
          <Col md={7} xs={12} lg={7} className="hero-column">
            <div className="greeting-section">
              <p className="hero-greeting">
                Hi There! <span className="wave-emoji" role="img" aria-label="waving hand">👋</span>
              </p>
            </div>

            <div className="hero-name-section">
              <h1 className="hero-name-subtitle">
                <span className="hero-name-im">I'M</span>
                <strong className="hero-main-name">SITI ANNISA DAHLAN</strong>
              </h1>
              <div className="hero-decorative-line"></div>
            </div>

            <div className="hero-professional-tags">
              <span className="hero-tag"><FaGraduationCap /> HCI Researcher</span>
              <span className="hero-tag purple-tag"><FaPalette /> UI/UX Designer</span>
              <span className="hero-tag"><FaBook /> English Educator</span>
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
                  View My Work <FaArrowRight />
                </Button>
                <Button as={Link} to="/about" variant="outline-light" className="btn-primary">
                  About Me
                </Button>
              </div>
              <dl className="hero-stats">
                <div className="hero-stat">
                  <dt className="visually-hidden">Projects</dt>
                  <dd><strong>6+</strong><span>Projects shipped</span></dd>
                </div>
                <div className="hero-stat">
                  <dt className="visually-hidden">Publication</dt>
                  <dd><strong>1</strong><span>Journal publication</span></dd>
                </div>
                <div className="hero-stat">
                  <dt className="visually-hidden">Awards</dt>
                  <dd><strong>4</strong><span>Awards & honors</span></dd>
                </div>
              </dl>
            </div>
          </Col>

          <Col md={5} xs={12} lg={5} className="hero-avatar-col">
            <div className="avatar-wrapper">
              <div className="avatar-glow"></div>
              <div className="avatar-border"></div>
              <img src={homeLogo} alt="Illustrated portrait of Siti Annisa Dahlan" className="avatar-img" />
              <div className="hero-badge hero-badge-top">Published Researcher</div>
              <div className="hero-badge hero-badge-bottom">User-Centered Design</div>
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
                    description={project.excerpt || project.description.split('\n')[0]}
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
            <h2 className="section-title"><FaTrophy className="title-icon" aria-hidden="true" /> ACHIEVEMENTS & AWARDS</h2>
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

        {/* 5. CLOSING CTA */}
        <Row className="spacing-vertical-lg">
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <div className="glass-card home-cta text-center">
              <span className="section-eyebrow">Contact</span>
              <h2 className="home-cta-title">Have an idea? Let&apos;s build it <span>together</span>.</h2>
              <p className="text-body-primary">
                I&apos;m open to HCI research collaboration, UI/UX design work, and
                education-technology projects.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
                <Button as={Link} to="/resume" className="btn-gold">
                  View My Resume <FaArrowRight />
                </Button>
                {mailLink && (
                  <Button href={mailLink.url} className="btn-primary">
                    <FaEnvelope /> Get in Touch
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Home;