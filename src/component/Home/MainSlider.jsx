import React, { useEffect } from "react";
import $ from "jquery";

export default function MainSlider() {
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
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselindicators"
                data-bs-slide-to="0"
              ></li>
              <li
                data-bs-target="#carouselindicators"
                data-bs-slide-to="1"
                className="active"
              ></li>
              <li
                data-bs-target="#carouselindicators"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active carousel-item-start">
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/501"
                  alt="First slide"
                />
                <div className="carousel-caption d-md-block">
                  <span className="badge bg-danger mb-3 shadow p-2 fs-6 text-white">
                    STOCK MARKET
                  </span>
                  <br />
                  <span className="d-flex text-center">
                    <i className="fa-solid fa-calendar-days me-1"></i>
                    <p className="date">13/06/2024</p>
                    <i className="fa-solid fa-location-dot ms-3 me-1"></i>
                    <p>USA</p>
                  </span>
                  <h3 className="m-0 p-0">
                    Closing Bell: Nifty above 23,300, Sensex up 150 pts; mid,
                    smallcaps shine
                  </h3>
                </div>
              </div>
              <div className="carousel-item carousel-item-next carousel-item-start">
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/502"
                  alt="Second slide"
                />
                <div className="carousel-caption d-md-block">
                  <span className="badge bg-danger mb-3 p-2 fs-6 text-white">
                    SPORTS
                  </span>
                  <br />
                  <span className="d-flex text-center">
                    <i className="fa-solid fa-calendar-days me-1"></i>
                    <p className="date">13/06/2024</p>
                    <i className="fa-solid fa-location-dot ms-3 me-1"></i>
                    <p>USA</p>
                  </span>
                  <h3 className="m-0 p-0">India Win 3 T20 WCT20 2024 USA</h3>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/500"
                  alt="Third slide"
                />
                <div className="carousel-caption d-md-block">
                  <span className="badge bg-danger mb-3 p-2 fs-6 text-white">
                    LIFESTYLE
                  </span>
                  <br />
                  <span className="d-flex text-center">
                    <i className="fa-solid fa-calendar-days me-1"></i>
                    <p className="date">13/06/2024</p>
                    <i className="fa-solid fa-location-dot ms-3 me-1"></i>
                    <p>USA</p>
                  </span>
                  <h3 className="m-0 p-0">
                    Coca-Cola, rosé wine, red wine and fifty shades of yellow
                  </h3>
                </div>
              </div>
            </div>
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
          <div className="col-12 m-0 p-0 col-md-6 bg-dark">
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
                          src="https://picsum.photos/700/636"
                          alt=""
                        />
                        <div className="card-img-overlay d-flex linkfeat">
                          <a href="#" className="align-self-end">
                            <span className="badge bg-primary">मनोरंजन</span>
                            <h4 className="card-title fs-6 fw-bold">
                              Taylor Swift takes aim at 'dirty cheats' in
                              Scooter Braun row
                            </h4>
                            <p className="textfeat" style={{ display: "none" }}>
                              The pop star claims Braun - whose clients include
                              Justin Bieber and Ariana Grande - bullied for her
                              years and said she felt "sad" and "grossed out"
                              that he now owns her music after buying the label
                              she was signed to.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 m-0 p-0 col-md-6 bg-dark">
            <div
              className="row d-flex justify-content-center"
              data-aos="fade-left"
            >
              <div className=" featcard">
                <div
                  id="featured"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="card border-0 bg-dark text-white">
                        <img
                          className="card-img img-fluid rounded-0"
                          style={{ minHeight: "280px" }}
                          src="https://picsum.photos/700/635"
                          alt=""
                        />
                        <div className="card-img-overlay d-flex linkfeat">
                          <a href="#" className="align-self-end">
                            <span className="badge bg-primary">शिक्षण</span>
                            <h4 className="card-title fs-6 fw-bold">
                              Taylor Swift takes aim at 'dirty cheats' in
                              Scooter Braun row
                            </h4>
                            <p className="textfeat" style={{ display: "none" }}>
                              The pop star claims Braun - whose clients include
                              Justin Bieber and Ariana Grande - bullied for her
                              years and said she felt "sad" and "grossed out"
                              that he now owns her music after buying the label
                              she was signed to.
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- scrolling feed news --> */}
          <div className="col-12 p-0">
            <div className="sidebar-page-container h-100">
              <div className="sidebar">
                <div className="sidebar-widget sidebar-post">
                  <div className="post-inner">
                    <div className="carousel-inner-data">
                      <ul className="m-0 p-0 p-2">
                        <li>
                          <div className="post">
                            <div className="post-date me-5">
                              <p>06</p>
                              <span>July</span>
                            </div>
                            <div className="file-box">
                              <span className="badge bg-dangers p-2 text-white">
                                शेअर मार्केट
                              </span>
                            </div>
                            <h5>
                              <a href="#">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </a>
                            </h5>
                          </div>
                        </li>
                        <li>
                          <div className="post">
                            <div className="post-date">
                              <p>25</p>
                              <span>April</span>
                            </div>
                            <div className="file-box">
                              <span className="badge bg-dangers fs-6  p-2 text-white">
                                महराष्ट्र
                              </span>
                            </div>
                            <h5>
                              <a href="#">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </a>
                            </h5>
                          </div>
                        </li>
                        <li>
                          <div className="post">
                            <div className="post-date">
                              <p>25</p>
                              <span>April</span>
                            </div>
                            <div className="file-box">
                              <span className="badge bg-dangers fs-6  p-2 text-white">
                                खेळ
                              </span>
                            </div>
                            <h5>
                              <a href="#">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </a>
                            </h5>
                          </div>
                        </li>
                        <li>
                          <div className="post">
                            <div className="post-date">
                              <p>25</p>
                              <span>April</span>
                            </div>
                            <div className="file-box">
                              <span className="badge bg-dangers fs-6  p-2 text-white">
                                मनोरंजन
                              </span>
                            </div>
                            <h5>
                              <a href="#">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </a>
                            </h5>
                          </div>
                        </li>
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
