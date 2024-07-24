import React from "react";
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
            src="/img/logo.jpeg"
            style={{ height: "100px", width: "250px" }}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

const MenuBar = () => (
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
        data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
        id="navbarCollapse">
        <div className="navbar-nav mr-auto py-0 menu">
          <a
            href="/"
            className="nav-item active"
            style={{
              color: "rgb(241, 241, 241)",
              backgroundColor: "rgb(231,103,40)",
            }}>
            मुखपृष्ठ
          </a>
          <a href="/maharashtra" className="nav-item">
            महाराष्ट्र
          </a>
          <a href="/krida" className="nav-item">
            क्रीडा
          </a>
          <a href="/lifestyle" className="nav-item">
            लाइफस्टाईल
          </a>
          <a href="/entertainment" className="nav-item">
            मनोरंजन
          </a>
          <a href="/education" className="nav-item">
            शिक्षण
          </a>
          <a href="/stock_market" className="nav-item">
            शेअर बाजार
          </a>
          <a href="/weather" className="nav-item">
            हवामान
          </a>
        </div>
      </div>
    </nav>
  </div>
);

const Navbar = () => (
  <>
    <Topbar />
    <MenuBar />
  </>
);

export default Navbar;
