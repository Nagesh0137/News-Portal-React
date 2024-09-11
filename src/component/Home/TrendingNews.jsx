import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ReadMoreBTN from "../Read more btn/ReadMoreBTN";
import Articles from "../../Data";
import { NavLink } from "react-router-dom";
const TrendingNews = ({ handleCatagory }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              data-aos="fade-up"
              className="d-flex bg-white web-story shadow-lg align-items-center overflow-hidden"
            >
              <h3 className="ms-5 fw-bold pt-2">
                TRENDING <span className="text-green">NEWS</span>
              </h3>
            </div>
          </div>
          {Articles.slice(1, 2).map((Articles, index) => (
            <div className="col-12">
              <div
                className="card mt-5 mb-3 shadow"
                key={index}
                data-aos="fade-down-left"
                style={{ maxWidth: "100%" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={Articles.images}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <NavLink
                          to={`/${Articles.category}`}
                          onClick={(e) => handleCatagory(Articles.category)}
                          className="badge bg-green mb-3 p-2 text-white"
                        >
                          {Articles.category}
                        </NavLink>
                      </h5>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          {Articles.date}
                        </small>
                      </p>
                      <p className="card-text fw-bold text-to-limit-p">
                        {Articles.content}
                      </p>
                      <ReadMoreBTN />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* First Horizontal card */}
          {Articles.slice(7, 11).map((data, index) => (
            <div className="col-6 col-md-6" key={index}>
              <div
                className="card mb-3 shadow"
                data-aos="fade-up-left"
                style={{ maxWidth: "100%" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={data.images}
                      className="img-fluid h-100 rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <NavLink
                          to={`/${data.category}`}
                          onClick={(e) => handleCatagory(data.category)}
                          className="badge bg-green p-2 text-white"
                        >
                          {data.category}
                        </NavLink>
                      </h5>
                      <p className="card-text m-0 p-0">
                        <small className="text-body-secondary">
                          {data.date}
                        </small>
                      </p>
                      <p className="card-text m-0 p-0 fw-bold text-to-limit">
                        {data.headline.split(" ").slice(0, 8).join(" ") + ".."}
                      </p>
                      <ReadMoreBTN />
                    </div>
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

export default TrendingNews;
