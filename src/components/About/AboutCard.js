import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ikram Essajai</span> from{" "}
            <span className="purple">Casablanca, Morocco.</span>
            <br />
            I am currently pursuing a Master’s degree in Geographic Information Systems (GIS) at Faculté des Sciences Ain Chock, Casablanca.
            <br />
            I have a strong background in software development, artificial intelligence, and geospatial analysis.
            <br />
            <br />
            Apart from coding and GIS work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on AI and Machine Learning projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and learning about different cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about solving real-world challenges through technology and innovation!"{" "}
          </p>
          <footer className="blockquote-footer">Ikram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;