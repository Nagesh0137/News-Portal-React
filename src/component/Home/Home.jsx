import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeStyle.css";
import SliderNews from "./SliderNews";
import MainSlider from "./MainSlider";
import WebStories from "./WebStories";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main>
        <SliderNews></SliderNews>
        <div className="container-fluid overflow-hidden">
          <div className="row">
            <MainSlider></MainSlider>
            <WebStories></WebStories>
          </div>
        </div>
      </main>
    </>
  );
}
