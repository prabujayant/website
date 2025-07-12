import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ backgroundColor: "#2e2e2e", border: "none", borderRadius: "15px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ color: "white" }}>
          <p style={{ textAlign: "justify", color: "white" }}>
            Hi, I'm <span className="purple">Siti Annisa Dahlan</span> from{" "}
            <span className="purple">Kendari, Indonesia.</span>
            <br />
            I'm a motivated English Language Education student at Halu Oleo University, passionate about combining education and technology to enhance learning outcomes globally. I was also a PMM4 Student Exchange Awardee, funded by the Ministry of Education, Culture, Research, and Technology.
            <br />
            <br />
            Here are some highlights from my work and experiences:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Currently pursuing a Bachelor of English Language Education at Halu Oleo University (GPA: 3.35/4.0).
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> As a Digital Marketing Intern at GAO Tek Inc., I executed 4,000+ marketing emails and created B2B content, earning "Best Intern of the Week".
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> At Scholars Official, I developed Instagram campaigns for TOEFL/IELTS, engaging 5,000+ users and improving CTR by 20%.
              </li>
            </ul>
            <br />
            My projects showcase my blend of educational and digital skills:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Developed Think Ink Digital Reading Platform, an interactive website with exercises for junior high students.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Created a Collaborative Digital Book for English learning, focusing on speaking and listening skills.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Produced Educational Video Content and managed the Explore With Annis Blog documenting cultural exchange.
              </li>
            </ul>
            <br />
            I'm passionate about:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Creating engaging digital learning experiences.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Leveraging social media for effective communication and marketing.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Contributing to youth empowerment initiatives.
              </li>
            </ul>

            <p style={{ color: "rgb(155, 126, 172)", fontStyle: "italic" }}>
              "Committed to fostering engaging educational environments through digital innovation and effective communication!"
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