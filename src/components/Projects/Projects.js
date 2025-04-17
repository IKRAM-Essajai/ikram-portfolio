import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import film from "../../Assets/Projects/4.JPG";
import edu from "../../Assets/Projects/1.jpg";
import suicide from "../../Assets/Projects/5.png";
import Circuit from "../../Assets/Projects/3.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
           imgPath={Circuit}
           isBlog={false}
           title="Interactive Tourist Circuit Web Application"
            description="Created an application using Django and Leaflet.js to display interactive tourist circuits with maps, photos, and itineraries."
    
           ghLink="https://github.com/IKRAM-Essajai/Tourist-Circuit" // Replace with your GitHub repository link
    
          />
        </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edu}
              isBlog={false}
              title= "project management"
              description= "Development of a web application for project management that allows for the creation, tracking, and assignment of tasks to team members. The application includes an interactive dashboard, user management, and a notification system. Technical environment: PHP, Laravel, MySQL, HTML, CSS, JavaScript."
              ghLink= "https://github.com/IKRAM-Essajai/project-management.git"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={film}
              isBlog={false}
              title="Stock Management"
              description="Development of a web application for inventory management that facilitates the addition, updating, and real-time tracking of stock. The application provides features for alerts in case of critical stock levels and the generation of detailed reports. Technical environment: PHP, CSS, JavaScript, MySQL."
              ghLink="https://github.com/IKRAM-Essajai/stock-management-"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Development of a deep learning model based on YOLOv8 for the early detection of palm tree diseases using aerial images captured by drones. Tools: YOLOv8, Python, OpenCV, TensorFlow"
              ghLink="https://github.com/IKRAM-Essajai"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="GIS"
              description ="Design and development of a QGIS plugin in Python to automate the processing and analysis of geospatial data to facilitate decision-making. Tools: Python, QGIS, PyQt5, PostgreSQL"
              ghLink="https://github.com/IKRAM-Essajai"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="The repo contains an audio emotion detection model, facial emotion detection model, and a model that combines both these models to predict emotions from a video."
              ghLink="https://github.com/IKRAM-Essajai"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
