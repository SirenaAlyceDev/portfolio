import React from "react";
import { Nav, Navbar, NavItem, NavbarBrand } from "reactstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/home">SirenaAlyce</NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink
              to="https://twitter.com/sirenaalyce"
              className="btn btn-social-icon btn-twitter"
            >
              <span class="fa fa-twitter"></span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="https://www.instagram.com/sirenaalyce.io/"
              className="btn btn-social-icon btn-instagramr"
            >
              <span class="fa fa-instagram"></span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="https://github.com/SirenaAlyceDev"
              className="btn btn-social-icon btn-github"
            >
              <span class="fa fa-github"></span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="https://www.linkedin.com/in/sirenaalycegandy/"
              className="btn btn-social-icon btn-linkedin"
            >
              <span class="fa fa-linkedin"></span>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Footer;
