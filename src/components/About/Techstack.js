import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAws,
  DiCss3,
  DiAngularSimple,
  DiMysql,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiKotlin,
  SiMicrosoftazure,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kotlin">
        <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Azure">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Angular">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
    </Row>
  );
}

export default Techstack;
