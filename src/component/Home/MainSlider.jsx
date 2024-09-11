import React, { useEffect } from "react";
import $ from "jquery";
import Articles from "../../Data";
import { NavLink } from "react-router-dom";

export default function MainSlider({ handleCatagory }) {
  useEffect(() => {
    const tickerLength = $(".carousel-inner-data ul li").length;
    const tickerHeight = $(".carousel-inner-data ul li").outerHeight();
    $(".carousel-inner-data ul li:last-child").prependTo(
      ".carousel-inner-data ul"
    );
    $(".carousel-inner-data ul").css("marginTop", -tickerHeight);

    function moveTop() {
      $(".carousel-inner-data ul").animate(
        {
          top: -tickerHeight,
        },
        600,
        function () {
          $(".carousel-inner-data ul li:first-child").appendTo(
            ".carousel-inner-data ul"
          );
          $(".carousel-inner-data ul").css("top", "");
        }
      );
    }

    const interval = setInterval(() => {
      moveTop();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="col-12 col-md-7 m-0 p-0">
        <div className="card card-raised card-carousel" data-aos="fade-up">
          <div
            id="carouselindicators"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2500"
          >
            {/* Carousel Indicators */}
            <ol className="carousel-indicators">
              {Articles.slice(0, 3).map((_, index) => (
                <li
                  key={index}
                  data-bs-target="#carouselindicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                ></li>
              ))}
            </ol>

            {/* Carousel Inner (Slides) */}
            <div className="carousel-inner">
              {Articles.slice(1, 4).map((article, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    className="d-block w-100"
                    src={article.images}
                    alt={`Slide ${index + 1}`}
                  />
                  <div className="carousel-caption d-md-block">
                    <NavLink
                      to={`/${article.category}`}
                      onClick={(e) => handleCatagory(article.category)}
                      className="badge bg-danger mb-3 shadow p-2 fs-6 text-white"
                    >
                      {article.category}
                    </NavLink>
                    <br />
                    <span className="d-flex text-center">
                      <i className="fa-solid fa-calendar-days me-1"></i>
                      <p className="date">{article.date}</p>
                      <i className="fa-solid fa-location-dot ms-3 me-1"></i>
                      <p>USA</p>
                    </span>
                    <h3 className="m-0 p-0">
                      {article.headline.split(" ").slice(0, 8).join(" ") + ".."}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselindicators"
              data-bs-slide="prev"
            >
              <i className="fas fa-chevron-left"></i>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselindicators"
              data-bs-slide="next"
            >
              <i className="fas fa-chevron-right"></i>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-5">
        <div className="row">
          {Articles.slice(4, 6).map((Articles, index) => (
            <div className="col-12 m-0 p-0 col-md-6 bg-dark" key={index}>
              <div className="row d-flex justify-content-center">
                <div className=" featcard rounded-0">
                  <div
                    id="featured"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="card border-0 border-end rounded-0 bg-dark text-white">
                          <img
                            className="card-img img-fluid rounded-0"
                            style={{ minHeight: "280px" }}
                            src={Articles.images}
                            alt=""
                          />
                          <div className="card-img-overlay d-flex linkfeat">
                            <a href="#" className="align-self-end">
                              <NavLink
                                to={`/${Articles.category}`}
                                onClick={(e) =>
                                  handleCatagory(Articles.category)
                                }
                                className="badge bg-primary"
                              >
                                {Articles.category}
                              </NavLink>
                              <h4 className="card-title fs-6 fw-bold">
                                {Articles.headline
                                  .split(" ")
                                  .slice(0, 8)
                                  .join(" ") + "..."}
                              </h4>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <!-- scrolling feed news --> */}
          <div className="col-12 p-0">
            <div className="sidebar-page-container h-100">
              <div className="sidebar">
                <div className="sidebar-widget sidebar-post">
                  <div className="post-inner">
                    <div className="carousel-inner-data">
                      <ul className="m-0 p-0 p-2">
                        {Articles.slice(7, 11).map((Articles, index) => (
                          <li className="bg-info" key={index}>
                            <div className="post shadow-sm bg-white overflow-hidden">
                              <div style={{}} className="post-date border me-5">
                                <p>{Articles.date.split("/").slice(0, 1)}</p>
                                <span>
                                  {(() => {
                                    const dateParts = Articles.date.split("/"); // Split the date string into ["dd", "mm", "yyyy"]
                                    const monthName = new Date(
                                      `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
                                    ).toLocaleString("default", {
                                      month: "long",
                                    });
                                    return monthName; // Display the full month name
                                  })()}
                                </span>
                              </div>
                              <div className="file-box">
                                <NavLink
                                  to={`/${Articles.category}`}
                                  onClick={(e) =>
                                    handleCatagory(Articles.category)
                                  }
                                  className="badge mt-2 bg-dangers p-2 text-white"
                                >
                                  {Articles.category}
                                </NavLink>
                              </div>
                              <h5>
                                <a href="#">
                                  {Articles.content
                                    .split(" ")
                                    .slice(0, 11)
                                    .join(" ") + ".."}
                                </a>
                              </h5>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
