import React from "react";
import {
  CardDeck,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function Thumbnail(props) {
  return (
    <div>
      <CardDeck>
        <Card className="h-100">
        <CardImg
          top
          width="100%"
          src={props.source}
          alt={props.alt}
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted">{props.subtitle}</CardSubtitle>
          <CardText>{props.description}</CardText>
        </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
}

function Tn(props) {
    return(
        <div className="project">
        <div className="project-image">
          <img src={props.source} alt={props.alt}/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.description}</div>
    </div>
    )
}

export default Thumbnail;
export {Tn};
