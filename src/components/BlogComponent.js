import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  // Nav,
  // NavItem,
  // NavLink
} from "reactstrap";
import Thumbnail from "./ThumbnailComponent";
import fintech from "../images/fintech.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/assets/css/font-awesome.css";

function Blog(props) {
  return (
    <Container>
      <Row>
        <Col>
          <p className="mt-4">Read All About It!</p>
          <h1 className="mt-n4">Techincolr</h1>
          <p>
            Techincolr is a blog to encourage and empower women of color
            interested in a STEM career.
          </p>
          <p>Women of color continue to be underrepresented in STEM careers</p>
          <ul>
            <p>This blog has 2 main purposes:</p>
            <li>
              provided resources to help guide learning on data analytics,
              coding, professional and personal development, and freelancing
            </li>
            <li>
              create a community of support for like-minded individuals and
              encourage women of color to pursue careers in STEM
            </li>
          </ul>
          <p>
            From this platform I want women of color to feel inspired,
            encouraged, supported, and confident in pursuing a STEM career.{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          feature blog post blurb <br />
          category
          <br />
          title
          <br />
          date - meta data <br />
          short blurb
          <br />
          <Button>Read More</Button>
        </Col>
        <Col>
        <img source={fintech} className="img-fluid" alt="feature blog post" />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <h2>Latest On The Blog</h2>
          <Row>
            <Col>
              <Thumbnail
                source=""
                alt=""
                title="What is fintech?"
                subtitle="technologies used"
                description="short case study about project"
              />
            </Col>
            <Col>
              <Thumbnail
                source=""
                alt=""
                title="React Fundamentals"
                subtitle="technologies used"
                description="short case study about project"
              />
            </Col>
            <Col>
              <Thumbnail
                source=""
                alt=""
                title="What is Data Management?"
                subtitle="technologies used"
                description="short case study about project"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
