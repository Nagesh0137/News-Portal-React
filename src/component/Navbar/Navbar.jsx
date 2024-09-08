import React, { useContext, useState } from "react";
import "./NavbarStyle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faGooglePlusG,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { ContextStore } from "../../Store/ContextStore";

const Topbar = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  return (
    <div className="container-fluid d-none d-lg-block bg-dark">
      <div className="row align-items-center px-lg-5">
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-sm p-0">
            <ul className="navbar-nav ml-n2">
              <li className="nav-item border-right border-secondary">
                <a className="nav-link text-white small" href="#">
                  {formattedDate}
                </a>
              </li>
              <li className="nav-item border-right border-secondary">
                <a className="nav-link text-white small" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item border-right border-secondary">
                <a className="nav-link text-white small" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white small" href="#">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3 text-right d-none d-md-block">
          <nav className="navbar navbar-expand-sm p-0">
            <ul className="navbar-nav ml-auto mr-n2">
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <FontAwesomeIcon icon={faGooglePlusG} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="row align-items-center bg-white px-lg-5">
        <div className="col-lg-4">
          <img
            src={`${process.env.PUBLIC_URL}/img/logo.jpeg`}
            style={{ height: "100px", width: "250px" }}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

const MenuBar = () => {
  const { handleCatagory } = useContext(ContextStore);
  // console.log(catagory);
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
        <a href="index.html" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-4 text-uppercase text-primary">
            News<span className="text-white font-weight-normal">Portal</span>
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto py-0 menu">
            <NavLink
              to="/"
              className="nav-item"
              onClick={(e) => handleCatagory(e.target.innerText)}
            >
              Home
            </NavLink>
            <NavLink
              to="/maharashtra"
              className="nav-item"
              onClick={(e) => handleCatagory(e.target.innerText)}
            >
              Maharashtra
            </NavLink>
            <NavLink
              to="/sport"
              className="nav-item"
              onClick={(e) => handleCatagory(e.target.innerText)}
            >
              Sport
            </NavLink>
            <NavLink
              to="/lifestyle"
              className="nav-item"
              onClick={(e) => handleCatagory(e.target.innerText)}
            >
              Life Style
            </NavLink>
            <NavLink
              to="/entertainment"
              className="nav-item"
              onClick={(e) => handleCatagory(e.target.innerText)}
            >
              Entertainment
            </NavLink>
            <NavLink
              to="/education"
              className="nav-item"
              onClick={(e) => handleCatagory(e.target.innerText)}
            >
              Education
            </NavLink>
            <NavLink
              to="/Stock Market"
              className="nav-item"
              onClick={(e) => {
                handleCatagory(e.target.innerText);
              }}
            >
              Stock Market
            </NavLink>
            <NavLink
              to="/weather"
              className="nav-item"
              onClick={(e) => handleCatagory(e.target.innerText)}
            >
              Weather
            </NavLink>
            <NavLink to="/web_stories" className="nav-item">
              web stories
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

const Navbar = () => (
  <>
    <Topbar />
    <MenuBar />
  </>
);

export default Navbar;
