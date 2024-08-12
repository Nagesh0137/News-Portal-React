import React, { useState } from "react";
import ReadMoreBTN from "../Read more btn/ReadMoreBTN";

const PaginatedCards = ({ paralimitedText, headlimitedText }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2;

  const cardData = [
    // Add your card data here
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

    // Add more cards as needed
  ];

  // Get the current cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="row">
      {currentCards.map((card) => (
        <div key={card.id} className="col-lg-6 mt-3">
          <div
            className="position-relative mb-3"
            style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
          >
            <img
              className="img-fluid w-100 shadow-sm"
              src={card.imgSrc}
              alt="News"
              style={{ aspectRatio: "3/2", objectFit: "cover", height: "100%" }}
            />
            <div className="bg-white border border-top-0 p-4 pt-2">
              <div className="mb-2">
                <a
                  className="badge text-uppercase font-weight-semi-bold p-2 mr-2"
                  href="#"
                  style={{ backgroundColor: "#019459", color: "white" }}
                >
                  maharashtra
                </a>
                <br></br>
                <a className="text-body m-2 " href="#">
                  <i className="fa-solid fa-calendar-days me-1"></i>
                  <small>Jun 12,2024</small>
                </a>

                <span className="underline-hover">
                  <i className="fa-solid fa-pen-to-square"></i>
                  <small>Rohit Sharama</small>
                </span>
              </div>
              <hr className="m-0 my-2" />
              <a
                className="h4 underline-hover d-block mb-3 text-black text-uppercase font-weight-bold"
                href="#"
              >
                {card.title}
              </a>
              <p className="m-0 underline-hover text-secondary">{card.text}</p>
              <ReadMoreBTN></ReadMoreBTN>
            </div>
          </div>
        </div>
      ))}
      <div className="pagination-lg">
        {[...Array(Math.ceil(cardData.length / cardsPerPage))].map(
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`btn ${
                index + 1 === currentPage ? "btn-primary" : "btn-secondary"
              } m-1`}
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
