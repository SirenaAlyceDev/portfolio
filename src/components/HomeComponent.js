import React from "react";
import logo from "../images/logo192.png";
import profile from "../images/IMG_1382-removebg-preview.png";
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
import "bootstrap-social/assets/css/font-awesome.css";
import ProjectsButton from "./ProjectsButtonComponent";

const VerticalNav = (props) => {
  return (
    <Nav vertical>
      <NavItem>
        <NavLink to="#" className="btn btn-social-icon btn-twitter">
          <span class="fa fa-twitter"></span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#" className="btn btn-social-icon btn-instagramr">
          <span class="fa fa-instagram"></span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="#" className="btn btn-social-icon btn-github">
          <span class="fa fa-github"></span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

function Home(props) {
  return (
    <>
      <Jumbotron className="text-left" fluid>
        <Row>
          <Col xs="1" className="align-self-center">
            <VerticalNav />
          </Col>
          <Col className="align-self-center">
            <h1 className="display-3">Hi, I'm Sirena Alyce.</h1>
            <p className="font-weight-bold">
              Freelance Full-Stack Web Developer & Data Analyst
            </p>
            <p>
              Lover of all things <strong>data and development</strong>, <strong>tech</strong> 
              enthusiast, self-proclaimed <strong>lifeling learner</strong>, <strong>problem solver and
              goal-setter</strong>, dog lover, <strong>Black Woman</strong>, curiosity is
              my middle name.
            </p>
          </Col>
          <Col xs="4" className="align-self-end">
            <img src={profile} className="img-fluid" alt="profile pic" />
          </Col>
        </Row>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <h2>What I Do</h2>
            <Button color="primary">Download CV</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Projects</h2>
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
            <h2>Latest On The Blog</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Work With Me</h2>
            <Button color="primary">Let's Get Started!</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
