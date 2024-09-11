import React, { useContext, useEffect } from "react";
import "./FooterStyle.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link, NavLink } from "react-router-dom";
import Articles from "../../Data";
import { ContextStore } from "../../Store/ContextStore";
const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { handleCatagory } = useContext(ContextStore);

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
          <div className="mt-5">
            <h4>Follow us</h4>
            <ul>
              <li>
                <i className="fab fa-twitter"></i>
                <a href="#"></a>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
                <a href="#"></a>
              </li>
              <li>
                <i className="fab fa-facebook-f"></i>
                <a href="#"></a>
              </li>
              <li>
                <i className="fab fa-youtube"></i>
                <a href="#"></a>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-3 f-2">
          <h6>Popular News</h6>
          {Articles.slice(0, 2).map((data, index) => (
            <div key={index}>
              <h5>
                <NavLink
                  to={`/${data?.category || "default-category"}`} // Dynamic URL based on category
                  className="badge bg-green bg-g"
                >
                  {data.category}
                </NavLink>
              </h5>
              <p>{data.headline.split(" ").slice(0, 10).join(" ")}</p>
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-2 f-3">
          <h6>Categories</h6>
          <ul className="ms-2">
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <NavLink
                to="/"
                className="nav-item"
                onClick={(e) => handleCatagory(e.target.innerText)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <NavLink
                to="/Maharashtra"
                className="nav-item"
                onClick={(e) => handleCatagory(e.target.innerText)}
              >
                Maharashtra
              </NavLink>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <NavLink
                to="/Sport"
                className="nav-item"
                onClick={(e) => handleCatagory(e.target.innerText)}
              >
                Sport
              </NavLink>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <NavLink
                to="/LifeStyle"
                className="nav-item"
                onClick={(e) => handleCatagory(e.target.innerText)}
              >
                Life Style
              </NavLink>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <NavLink
                to="/Entertainment"
                className="nav-item"
                onClick={(e) => handleCatagory(e.target.innerText)}
              >
                Entertainment
              </NavLink>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <NavLink
                to="/Education"
                className="nav-item"
                onClick={(e) => handleCatagory(e.target.innerText)}
              >
                Education
              </NavLink>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <NavLink
                to="/StockMarket"
                className="nav-item"
                onClick={(e) => handleCatagory(e.target.innerText)}
              >
                Stock Market
              </NavLink>
            </li>
            <li>
              <i className="fa-solid fa-angles-right"></i>
              <Link
                to="/Weather"
                className="nav-item"
                onClick={(e) => handleCatagory(e.target.innerText)}
              >
                Weather
              </Link>
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
                    <span>we will send only Latest News reach your inbox</span>
                  </div>
                </div>
              </div>

              <div className="px-1 d-flex flex-row gap-2 align-items-center mt-2">
                <input
                  className="form-control"
                  placeholder="e.g. john@gmail.com"
                />
                <button
                  className="btn btn-danger"
                  onClick={handleSubscribeClick}
                >
                  Notify Me
                </button>
              </div>
            </div>
          </div>
          <br />
          <ul className="ps-3">
            <li>
              <i className="fa fa-phone"></i>+919867453267
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
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                About-Vartaman Time
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy_policy"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
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
