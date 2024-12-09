import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator1 from "../../Assets/Projects/Googlecalculator.png";
import calculator2 from "../../Assets/Projects/Googlecalculator (2).png";
import bitsOfCode from "../../Assets/Projects/repo.png";
import editor from "../../Assets/Projects/Adls.png";
import leaf from "../../Assets/Projects/bob.png";
import emotion from "../../Assets/Projects/palindrome.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          My Current  <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I am currently working on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="project-card">
    <ProjectCard
      title="Soil Testing and AI Prediction for Crop Yielding"
      description="A system that uses soil sensor data to analyze soil conditions and predict crop yield. It suggests the best crops based on soil and weather data."
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      title="Live Car Parking Application"
      description="An app that provides live updates on parking availability using sensors to detect occupied spots, saving users time in finding parking."
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      title="NSA (Nepalese Student Association Website)"
      description="A platform to connect with the Nepalese Student Association, offering event updates, resources, and community activities."
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      title="Autonomous Trash Bin System"
      description="A smart trash bin system that detects waste levels and sends alerts when bins are full, improving waste management efficiency."
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      title="Food Auto Shopping and AI Food Management App"
      description="An AI-powered app that streamlines grocery shopping and kitchen management, ensuring efficient food planning and reducing waste."
    />
  </Col>
</Row>

        
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Google Calculator Project with Carousel */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                <Carousel interval={3000} controls={false} indicators={false}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={calculator1}
                      alt="Calculator Screenshot 1"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={calculator2}
                      alt="Calculator Screenshot 2"
                    />
                  </Carousel.Item>
                </Carousel>
              }
              isBlog={false}
              title="Google Calculator"
              description="This project is a web-based scientific calculator designed to perform various mathematical operations. It has been inspired by Google Calculator. It includes a user interface with a display area for the input and output of calculations, as well as buttons for different operations and functions."
              ghLink="https://github.com/lochan027/GoogleCalculator"
              demoLink="https://lochan027.github.io/GoogleCalculator/"
            />
          </Col>

          {/* Other Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Palindrome Checker"
              description="A simple tool that verifies whether a given string or number is a palindrome, showcasing an intuitive interface and efficient logic."
              ghLink="https://github.com/lochan027/palindromecheck"
              demoLink="https://lochan027.github.io/palindromecheck/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ADLS Connection Code"
              description="A robust script to connect and interact with Azure Data Lake Storage (ADLS) for seamless data retrieval and management."
              ghLink="https://github.com/lochan027/ADLSConnection/blob/main/src/main/java/com/example/app/app/AppApplication.java"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Bob Marley Game"
              description="An engaging clicking game inspired by Bob Marley's life and music, designed have fun and experience interactive gameplay."
              demoLink="https://gd.games/games/c7def210-c766-4e2a-b757-0a276ccddbf5"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Personalized Repo"
              description="A beautifully crafted README to enhance your GitHub profile, showcasing projects, skills, and achievements in a visually appealing way."
              ghLink="https://github.com/lochan027/lochan027/blob/main/README.md?plain=1"
              demoLink="https://github.com/lochan027/lochan027"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
