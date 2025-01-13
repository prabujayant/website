import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        backgroundColor: "#1d1d1d",
        borderColor: "#d4af37",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        maxWidth: "350px",
        margin: "20px",
      }}
    >
      {props.imgPath && (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            objectFit: "cover",
            height: "200px",
          }}
        />
      )}
      <Card.Body>
        <Card.Title
          style={{
            color: "#d4af37",
            fontWeight: "700",
            fontSize: "1.5em",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontSize: "1.1em",
            marginBottom: "20px",
            lineHeight: "1.5",
          }}
        >
          {props.description}
        </Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {props.ghLink && (
            <Button
              variant="outline-warning"
              href={props.ghLink}
              target="_blank"
              style={{
                color: "#d4af37",
                borderColor: "#d4af37",
                fontWeight: "bold",
                textTransform: "uppercase",
                padding: "10px 20px",
              }}
            >
              <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {props.demoLink && (
            <Button
              variant="outline-warning"
              href={props.demoLink}
              target="_blank"
              style={{
                color: "#d4af37",
                borderColor: "#d4af37",
                fontWeight: "bold",
                textTransform: "uppercase",
                padding: "10px 20px",
              }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}

          {props.viewLink && (
            <Button
              variant="outline-warning"
              href={props.viewLink}
              target="_blank"
              style={{
                color: "#d4af37",
                borderColor: "#d4af37",
                fontWeight: "bold",
                textTransform: "uppercase",
                padding: "10px 20px",
              }}
            >
              <FaEye /> &nbsp; View
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

export function Publications() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
        paddingBottom: "50px",
      }}
    >
      <ProjectCards
        title="Smart Health Monitoring and Anomaly Detection Using IoT and AI"
        description="ICoICI 2024. This paper focuses on leveraging IoT and AI for health monitoring and anomaly detection."
        demoLink="https://ieeexplore.ieee.org/document/10724486"
        viewLink="https://example.com/view/smart-health-monitoring"
      />
      <ProjectCards
        title="Intrusion Detection Using LSTM and Deep Learning"
        description="ICCCNT 2024. A deep learning approach for intrusion detection using LSTM models."
        demoLink="https://ieeexplore.ieee.org/document/10696283"
        viewLink="https://example.com/view/intrusion-detection"
      />
    </div>
  );
}
