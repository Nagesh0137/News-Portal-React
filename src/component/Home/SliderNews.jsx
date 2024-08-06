import React from "react";

export default function SliderNews() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="ticker bg-white overflow-hidden">
                <div className="title bg-org rounded-0 rounded-end-3">
                  <h5 className="text-white fw-bolder fs-4 m-0 h-100 p-0">
                    Breaking News
                  </h5>
                </div>
                <div className="news bg-white">
                  <marquee className="news-content fw-bold">
                    <p className="">
                      <i className="fa-solid fa-circle me-2 text-danger"></i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                    <p>
                      <i className="fa-solid fa-circle text-danger me-2"></i>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto
                    </p>
                    <p>
                      <i className="fa-solid fa-circle text-danger me-2"></i>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam
                    </p>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
