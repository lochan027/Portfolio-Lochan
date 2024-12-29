import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAws } from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import { DiScrum, DiJava, DiReact } from "react-icons/di";
import "./Certificate.css"; // Import the CSS

function Certificate() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Cisco Certificate */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <a
            href="https://www.credly.com/badges/d4dbfd70-96e2-4af4-b6f5-cc5ca9772578"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCisco className="icon" />
          </a>
          <div className="hover-text">Cisco Endpoint Certificate</div>
        </div>
      </Col>

      {/* AWS Certificate */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <a
            href="https://www.credly.com/badges/b39ab5b7-3ad3-41b0-94b6-452171d63d37/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaAws className="icon" />
          </a>
          <div className="hover-text">AWS Cloud Practioner Certificate</div>
        </div>
      </Col>

      {/* Agile Certificate */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <a
            href="https://www.linkedin.com/learning/certificates/46db3a989cfa84bf6d2db89b3fd96af0d85c1ab8038c85fe6f00eeda37dda854?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9X%2FbcaC4QT68N4bx4Jlt2w%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiScrum className="icon" />
          </a>
          <div className="hover-text">Agile Foundation Certificate</div>
        </div>
      </Col>

      {/* HackerRank Certificate */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <a
            href="https://www.hackerrank.com/certificates/f87f8b83a9bd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiJava className="icon" />
          </a>
          <div className="hover-text">Java Certificate</div>
        </div>
      </Col>

      {/* React Certificate */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <a
            href="https://www.linkedin.com/learning/certificates/271d9c7a51d513f1ac9bd2fd971e81f7e41feda0c45c9ac95592b0bf779bb95c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9X%2FbcaC4QT68N4bx4Jlt2w%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiReact className="icon" />
          </a>
          <div className="hover-text">React.js Certificate</div>
        </div>
      </Col>
    </Row>
  );
}

export default Certificate;
