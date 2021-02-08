import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainNavigation =(props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand='md'>
        <NavbarBrand href='/'>SirenaAlyce</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="/Home/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Projects/">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Blog/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact/">Contact</NavLink>
            </NavItem>            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

function Home(props) {
  return (
    <div>
      <MainNavigation />
      <h1>New Component</h1>
    </div>
  )
}
 
export default Home;