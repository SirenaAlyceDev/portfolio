import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/home">SirenaAlyce</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink className='nav-link' to="/Home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to="/About/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to="/Projects/">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to="/techincolr/">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to="/Contact/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
};

export default Header;