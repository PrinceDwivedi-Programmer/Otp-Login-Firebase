import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Navigation.css";
import { FiShoppingCart } from "react-icons/fi";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar shadow" variant="light">
        <Container>
          <Navbar.Brand className="navbrand">
            <FiShoppingCart className="fishoppingcart" size="35" />
            <NavLink className="navbrand" to="/">
              TOMATOMAN
            </NavLink>
          </Navbar.Brand>
        
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
