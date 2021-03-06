import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
 
function About(props) {
  return (
    <Container>
      <Row>
        <Col>
        <p className="mt-4">About Me</p>
      <h1 className="mt-n4">Meet Sirena</h1>
        </Col>
      </Row>
    </Container>
  )
}
 
export default About;