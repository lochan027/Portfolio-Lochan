import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Render imgPath as-is (it can be an image or React component like Carousel) */}
      <Card.Img
        variant="top"
        src={typeof props.imgPath === "string" ? props.imgPath : undefined}
      />
      {typeof props.imgPath !== "string" && props.imgPath}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>

        {/* Render GitHub Button only if ghLink is provided */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {"\n"}
        {"\n"}

        {/* Render Demo Button only if demoLink is provided */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
