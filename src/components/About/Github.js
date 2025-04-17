import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="IKRAM-Essajai" // Replace with your GitHub username
        blockSize={15}
        blockMargin={5}
        color="#c084f5" // You can change this color to match your theme
        fontSize={16}
      />
    </Row>
  );
}

export default Github;