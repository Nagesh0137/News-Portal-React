import React from "react";
import WebStories from "../Home/WebStories";

export default function RightSidebar() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="mb-3 w-100">
            <div
              className="section-title w-100 d-flex align-items-center follow-us-title mb-0"
              style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
            >
              <h3 className="ms-5 fw-bold pt-2">
                FOLLOW <span className="text-green">US</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className="bg-white border border-top-0 p-3 mb-3"
            style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
          >
            {[
              {
                platform: "  Facebook",
                color: "#39569E",
                icon: "facebook-f",
              },
              {
                platform: "    X",
                color: "black",
                icon: "x-twitter",
              },
              {
                platform: "  Linkedln",
                color: "#0185AE",
                icon: "linkedin-in",
              },
              {
                platform: "  Instagram",
                color: "#C8359D",
                icon: "instagram",
              },
              {
                platform: "  Youtube",
                color: "#DC473E",
                icon: "youtube",
              },
            ].map(({ platform, color, icon }) => (
              <a
                key={platform}
                href="#"
                className="d-block w-100 text-white text-decoration-none mb-4"
                style={{ background: color }}
              >
                <i
                  className={`fab fa-${icon} text-center py-4 mr-3`}
                  style={{
                    width: "65px",
                    background: "rgba(0,0,0,.2)",
                  }}
                ></i>
                <span className="font-weight-medium">{platform}</span>
              </a>
            ))}
          </div>
        </div>
        {/* trending News */}
        <div className="col-12">
          <div className="mb-3 w-100">
            <div
              className="section-title w-100 d-flex align-items-center follow-us-title mb-0"
              style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
            >
              <h3 className="ms-4 fw-bold pt-2">
                Trending<span className="text-green"> News</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-12 p-3 pt-0">
          <div className="mb-3 w-100">
            <div
              className="card rounded-0 mb-3 shadow bg-white"
              data-aos="fade-up-left"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/800/604"
                    className="img-fluid h-100 "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="badge bg-green p-2 text-white">
                        STOCK MARKET
                      </span>
                      <small className="text-body-secondary ms-1">
                        Jun 12,2024
                      </small>
                    </h5>

                    <p className="card-text underline-hover m-0 p-0 fw-bold ">
                      राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी राजा
                      आनंदात आहे.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 w-100">
            <div
              className="card rounded-0 mb-3 shadow bg-white"
              data-aos="fade-up-left"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/800/604"
                    className="img-fluid h-100 "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="badge bg-green p-2 text-white">
                        STOCK MARKET
                      </span>
                      <small className="text-body-secondary ms-1">
                        Jun 12,2024
                      </small>
                    </h5>

                    <p className="card-text underline-hover m-0 p-0 fw-bold ">
                      राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी राजा
                      आनंदात आहे.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 w-100">
            <div
              className="card rounded-0 mb-3 shadow bg-white"
              data-aos="fade-up-left"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/800/604"
                    className="img-fluid h-100 "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="badge bg-green p-2 text-white">
                        STOCK MARKET
                      </span>
                      <small className="text-body-secondary ms-1">
                        Jun 12,2024
                      </small>
                    </h5>

                    <p className="card-text underline-hover m-0 p-0 fw-bold ">
                      राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी राजा
                      आनंदात आहे.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sidebar web Stories */}

        <div className="col-12">
          <WebStories storySize="1"></WebStories>
        </div>
      </div>
    </>
  );
}
