import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png"; // Replace this with your own profile picture
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am <b className="purple">Ikram Essajai</b>, a GIS Master’s student passionate about solving real-world challenges using technology.
              <br />
              <br />
              I specialize in:
              <i>
                <b className="purple"> GIS, Software Development, Artificial Intelligence, and Geospatial Analysis.</b>
              </i>
              <br />
              <br />
              My field of interest includes building innovative solutions such as:
              <i>
                <b className="purple"> Interactive Web Applications, AI-Driven Models, and GIS Tools.</b>
              </i>
              <br />
              <br />
              I enjoy working with technologies like:
              <i>
                <b className="purple"> Python, Django, JavaScript, QGIS, ArcGIS, TensorFlow, and Deep Learning Frameworks.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/IKRAM-Essajai"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ikram-essajai-b631751b6/" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;