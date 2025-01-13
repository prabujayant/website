import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ backgroundColor: "#2e2e2e", border: "none", borderRadius: "15px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ color: "white" }}>
          <p style={{ textAlign: "justify", color: "white" }}>
            Hi, I'm <span className="purple">Prabu Jayant</span> from{" "}
            <span className="purple">Bangalore, India.</span>
            <br />
            I’m pursuing a B.E. in Computer Science Engineering (Cybersecurity) at RV College of Engineering, with a focus on emerging technologies like Machine Learning, AI, and Cybersecurity.
            <br />
            I've contributed to impactful projects, such as:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Optimizing SaaS service operations as a Project Intern at Juniper Networks.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Building an Intrusion Detection System using LSTM models at SkySecure Ltd, achieving 92.83% accuracy.
              </li>
            </ul>
            <br />
            My key research interests include:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Applying Machine Learning & AI to solve real-world problems.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Developing innovative solutions for Cybersecurity challenges.
              </li>
            </ul>
            <br />
            Outside of academics, I enjoy:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Keeping up with the latest tech trends.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Sharing insights through technical blogs.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Traveling for diverse perspectives and inspiration.
              </li>
            </ul>

            <p style={{ color: "rgb(155, 126, 172)", fontStyle: "italic" }}>
              "Passionate about solving complex problems and driving innovation with technology!"
            </p>
            <footer className="blockquote-footer" style={{ color: "#d4af37" }}>
              Prabu Jayant
            </footer>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
