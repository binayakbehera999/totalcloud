import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import "./style.css";

const Landing = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="container-fluid">
      <Navbar color="faded" light className="navbar-dimension">
        <NavbarBrand href="/" className="mr-auto navbar-logo">
          FOOD.<span className="navbar-logo-color">LOGO</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>OUR FOOD</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>PLANS</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Landing;
