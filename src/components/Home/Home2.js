import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ backgroundColor: "#000", color: "#fff", padding: "70px 0", fontFamily: "'Inter', sans-serif" }}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description" style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "3.5em", fontWeight: "800", color: "#d4af37", marginBottom: "30px" }}>
              LET ME <span style={{ color: "#d4af37" }}>INTRODUCE</span> MYSELF
            </h1>
            <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#e0e0e0", marginBottom: "40px" }}>
              I am driven by the passion to create innovative solutions that solve real-world challenges. My journey began with a deep interest in coding, which quickly transformed into a love for problem-solving using technology.
              <br />
              <br />
              Throughout my journey, I’ve honed my skills in Python, C/C++, JavaScript, and the MERN Stack, and I’ve taken on leadership roles in multiple hackathons and projects where I guided teams to success.
              <br />
              <br />
              I lead by example, always striving for excellence while collaborating to deliver impactful projects in areas like web development, machine learning, and cybersecurity. Building real-world applications using Node.js and React.js is where my passion truly lies, and I continue to explore new ways to innovate and challenge myself.
              <br />
              <br />
              My belief is simple: true leadership comes from the ability to inspire others and turn ideas into reality. I’m committed to learning, sharing knowledge, and pushing the limits of technology in every project I take on.
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: "50%",
                  border: "5px solid #d4af37",
                  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.6)",
                  width: "90%",
                  maxWidth: "350px",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Tilt>
          </Col>
        </Row>

        {/* Achievements Section */}
        <Container style={{ marginTop: "50px", backgroundColor: "#111", padding: "40px 0" }}>
          <h2 style={{ fontSize: "2.5em", color: "#d4af37", textAlign: "center", marginBottom: "30px" }}>
            ACHIEVEMENTS & AWARDS
          </h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            <div
              style={{
                backgroundColor: "#222",
                color: "white",
                borderRadius: "10px",
                margin: "10px",
                padding: "20px",
                width: "250px",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h4 style={{ fontSize: "1.3em", fontWeight: "bold", color: "#d4af37" }}>
                CODE RED'25 National Level Hackathon
              </h4>
              <p style={{ fontSize: "1em", marginTop: "10px" }}>
                Won the Consolidation Prize of INR 10,000 finishing 4th out of 1000+ teams nationally.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#222",
                color: "white",
                borderRadius: "10px",
                margin: "10px",
                padding: "20px",
                width: "250px",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h4 style={{ fontSize: "1.3em", fontWeight: "bold", color: "#d4af37" }}>
                ELCIA Next-Gen Innovative Tech Hackathon
              </h4>
              <p style={{ fontSize: "1em", marginTop: "10px" }}>
                Finished in the top 10 out of 500+ teams all over India and won INR 10,000.
              </p>
            </div>
          </div>
        </Container>

        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ fontSize: "2.5em", marginTop: "30px", color: "#d4af37" }}>FIND ME ON</h1>
            <p style={{ fontSize: "1.2em", marginBottom: "20px" }}>
              Feel free to <span style={{ color: "#d4af37" }}>connect</span> with me on these platforms:
            </p>
            <ul
              className="home-about-social-links"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "30px",
                padding: 0,
              }}
            >
              <li className="social-icons" style={{ margin: "0 15px" }}>
                <a
                  href="https://github.com/Prabu17"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#d4af37",
                    fontSize: "2.5em",
                    transition: "color 0.3s ease",
                  }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons" style={{ margin: "0 15px" }}>
                <a
                  href="https://www.linkedin.com/in/prabu-jayant-6b316b251/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#d4af37",
                    fontSize: "2.5em",
                    transition: "color 0.3s ease",
                  }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons" style={{ margin: "0 15px" }}>
                <a
                  href="https://www.instagram.com/prabujayant17/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#d4af37",
                    fontSize: "2.5em",
                    transition: "color 0.3s ease",
                  }}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
