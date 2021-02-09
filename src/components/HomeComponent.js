import React from 'react';
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
import "bootstrap/dist/css/bootstrap.min.css";

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
                Halvah jujubes pudding lemon drops brownie. Bear claw tootsie
                roll danish topping cotton candy apple pie cake tiramisu toffee.
                Cheesecake tootsie roll sweet roll bonbon powder pudding oat
                cake powder. Bonbon bonbon croissant jelly-o sweet halvah.
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
