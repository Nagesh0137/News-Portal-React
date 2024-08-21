import React, { useState } from "react";
import ReadMoreBTN from "../Read more btn/ReadMoreBTN";
import styles from "./PaginatedCards.module.css";

const PaginatedCards = ({ paralimitedText, headlimitedText }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2;

  const cardData = [
    {
      id: 1,
      title: `${headlimitedText}`,
      imgSrc: "https://picsum.photos/800/500",
      text: `${paralimitedText}`,
    },
    {
      id: 2,
      title: `${headlimitedText}`,
      imgSrc: "https://picsum.photos/800/501",
      text: `${paralimitedText}`,
    },
    {
      id: 3,
      title: `${headlimitedText}`,
      imgSrc: "https://picsum.photos/800/502",
      text: `${paralimitedText}`,
    },
    {
      id: 4,
      title: `${headlimitedText}`,
      imgSrc: "https://picsum.photos/800/504",
      text: `${paralimitedText}`,
    },
  ];

  // Get the current cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid">
      <div className="row">
        {currentCards.map((card) => (
          <div
            key={card.id}
            data-aos="zoom-out"
            className="col-lg-6 col-md-6 col-sm-12"
          >
            <div className={`card shadow rounded-0 h-100 ${styles.card}`}>
              <img
                className={`card-img-top rounded-0 ${styles.imgFluid}`}
                src={card.imgSrc}
                alt="News"
              />
              <div className={`card-body ${styles.cardBody}`}>
                <div className="mb-2">
                  <a
                    className="badge bg-success text-uppercase font-weight-semi-bold p-2 me-2"
                    href="#"
                  >
                    Maharashtra
                  </a>
                  <a className="text-body me-2" href="#">
                    <i className="fa-solid fa-calendar-days me-1"></i>
                    <small>Jun 12, 2024</small>
                  </a>
                  <a className="underline-hover" href="#">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <small>Rohit Sharma</small>
                  </a>
                </div>
                <hr className="my-2" />
                <a
                  className={`h4 text-black text-uppercase font-weight-bold ${styles.cardTitle}`}
                  href="#"
                >
                  {card.title}
                </a>
                <p className={`card-text text-secondary ${styles.cardText}`}>
                  {card.text}
                </p>
                <ReadMoreBTN />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-lg d-flex justify-content-center mt-2">
        {[...Array(Math.ceil(cardData.length / cardsPerPage))].map(
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`btn p-0 px-2 ${
                index + 1 === currentPage ? "btn-primary" : "btn-secondary"
              } m-1 ${styles.paginationButton}`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default PaginatedCards;
