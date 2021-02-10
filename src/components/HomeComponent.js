import React from "react";
import logo from "../images/logo192.png";
import {
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Row,
  Col,
  Container,
  Button,
} from "reactstrap";
import Thumbnail from "./ThumbnailComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectsButton from "./ProjectsButtonComponent";

const VerticalNav = (props) => {
  return (
    <Nav vertical>
      <NavItem>
        <NavLink to="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#">Another Link</NavLink>
      </NavItem>
    </Nav>
  );
};

function Home(props) {
  return (
    <>
      <Jumbotron className="text-left">
        <Row>
          <Col xs="2">
            <VerticalNav />
          </Col>
          <Col>
            <h1 className="display-3">Hi, I'm Sirena Alyce.</h1>
            <p>Freelance Full-Stack Web Developer</p>
            <p>
              Halvah jujubes pudding lemon drops brownie. Bear claw tootsie roll
              danish topping cotton candy apple pie cake tiramisu toffee.
              Cheesecake tootsie roll sweet roll bonbon powder pudding oat cake
              powder. Bonbon bonbon croissant jelly-o sweet halvah.
            </p>
          </Col>
          <Col xs="2">
            <h2>Image goes here</h2>
          </Col>
        </Row>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Skills</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Projects</h1>
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
                  title="project 2"
                  subtitle="technologies used"
                  description="short case study about project"
                />
              </Col>
              <Col>
                <Thumbnail
                  source={logo}
                  alt=""
                  title="project 3"
                  subtitle="technologies used"
                  description="short case study about project"
                />
              </Col>
            </Row>
            <ProjectsButton />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Contact</h1>
            <Button color="primary">Work With Me</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
