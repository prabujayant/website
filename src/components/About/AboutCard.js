import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prabu Jayant </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science with a specialization in Cybersecurity from RVCE Bangalore (2022-2026)
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading non fiction books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I love to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Prabu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
