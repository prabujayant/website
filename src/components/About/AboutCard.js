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
            I'm pursuing a B.E. in Computer Science Engineering (Cybersecurity) at RV College of Engineering, with a strong focus on cutting-edge technologies like Machine Learning, Artificial Intelligence, and Cybersecurity.
            <br />
            <br />
            I've developed impactful projects and research contributions:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <strong>DefenSys:</strong> Built a comprehensive cyber defense platform with 95%+ malware classification accuracy using Docker, TensorFlow, and ResNet.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <strong>Terra:</strong> Developed an AI-powered carbon footprint companion using Llama 3.2, Flask, and Firebase with OCR-based eco-shopping features.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <strong>MediSync:</strong> Created a smart health monitoring system utilizing ML, TensorFlow, and IoT for anomaly detection.
              </li>
            </ul>
            <br />
            My research work has been published in prestigious IEEE conferences:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <strong>ICWIHI 2025:</strong> Adaptive ML Framework for SaaS Traffic Classification in Cloud Ecosystem.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <strong>ICoICI 2024:</strong> Smart Health Monitoring and Anomaly Detection Using IoT and AI.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <strong>ICCCNT 2024:</strong> Intrusion Detection Using LSTM and Deep Learning.
              </li>
            </ul>
            <br />
            My technical expertise spans:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <strong>Machine Learning & AI:</strong> TensorFlow, PyTorch, LSTM, ResNet, CNNs, and RAG systems.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <strong>Full-Stack Development:</strong> MERN Stack, React, Flask, Firebase, and RESTful APIs.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <strong>Cybersecurity:</strong> Malware detection, intrusion detection systems, and network security.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> <strong>Cloud & DevOps:</strong> Docker, containerization, and cloud ecosystem optimization.
              </li>
            </ul>
            <br />
            Beyond academics, I'm passionate about:
            <ul>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Exploring emerging technologies in AI and cybersecurity.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Contributing to open-source projects and research communities.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Writing technical articles and sharing knowledge through blogs.
              </li>
              <li style={{ color: "#d4af37" }}>
                <ImPointRight /> Attending tech conferences and networking with industry professionals.
              </li>
            </ul>

            <p style={{ color: "rgb(155, 126, 172)", fontStyle: "italic" }}>
              "Driven by curiosity and committed to leveraging technology for meaningful impact in cybersecurity and AI!"
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