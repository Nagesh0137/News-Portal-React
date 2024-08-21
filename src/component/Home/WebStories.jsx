import React from "react";
import Carousel from "react-owl-carousel2";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./HomeStyle.css";
import { Link } from "react-router-dom";
export default function WebStories({ storySize }) {
  let size = Number(storySize);
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    freeDrag: true,
    animateOut: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      100: {
        items: size ? 1 : 5,
      },
    },
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              data-aos="fade-up"
              className="d-flex web-story shadow-lg bg-white align-items-center overflow-hidden"
            >
              <h3 className="ms-5 fw-bold pt-2">
                LATEST <span className="text-green">WEB STORIES</span>
              </h3>
            </div>
          </div>
          <div className="col-12">
            <Carousel options={options} className="owl-carousel mt-5 owl-theme">
              {Array.from({ length: 10 }).map((_, index) => (
                <Link to="/web_stories" key={index}>
                  <div
                    className="item"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1200"
                  >
                    <img
                      src={`https://picsum.photos/800/600?random=${index + 1}`}
                      alt={`Random Image ${index + 1}`}
                      className="img-fluid img-thumbnail"
                      style={{ objectFit: "cover" }}
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
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
