import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ backgroundColor: "#2e2e2e", border: "none", borderRadius: "15px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ color: "white" }}>
          <p style={{ textAlign: "justify", color: "white" }}>
            Hi, I'm <span className="purple">Siti Annisa Dahlan, B.Ed</span> from{" "}
            <span className="purple">Kendari, Indonesia.</span>
            <br />
            I am an <span className="purple">Aspiring HCI/UI/UX Researcher and Designer</span> with hands-on experience in user research, wireframing, and user-centered design. I'm passionate about synthesizing insights and translating findings into actionable design solutions.
            <br />
            <br />
            Education & Academic Highlights:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Pursuing a Bachelor of Education in English Language at Halu Oleo University (GPA: 3.50/4.0).
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> PMM4 National Student Exchange Awardee — $1,017 scholarship (Top 15,000 of 50,000+ applicants).
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Published Researcher: "The Use of AI in EFL Learning" — IJOPATE Vol. 4, Issue 1.
              </li>
            </ul>
            <br />
            Core Focus Areas:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <span className="purple">UX Research:</span> User Interviews, Qualitative Analysis, Usability Testing.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <span className="purple">UI/UX Design:</span> Wireframing, Prototyping, Information Architecture.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <span className="purple">Educational Tech:</span> Building responsive web platforms and gamified learning.
              </li>
            </ul>
            <br />
            <p style={{ color: "rgb(155, 126, 172)", fontStyle: "italic" }}>
              "Bridging the gap between education and technology through user-centered digital innovation!"
            </p>
            <footer className="blockquote-footer" style={{ color: "#d4af37" }}>
              Siti Annisa Dahlan
            </footer>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;