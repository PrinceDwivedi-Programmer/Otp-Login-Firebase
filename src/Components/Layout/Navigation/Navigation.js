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
            <NavLink className="navbrand" to="/home">
              TOMATOMAN
            </NavLink>
          </Navbar.Brand>
          <Nav className="ml-auto navitems">
            <NavLink className="nav-link navlinkitem btn outline" to="/home">
              Home
            </NavLink>
            <NavLink
              className="nav-link navlinkitem btn outline "
              to="/profile"
            >
              Profile
            </NavLink>
            <NavLink className="nav-link navlinkitem btn outline" to="/history">
              History
            </NavLink>
            <NavLink className="nav-link navlinkitem btn outline" to="/cart">
              Cart
            </NavLink>
            <NavLink
              className="nav-link navlinkitem btn btn-danger text-white btnlogout "
              to="/"
            >
              Logout
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
