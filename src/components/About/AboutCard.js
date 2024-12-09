import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Lochan Acharya </span>
            who is currently a student at <a href="https://ulm.edu"><span className="purple"> ULM</span></a> . 
            
             I am currently doing my Bachelor's degree in Computer Science.
            <br />
            
            
            <br />
            These are the details you probably don't know about me.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> "Food: I love everything that tastes good, most likely spicy foods. I'm not much of a fan of chocolate, cake, or anything with sugar."
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> "Movies: I love watching sci-fi movies, but I dislike romantic movies because I know they usually have only two endings: one happy and one sad."
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> "Country: I am from Nepal (also known for Mt. Everest, the tallest mountain in the world). But no, I haven't climbed Mt. Everest."
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> "Clubs or Organization: I am part of the Google Developer Student Club and the Nepalese Student Association, serving as a Board Member for both. Additionally, I am a member of the ACM (Association for Computing Machinery), all within the University."
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> "Favorite Hobbies: I enjoy watching movies or series, which occupy most of my time. However, I often find myself staying awake at night, immersed in coding and exploring new concepts, especially when I don't have to wake up early the next day. As a result, I am mostly active during the night. I particularly enjoy debugging, as it provides me with a thrill when I identify and fix errors."
            </li>
          </ul>
          <blockquote className="quote">
        "Pursue excellence, and success will follow." 
        <br /> 
      </blockquote>


          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
