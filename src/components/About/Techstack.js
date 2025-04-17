import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiDatabase,
} from "react-icons/di";
import {
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiPhp,
  SiTypescript,
  SiJquery,
  SiDjango,
  SiBootstrap,
  SiWordpress,
  SiTensorflow,
  SiQgis,
  SiArcgis,
  SiGoogleearthengine,
} from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
      </Col>

      {/* Frameworks and Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>

      {/* GIS Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiQgis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArcgis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleearthengine />
      </Col>

      {/* AI and Big Data Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMapMarkerAlt /> {/* Placeholder for Geospatial Analysis */}
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;