import React from "react";
import ReadMoreBTN from "../Read more btn/ReadMoreBTN";
import Articles from "../../Data";
import { Link, NavLink } from "react-router-dom";
const LatestNews = ({ handleCatagory }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              data-aos="fade-up"
              className="d-flex web-story bg-white shadow-lg align-items-center overflow-hidden"
            >
              <h3 className="ms-5 fw-bold pt-2">
                LATEST <span className="text-green">NEWS</span>
              </h3>
            </div>
          </div>
          {/* Card Section */}
          {Articles.slice(1, 4).map((Articles, index) => (
            <div className="col-md-4 mt-5" data-aos="fade-up-right" key={index}>
              <div
                className="news-card d-flex flex-column position-relative mb-3"
                style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
              >
                <img
                  className="img-fluid w-100"
                  src={Articles.images}
                  style={{ objectFit: "cover", maxHeight: "200px" }}
                  alt="News Image"
                />
                <div className="bg-white equal border border-top-0 p-4 d-flex flex-column">
                  <div className="mb-2">
                    <NavLink
                      to={`/${Articles.category}`}
                      onClick={(e) => handleCatagory(Articles.category)}
                      href="#"
                      className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    >
                      {Articles.category}
                    </NavLink>
                    <Link href="#" className="text-body">
                      <i className="fa-regular fa-calendar-days mx-2"></i>
                      <small>{Articles.date}</small>
                    </Link>
                    <Link className="underline-hover ms-2" href="#">
                      <i className="fa-solid fa-pen-to-square"></i>
                      <small>{Articles.writer}</small>
                    </Link>
                    <hr />
                  </div>

                  <Link
                    href="#"
                    className="d-block mb-3 text-black text-uppercase"
                  >
                    <h4 className="text-to-limit fw-bold text-justify">
                      {Articles.headline.split(" ").slice(0, 10).join(" ") +
                        ".."}
                    </h4>
                  </Link>
                  <p className="m-0 text-to-limit-p">
                    {Articles.content.split(" ").slice(0, 20).join(" ") + ".."}
                  </p>
                  {/* Button aligned at the bottom */}
                  <div className="mt-auto d-flex justify-content-center">
                    <ReadMoreBTN />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
