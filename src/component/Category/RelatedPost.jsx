import React from "react";
import Articles from "../../Data";
import { NavLink } from "react-router-dom";
export default function RelatedPost({ paralimitedText, headlimitedText }) {
  return (
    <>
      <div
        data-aos="fade-up"
        className="d-flex mt-2 web-story shadow bg-white align-items-center overflow-hidden"
      >
        <h3 className="ms-5 fw-bold pt-2">
          Related <span className="text-green">NEWS</span>
        </h3>
      </div>
      <section className="mb-4">
        <div className="row">
          {Articles.slice(0, 3).map((article, index) => (
            <div
              key={index}
              data-aos="zoom-out"
              className="col-12 col-md-4 overflow-hidden"
            >
              <div className="card mt-4 mb-3 border shadow bg-transparent">
                <img src={article.images} className="card-img-top" alt="..." />
                <div className="card-body p-2">
                  <p
                    style={{ marginBottom: "0rem" }}
                    className="card-text p-0 text-secondary underline-hover"
                  >
                    {article.headline.split(" ").slice(0, 7).join(" ") + ".."}
                  </p>
                  <small className="m-0">
                    <i className="fa-solid fa-calendar-days me-1"></i>
                    <small>{article.date}</small>
                    <NavLink to={`/${article.category}`}>
                      <strong className="ms-2">"{article.category}"</strong>
                    </NavLink>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
