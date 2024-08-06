import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const TrendingNews = () => {
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
              className="d-flex web-story shadow-lg align-items-center overflow-hidden"
            >
              <h3 className="ms-5 fw-bold pt-2">
                TRENDING <span className="text-green">NEWS</span>
              </h3>
            </div>
          </div>
          <div className="col-12">
            <div
              className="card mt-5 mb-3 shadow"
              data-aos="fade-down-left"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/800/600"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="badge bg-green mb-3 p-2 text-white">
                        STOCK MARKET
                      </span>
                    </h5>
                    <p className="card-text">
                      <small className="text-body-secondary">Jun 12,2024</small>
                    </p>
                    <p className="card-text fw-bold text-to-limit-p">
                      राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी राजा
                      आनंदात आहे. जमिनीमध्ये चांगली ओल निर्माण झाली असून खरिप
                      हंगामातील पेरण्यांना वेग आला आहे.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-primary button"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* First Horizontal card */}
          <div className="col-6 col-md-6">
            <div
              className="card mb-3 shadow"
              data-aos="fade-up-left"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/800/604"
                    className="img-fluid h-100 rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="badge bg-green p-2 text-white">
                        STOCK MARKET
                      </span>
                    </h5>
                    <p className="card-text m-0 p-0">
                      <small className="text-body-secondary">Jun 12,2024</small>
                    </p>
                    <p className="card-text m-0 p-0 fw-bold text-to-limit">
                      राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी राजा
                      आनंदात आहे.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto button"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Horizontal card */}
          <div className="col-6 col-md-6">
            <div
              className="card mb-3 shadow"
              data-aos="fade-up"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/800/603"
                    className="img-fluid h-100 rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="badge bg-green p-2 text-white">
                        STOCK MARKET
                      </span>
                    </h5>
                    <p className="card-text m-0 p-0">
                      <small className="text-body-secondary">Jun 12,2024</small>
                    </p>
                    <p className="card-text m-0 p-0 fw-bold text-to-limit">
                      राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी राजा
                      आनंदात आहे.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-1 button"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Third Horizontal card */}
          <div className="col-12 col-md-6">
            <div
              className="card mb-3 shadow"
              data-aos="fade-up-right"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/800/602"
                    className="img-fluid d-none d-md-block h-100 rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="badge bg-green p-2 text-white">
                        STOCK MARKET
                      </span>
                    </h5>
                    <p className="card-text m-0 p-0">
                      <small className="text-body-secondary">Jun 12,2024</small>
                    </p>
                    <p className="card-text m-0 p-0 fw-bold text-to-limit">
                      राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी राजा
                      आनंदात आहे.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-primary button"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fourth Horizontal card */}
          <div className="col-12 col-md-6">
            <div
              className="card mb-3 shadow"
              data-aos="fade-up"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/800/601"
                    className="img-fluid d-none d-md-block h-100 rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="badge bg-green p-2 text-white">
                        STOCK MARKET
                      </span>
                    </h5>
                    <p className="card-text m-0 p-0">
                      <small className="text-body-secondary">Jun 12,2024</small>
                    </p>
                    <p className="card-text m-0 p-0 fw-bold text-to-limit">
                      राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी राजा
                      आनंदात आहे.
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-primary button"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNews;
