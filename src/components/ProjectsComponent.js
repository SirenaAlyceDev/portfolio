import React from "react";
import logo from "../images/logo192.png";
import { Row, Col, Container } from "reactstrap";
import Thumbnail from "./ThumbnailComponent";

function Projects(props) {
  return (
    <React.Fragment>
      <Container>
        <div>
          <p className="mt-4">Things I've Created</p>
          <h1 className="mt-n4">Portfolio</h1>{" "}
        </div>
        <Row>
          <Col>
            <Thumbnail
              source={logo}
              alt=""
              title="project 1"
              subtitle="technologies used"
              description="short case study about project"
            />
          </Col>
          <Col>
            <Thumbnail
              source={logo}
              alt=""
              title="project 1"
              subtitle="technologies used"
              description="short case study about project"
            />
          </Col>
          <Col>
            <Thumbnail
              source={logo}
              alt=""
              title="project 1"
              subtitle="technologies used"
              description="short case study about project"
            />
          </Col>
          <Col>
            <Thumbnail
              source={logo}
              alt=""
              title="project 1"
              subtitle="technologies used"
              description="short case study about project"
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Projects;
