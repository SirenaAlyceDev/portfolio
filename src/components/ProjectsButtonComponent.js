import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

function ProjectsButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/projects");
  }

  return (
    <Button type="button" onClick={handleClick}>
      See More Projects{" "}
    </Button>
  );
}

export default ProjectsButton;
