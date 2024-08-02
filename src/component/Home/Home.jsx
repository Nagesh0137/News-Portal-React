import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeStyle.css";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

window.jQuery = $;
window.$ = $;

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    $(document).ready(function () {
      if ($(".owl-carousel").length) {
        $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 5,
            },
          },
        });
      }
    });
  }, []);

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
      <main>
        <div className="container-fluid overflow-hidden">
          <div className="row">
            <div className="col-12 p-0">
              <div className="ticker bg-white">
                <div className="title bg-org">
                  <h5 className="text-white fw-bolder fs-4 m-0 h-100 p-0">
                    Breaking News
                  </h5>
                </div>
                <div className="news bg-white">
                  <marquee className="news-content fw-bold">
                    <p className="">
                      <i className="fa-solid fa-circle me-2 text-danger"></i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <p>
                      <i className="fa-solid fa-circle text-danger me-2"></i>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto
                    </p>
                    <p>
                      <i className="fa-solid fa-circle text-danger me-2"></i>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam
                    </p>
                  </marquee>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 m-0 p-0">
              <div
                className="card card-raised card-carousel"
                data-aos="fade-up"
              >
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
                      class
                    ></li>
                    <li
                      data-bs-target="#carouselindicators"
                      data-bs-slide-to="1"
                      className="active"
                    ></li>
                    <li
                      data-bs-target="#carouselindicators"
                      data-bs-slide-to="2"
                      class
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
                          Closing Bell: Nifty above 23,300, Sensex up 150 pts;
                          mid, smallcaps shine
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
                        <h3 className="m-0 p-0">
                          India Win 3 T20 WCT20 2024 USA
                        </h3>
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
                          Coca-Cola, rosé wine, red wine and fifty shades of
                          yellow
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
                  <div
                    className="row d-flex justify-content-center"
                    data-aos="fade-right"
                  >
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
                                  <span className="badge bg-primary">
                                    मनोरंजन
                                  </span>
                                  <h4 className="card-title fs-6 fw-bold">
                                    Taylor Swift takes aim at 'dirty cheats' in
                                    Scooter Braun row
                                  </h4>
                                  <p
                                    className="textfeat"
                                    style={{ display: "none" }}
                                  >
                                    The pop star claims Braun - whose clients
                                    include Justin Bieber and Ariana Grande -
                                    bullied for her years and said she felt
                                    "sad" and "grossed out" that he now owns her
                                    music after buying the label she was signed
                                    to.
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
                                  <span className="badge bg-primary">
                                    शिक्षण
                                  </span>
                                  <h4 className="card-title fs-6 fw-bold">
                                    Taylor Swift takes aim at 'dirty cheats' in
                                    Scooter Braun row
                                  </h4>
                                  <p
                                    className="textfeat"
                                    style={{ display: "none" }}
                                  >
                                    The pop star claims Braun - whose clients
                                    include Justin Bieber and Ariana Grande -
                                    bullied for her years and said she felt
                                    "sad" and "grossed out" that he now owns her
                                    music after buying the label she was signed
                                    to.
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
                  <div
                    className="sidebar-page-container h-100"
                    data-aos="fade-up-left"
                  >
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
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry.
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
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry.
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
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry.
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
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry.
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
          </div>
        </div>
      </main>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                data-aos="fade-up"
                className="d-flex web-story shadow-lg align-items-center overflow-hidden"
              >
                <h3 className="ms-5 fw-bold pt-2">
                  LATEST <span className="text-green">WEB STORIES</span>
                </h3>
              </div>
            </div>
            <div className="col-12">
              <div className="owl-carousel mt-5 owl-theme">
                {Array.from({ length: 10 }).map((_, index) => (
                  <a href="webstories.html" key={index}>
                    <div
                      className="item"
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1200"
                    >
                      <img
                        src={`https://picsum.photos/800/600?random=${
                          index + 1
                        }`}
                        alt={`Random Image ${index + 1}`}
                        className="img-fluid img-thumbnail"
                      />
                      <div className="carousel-caption d-md-block m-0 p-0">
                        <span className="badge bg-success mb-3 p-2 text-white">
                          STOCK MARKET
                        </span>
                        <br />
                        <span className="d-flex text-center">
                          <i className="fa-solid fa-calendar-days me-1"></i>
                          <p className="date">13/06/2024</p>
                        </span>
                        <h3 className="m-0 p-0">
                          Closing Bell: Nifty above 23,300, Sensex up 150 pts;
                          mid, smallcaps shine
                        </h3>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
