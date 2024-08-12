import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WebStories.module.css";
import { useNavigate } from "react-router-dom";

const WebStoriesData = () => {
  const navigate = useNavigate();
  const closeWindow = () => {
    navigate("/");
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div>
            <center>
              <div className={styles.mainDiv}>
                <div
                  className={`container-fluid m-0 p-0 ${styles.containerFluid}`}
                >
                  <div className="row">
                    <div className="m-0 p-0">
                      <div
                        className="carousel slide"
                        id="carousel-554496"
                        data-bs-ride="carousel"
                      >
                        <ol
                          className={`carousel-indicators ${styles.carouselIndicators}`}
                        >
                          <li
                            data-bs-target="#carousel-554496"
                            data-bs-slide-to="0"
                            className={`active ${styles.carouselIndicatorsActive}`}
                          ></li>
                          <li
                            data-bs-target="#carousel-554496"
                            data-bs-slide-to="1"
                          ></li>
                          <li
                            data-bs-target="#carousel-554496"
                            data-bs-slide-to="2"
                          ></li>
                          <li
                            data-bs-target="#carousel-554496"
                            data-bs-slide-to="3"
                          ></li>
                        </ol>

                        <div className="carousel-inner">
                          <i
                            className={`fa-regular fa-circle-xmark ${styles.carouselInnerI} ${styles.carouselInnerIHover}`}
                            onClick={closeWindow}
                          ></i>
                          <div className="carousel-item active">
                            <img
                              className={`d-block w-100 ${styles.carouselItemImg}`}
                              alt="Carousel Bootstrap First"
                              src="https://picsum.photos/720/1280"
                            />
                            <div
                              className={`carousel-caption ${styles.carouselCaption}`}
                            >
                              <h4 className={styles.carouselCaptionH4}>
                                Restaurant View
                              </h4>
                              <p className={styles.carouselCaptionP}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              className={`d-block w-100 ${styles.carouselItemImg}`}
                              alt="Carousel Bootstrap Second"
                              src="https://picsum.photos/800/502"
                            />
                            <div
                              className={`carousel-caption ${styles.carouselCaption}`}
                            >
                              <h4 className={styles.carouselCaptionH4}>
                                Printing and Typesetting
                              </h4>
                              <p className={styles.carouselCaptionP}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. standard dummy text
                                ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a
                                type specimen book.
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              className={`d-block w-100 ${styles.carouselItemImg}`}
                              alt="Carousel Bootstrap Second"
                              src="https://picsum.photos/720/1279"
                            />
                            <div
                              className={`carousel-caption ${styles.carouselCaption}`}
                            >
                              <h4 className={styles.carouselCaptionH4}>
                                Printing and Typesetting
                              </h4>
                              <p className={styles.carouselCaptionP}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. standard dummy text
                                ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a
                                type specimen book.
                              </p>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <img
                              className={`d-block w-100 ${styles.carouselItemImg}`}
                              alt="Carousel Bootstrap Second"
                              src="https://picsum.photos/720/1281"
                            />
                            <div
                              className={`carousel-caption ${styles.carouselCaption}`}
                            >
                              <h4 className={styles.carouselCaptionH4}>
                                Printing and Typesetting
                              </h4>
                              <p className={styles.carouselCaptionP}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. standard dummy text
                                ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a
                                type specimen book.
                              </p>
                            </div>
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carousel-554496"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <i
                            className={`fa-solid fa-square-caret-left ${styles.faSquareCaretLeft}`}
                          ></i>
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carousel-554496"
                          role="button"
                          data-bs-slide="next"
                        >
                          <i
                            className={`fa-solid fa-square-caret-right ${styles.faSquareCaretRight}`}
                          ></i>
                          <span className="visually-hidden">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebStoriesData;
