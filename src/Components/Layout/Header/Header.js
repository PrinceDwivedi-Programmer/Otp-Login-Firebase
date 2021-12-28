import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {} from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Home from "../../Layout/Pages/Home/Home"
import Login from "../Pages/Login/Login";
import Functional_Login from "../Pages/Login/Functional_Login";

const Header = () => {
  return (
    <Router>
   <Navigation/>
      <Routes>
        <Route  path="/" element={<Functional_Login />}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Functional_Login/>} />
      </Routes>
    </Router>
  );
};

export default Header;
