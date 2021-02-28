import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Blog from "./BlogComponent";
import Projects from "./ProjectsComponent";
import Contact from "./ContactComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function Main(props) {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/techincolr" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Main);
