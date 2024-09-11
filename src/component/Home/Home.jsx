import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeStyle.css";
import SliderNews from "./SliderNews";
import MainSlider from "./MainSlider";
import WebStories from "./WebStories";
import LatestNews from "./LatestNews";
import TrendingNews from "./TrendingNews";
import { ContextStore } from "../../Store/ContextStore";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const { handleCatagory } = useContext(ContextStore);
  return (
    <>
      <main>
        <SliderNews></SliderNews>
        <div className="container-fluid overflow-hidden">
          <div className="row">
            <MainSlider handleCatagory={handleCatagory}></MainSlider>
            <WebStories handleCatagory={handleCatagory}></WebStories>
            <LatestNews handleCatagory={handleCatagory}></LatestNews>
            <TrendingNews handleCatagory={handleCatagory}></TrendingNews>
          </div>
        </div>
      </main>
    </>
  );
}
