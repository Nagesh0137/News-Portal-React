import React from "react";
import "./CategoryStyle.css";
import ReadMoreBTN from "../Read more btn/ReadMoreBTN";
import TrendingNews from "../Home/TrendingNews";
import PaginatedCards from "./CardPagination";
import RelatedPost from "./RelatedPost";
import RightSidebar from "./RightSidebar";
export default function Category() {
  const headtitle =
    "मान्सून'ने महाराष्ट्र सुखावला, नाशिक-जळगाव जिल्ह्यात मुसळधार पाऊस, पेरण्यांना आला वेग";
  const paragraphtitle = `राजा आनंदात आहे. जमिनीमध्ये चांगली ओल निर्माण झाली असून खरिप हंगामातील पेरण्यांना वेग आला आहे`;
  const headlimitedText = headtitle.split(" ").slice(0, 10).join(" ") + "...";
  const paralimitedText =
    paragraphtitle.split(" ").slice(0, 15).join(" ") + "...";
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
              <small className="">-Maharashtra</small>
            </div>
            <div
              data-aos="fade-up"
              className="h-100 category-head d-flex align-items-center justify-content-center"
            >
              <h1 className="text-center fw-bold text-white z-1">Maharastra</h1>
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
                    <PaginatedCards
                      headlimitedText={headlimitedText}
                      paralimitedText={paralimitedText}
                    ></PaginatedCards>

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
                              src="https://picsum.photos/800/600"
                              className="img-fluid rounded-0"
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
                              <a className="text-body m-2 " href="#">
                                <i class="fa-solid fa-calendar-days me-1"></i>
                                <small>Jun 12,2024</small>
                              </a>

                              <span className="underline-hover">
                                <i class="fa-solid fa-pen-to-square"></i>
                                <small>Rohit Sharama</small>
                              </span>
                              <hr className="m-0 my-1" />
                              <p className="card-text fw-bold text-to-limit-p">
                                राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी
                                राजा आनंदात आहे. जमिनीमध्ये चांगली ओल निर्माण
                                झाली असून खरिप हंगामातील पेरण्यांना वेग आला आहे.
                              </p>
                              <ReadMoreBTN></ReadMoreBTN>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* First Horizontal card */}
                    <div data-aos="zoom-out" className="col-6 col-md-6">
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
                              src="https://picsum.photos/800/604"
                              className="img-fluid h-100 rounded-0"
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
                                <small className="text-body-secondary">
                                  Jun 12,2024
                                </small>
                              </p>
                              <p className="card-text m-0 p-0 fw-bold text-to-limit">
                                राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी
                                राजा आनंदात आहे.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second Horizontal card */}
                    <div data-aos="zoom-out" className="col-6 col-md-6">
                      <div
                        className="card mb-3 rounded-0 shadow"
                        data-aos="fade-up"
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
                              src="https://picsum.photos/800/603"
                              className="img-fluid h-100 rounded-0"
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
                                <small className="text-body-secondary">
                                  Jun 12,2024
                                </small>
                              </p>
                              <p className="card-text m-0 p-0 fw-bold text-to-limit">
                                राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी
                                राजा आनंदात आहे.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Third Horizontal card */}
                    <div data-aos="zoom-out" className="col-12 col-md-6">
                      <div
                        className="card mb-3 rounded-0 shadow"
                        data-aos="fade-up-right"
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
                              src="https://picsum.photos/800/602"
                              className="img-fluid d-none d-md-block h-100 rounded-0"
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
                                <small className="text-body-secondary">
                                  Jun 12,2024
                                </small>
                              </p>
                              <p className="card-text m-0 p-0 fw-bold text-to-limit">
                                राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी
                                राजा आनंदात आहे.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Fourth Horizontal card */}
                    <div data-aos="zoom-out" className="col-12 col-md-6">
                      <div
                        className="card mb-3 rounded-0 shadow"
                        data-aos="fade-up"
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
                              src="https://picsum.photos/800/601"
                              className="img-fluid d-none d-md-block h-100 rounded-0"
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
                                <small className="text-body-secondary">
                                  Jun 12,2024
                                </small>
                              </p>
                              <p className="card-text m-0 p-0 fw-bold text-to-limit">
                                राज्यभरात मान्सूनचे जोरदार आगमन झाले असून शेतकरी
                                राजा आनंदात आहे.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Related Post */}
                    <RelatedPost
                      headlimitedText={headlimitedText}
                      paralimitedText={paralimitedText}
                    ></RelatedPost>
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
