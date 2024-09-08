import React from "react";
import "./CategoryStyle.css";
import ReadMoreBTN from "../Read more btn/ReadMoreBTN";
import PaginatedCards from "./CardPagination";
import RelatedPost from "./RelatedPost";
import RightSidebar from "./RightSidebar";
import { NavLink } from "react-router-dom";
export default function Category({ object }) {
  console.log(object);

  return (
    <>
      <div className="container-fluid m-0 p-0 overflow-hidden">
        <div className="row ">
          <div className="col-md-12 bg-body-secondary hero-section position-relative">
            <div
              style={{ textIndent: "10px" }}
              className="bg-light w-100 border border-secondary-subtle"
            >
              <b className="text-primary">Home</b>
              <small className="">-{object && object[0].category}</small>
            </div>
            <div
              data-aos="fade-up"
              className="h-100 category-head d-flex align-items-center justify-content-center"
            >
              <h1 className="text-center fw-bold text-white z-1">
                {object && object[0].category}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <PaginatedCards cardData={object}></PaginatedCards>

                    {/* horizontal news */}
                    <div data-aos="zoom-out" className="col-12">
                      <div
                        className="card mt-4 mb-3 rounded-0 shadow"
                        data-aos="fade-down-left"
                        style={{ maxWidth: "100%" }}
                      >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              style={{
                                aspectRatio: "3/3",
                                objectFit: "cover",
                                height: "100%",
                              }}
                              src={object[2].images}
                              className="img-fluid rounded-0"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">
                                <NavLink className="badge bg-green p-2 text-white">
                                  {object[2].category}
                                </NavLink>
                              </h5>
                              <a className="text-body m-2 " href="#">
                                <i className="fa-solid fa-calendar-days me-1"></i>
                                <small>{object[2].date}</small>
                              </a>

                              <span className="underline-hover">
                                <i className="fa-solid fa-pen-to-square"></i>
                                <small>{object[2].writer}</small>
                              </span>
                              <hr className="m-0 my-1" />
                              <p className="card-text text-capitalize fw-bold fs-5 text-to-limit-p">
                                {object[2].headline
                                  .split(" ")
                                  .slice(0, 10)
                                  .join(" ") + "..."}
                              </p>
                              <ReadMoreBTN></ReadMoreBTN>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* First Horizontal card */}
                    {object.slice(3, 8).map((objects, index) => (
                      <div
                        data-aos="zoom-out"
                        className="col-6 col-md-6"
                        key={index}
                      >
                        <div
                          className="card rounded-0 mb-3 shadow"
                          data-aos="fade-up-left"
                          style={{ maxWidth: "100%" }}
                        >
                          <div className="row g-0">
                            <div className="col-md-4">
                              <img
                                style={{
                                  aspectRatio: "4/4",
                                  objectFit: "cover",
                                  height: "100%",
                                }}
                                src={objects.images}
                                className="img-fluid h-100 rounded-0"
                                alt="..."
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body equal-height">
                                <h5 className="card-title">
                                  <NavLink className="badge bg-green p-2 text-white">
                                    {objects.category}
                                  </NavLink>
                                </h5>
                                <p className="card-text m-0 p-0">
                                  <small className="text-body-secondary">
                                    {objects.date}
                                  </small>
                                </p>
                                <p className="card-text m-0 p-0 fw-bold text-to-limit">
                                  {objects.headline
                                    .split(" ")
                                    .slice(0, 9)
                                    .join(" ") + ".."}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Related Post */}
                    <RelatedPost></RelatedPost>
                  </div>
                </div>

                {/* Follow Us Section */}
                <div className="col-lg-4 float-right">
                  <RightSidebar></RightSidebar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
