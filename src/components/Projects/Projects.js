import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="CalDa Discord Bot"
              description="CalDa has an awesome list of social commands that let your members interact with each other in a more meaningful way and bring activity to your server.
              Host giveaways, create polls, self roles and announce!"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sussy Game"
              description="This game has sussy among us characters, with a sus background :D"
              ghLink="https://github.com/hypermoon01"
              demoLink="https://mistamoon.ga"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bird Animation"
              description="An Animation featuring a bird trying to fly for the first time. ANIMATION PARTNER - DYLAN MILES"
              ghLink="https://github.com/hypermoon01"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Pixel Art"
              description="A series of pixel arts done be me, and compiled into a collage!"
              ghLink="https://github.com/hypermoon01"
              
            />
          </Col>

          <Col md={4} className ="project-card">
            <ProjectCard
                 imgPath={leaf}
                 isBlog={false}
                 title="Short Game Development"
                 descriptoin="Short Game development using Wick Editor."
                 />
          </Col>
          <Col md={4} className ="project-card">
            <ProjectCard
                 imgPath={leaf}
                 isBlog={false}
                 title="Bird Animation [ADOBE ANIMATE]"
                 descriptoin="A small 8 second Bird Animation using Adobe Animate 2022, collaborated with Dylan Miles."
                 />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
