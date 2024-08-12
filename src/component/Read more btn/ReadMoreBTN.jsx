import React from "react";
import styles from "./ReadMorebtn.css";

export default function ReadMoreBTN() {
  return (
    <>
      <div className="read-more-btn d-flex justify-content-center">
        <button className="text-black mt-2 ">
          Read More
          <div id="clip">
            <div id="leftTop" className="corner"></div>
            <div id="rightBottom" className="corner"></div>
            <div id="rightTop" className="corner"></div>
            <div id="leftBottom" className="corner"></div>
          </div>
          <span id="rightArrow" className="arrow"></span>
          <span id="leftArrow" className="arrow"></span>
        </button>
      </div>
    </>
  );
}
