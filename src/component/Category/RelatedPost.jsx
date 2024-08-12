import React from "react";

export default function RelatedPost({ paralimitedText, headlimitedText }) {
  return (
    <>
      <div
        data-aos="fade-up"
        className="d-flex mt-2 web-story shadow-lg align-items-center overflow-hidden"
      >
        <h3 className="ms-5 fw-bold pt-2">
          Related <span className="text-green">NEWS</span>
        </h3>
      </div>
      <section className="mb-4">
        <div className="row">
          <div className="col-12 col-md-4 overflow-hidden">
            <div className="card mt-4 mb-5  border shadow bg-transparent">
              <img
                src="https://picsum.photos/300/201"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body p-2 ">
                <p
                  style={{ marginBottom: "0rem" }}
                  className="card-text p-0 text-secondary underline-hover"
                >
                  {headlimitedText}
                </p>
                <small className="m-0">
                  <i className="fa-solid fa-calendar-days me-1"></i>
                  <small>Jun 12,2024</small>
                  <strong className="ms-2">"life Style"</strong>
                </small>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 overflow-hidden">
            <div className="card mt-4 mb-5  border shadow bg-transparent">
              <img
                src="https://picsum.photos/300/202"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body p-2 ">
                <p
                  style={{ marginBottom: "0rem" }}
                  className="card-text p-0 text-secondary underline-hover"
                >
                  {headlimitedText}
                </p>
                <small className="m-0">
                  <i className="fa-solid fa-calendar-days me-1"></i>
                  <small>Jun 12,2024</small>
                  <strong className="ms-2">"life Style"</strong>
                </small>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 overflow-hidden">
            <div className="card mt-4 mb-5  border shadow bg-transparent">
              <img
                src="https://picsum.photos/300/203"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body p-2 ">
                <p
                  style={{ marginBottom: "0rem" }}
                  className="card-text p-0 text-secondary underline-hover"
                >
                  {headlimitedText}
                </p>
                <small className="m-0">
                  <i className="fa-solid fa-calendar-days me-1"></i>
                  <small>Jun 12,2024</small>
                  <strong> "life Style"</strong>
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
