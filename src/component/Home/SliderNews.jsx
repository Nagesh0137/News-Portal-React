import React, { useRef } from "react";
import Articles from "../../Data";
export default function SliderNews() {
  // Create a ref to access the marquee element
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    // Access the marquee element and stop it
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseOut = () => {
    // Access the marquee element and start it
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

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
                  <marquee
                    ref={marqueeRef} // Attach the ref to the marquee
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    className="news-content fw-bold"
                  >
                    {Articles.slice(0, 8).map((Articles, index) => (
                      <p key={index}>
                        <i className="fa-solid fa-circle me-2 text-danger"></i>
                        {Articles.headline}
                      </p>
                    ))}
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
