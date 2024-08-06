import React, { useEffect } from "react";
import "./FooterStyle.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { NavLink } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubscribeClick = () => {
    confirm("Are you sure");
  };

  return (
    <footer>
      <div className="row">
        <div className="col-12 col-lg-3 f-1">
          <img
            src={`${process.env.PUBLIC_URL}/img/footerlogo.png`}
            alt="Logo"
            className="img-fluid"
          />
          <div className=" mt-5">
            <h4>Follow us</h4>
            <ul>
              <li>
                <i className="fab fa-twitter"></i>
                <a href=""></a>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
                <a href=""></a>
              </li>
              <li>
                <i className="fab fa-facebook-f"></i>
                <a href=""></a>
              </li>
              <li>
                <i className="fab fa-youtube"></i>
                <a href=""></a>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <a href=""></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-3 f-2">
          <h6>Popular News</h6>
          <h5>
            <a href="" className="badge bg-green bg-g">
              Sport
            </a>
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <h5>
            <a href="" className="badge bg-org">
              Life Style
            </a>
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="col-12 col-lg-2 f-3">
          <h6>Categories</h6>
          <ul className="ms-2">
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <a href="">मुखपृष्ठ</a>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <a href=""> महाराष्ट्र</a>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <a href="">क्रीडा</a>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <a href="">लाइफस्टाईल</a>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <a href=""> मनोरंजन</a>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <a href=""> शिक्षण</a>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <a href="">शेअर बाजार</a>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <a href="">हवामान</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 f-4">
          <div className="container-fluid mt-5 ">
            <div className="card border-0 subcribe ">
              <div className="d-flex flex-row">
                <div className="d-flex flex-column ms-1">
                  <h5 className="mb-0">
                    Get access to <b>Breaking News</b>
                  </h5>
                  <div className="text-left">
                    <span>we will send only Latest News reach you inbox</span>
                  </div>
                </div>
              </div>

              <div className="px-1 d-flex flex-row gap-2 align-items-center mt-2">
                <input
                  className="form-control"
                  placeholder="e.g. john@gmail.com"
                />
                <button className="btn btn-danger">Notify Me</button>
              </div>
            </div>
          </div>
          <br />
          <ul className="ps-3">
            <li>
              <i className="fa fa-phone"></i>+915125213
            </li>
            <li>
              <i className="fa fa-envelope"></i>abc@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12 f-nav">
          <ul className="d-flex flex-column flex-md-row">
            <li>
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                About-Vartaman Time
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                Disclaimer
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="row copyright">
        <div className="col-12">
          <p>
            Copyright <i className="fa fa-copyright"></i> 2024 VartamanTime
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
