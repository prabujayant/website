import React from "react";
// import GitHubCalendar from "react-github-calendar"; // No longer needed if nothing is displayed
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {/* This component is kept for "name's sake" as requested,
        but it currently does not display any content.
        The GitHub calendar and related headings are commented out
        to prevent rendering.
      */}
      {/*
      <h1
        className="project-heading"
        style={{
          paddingBottom: "20px",
          color: "#d4af37", // Gold color
        }}
      >
        Days I <strong className="purple">Code</strong>
      </h1>

      <GitHubCalendar
        username="sitiannisadahlan"
        blockSize={15}
        blockMargin={5}
        color="#d4af37"
        fontSize={16}
      />
      */}
    </Row>
  );
}

export default Github;