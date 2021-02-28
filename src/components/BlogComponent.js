import React from "react";
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

function Blog(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Techincolr</h1>
          <p>
            Techincolr is a blog to encourage and empower women of color
            interested in a STEM career.
          </p>
          <p>
            Women of color continue to be
            underrepresented in STEM careers
          </p>
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
          <p>From this platform I want women of color to feel inspired, encouraged, supported, and confident in pursuing a STEM career. </p>
        </Col>
      </Row>
      <Row>
        <Col>
        feature blog post blurb <br/>
        category<br />
        title<br/>
        date - meta data <br/>
        short blurb<br />
        <Button>Read More</Button>
        </Col>
        <Thumbnail
                  source=''
                  alt="feature blog post image"
                />
        <Col>
        </Col>
      </Row>
      <Row>
        <Col>
        Explore: 
        </Col>
        <Col>
        Learning
        </Col>
        <Col>
        In The News
        </Col>
        <Col>
        Professional Development
        </Col>
        <Col>
        Personal Development
        </Col>
        <Col>
        Freelancing
        </Col>
      </Row>
      <Row>
          <Col>
            <h2>Latest On The Blog</h2>
            <Row>
              <Col>
                <Thumbnail
                  source=''
                  alt=""
                  title="blog post 1"
                  subtitle="technologies used"
                  description="short case study about project"
                />
              </Col>
              <Col>
                <Thumbnail
                  source=''
                  alt=""
                  title="blog post 2"
                  subtitle="technologies used"
                  description="short case study about project"
                />
              </Col>
              <Col>
                <Thumbnail
                  source=''
                  alt=""
                  title="blog post 3"
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
