import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function Thumbnail(props) {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src=""
          alt=""
        />
        <CardBody>
          <CardTitle></CardTitle>
          <CardSubtitle className="mb-2 text-muted">""</CardSubtitle>
          <CardText>""</CardText>
          <Button>See More</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Thumbnail;
