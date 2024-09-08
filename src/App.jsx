import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import Footer from "./component/Footer/Footer";
import WebStoriesData from "./component/Web Stories/WebStoriesData";
import Category from "./component/Category/CategoryPage";
import BlogPage from "./component/Blog Page/BlogPage";
import ContextProvider, { ContextStore } from "./Store/ContextStore";
import Articles from "./Data";
export default function App() {
  const { params } = useParams();
  console.log(params);
  const location = useLocation();
  const { catagory } = useContext(ContextStore); // console.log(catagory);
  // console.log(catagory);
  // console.log(Articles);
  const findObjectById = (catagorys) => {
    return Articles.filter((object) => object.category === catagorys);
  };

  const object = findObjectById(catagory);
  // console.log(object);
  return (
    <>
      {location.pathname !== "/web_stories" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maharashtra" element={<Category object={object} />} />
        <Route path="/sport" element={<Category object={object} />} />
        <Route path="/lifestyle" element={<Category object={object} />} />
        <Route path="/entertainment" element={<Category object={object} />} />
        <Route path="/web_stories" element={<WebStoriesData />} />
        <Route path="/blog_page" element={<BlogPage />} />
      </Routes>
      {location.pathname !== "/web_stories" && <Footer />}
    </>
  );
}
