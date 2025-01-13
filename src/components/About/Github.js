import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1
        className="project-heading"
        style={{
          paddingBottom: "20px",
          color: "#d4af37", // Gold color
        }}
      >
        {/* Days I <strong className="purple">Code</strong> */}
      </h1>

      {/* GitHub Calendar Component */}
      <GitHubCalendar
        username="prabujayant"
        blockSize={15}
        blockMargin={5}
        color="#d4af37" // Gold color for the calendar blocks
        fontSize={16}
      />

      {/* Calendar Heatmap */}
      <CalendarHeatmap
        startDate={new Date("2020-01-01")}
        endDate={new Date("2023-01-01")}
        values={[
          // Sample values (you can add your own data here)
          { date: "2022-05-01", count: 10 },
          { date: "2022-06-15", count: 20 },
          { date: "2022-08-10", count: 30 },
          // Add more values as needed
        ]}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${Math.min(value.count, 4)}`;
        }}
      />
    </Row>
  );
}

export default Github;
