import React, { useContext } from "react";
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
import { ContextStore } from "./Store/ContextStore";
import Articles from "./Data";
import Contact from "./component/Contact/Contact";
import About from "./component/About Us/About";
import PrivacyPolicy from "./component/Privacy Policy/Privacy";

export default function App() {
  const location = useLocation();
  const { categorys } = useParams();
  const { catagory } = useContext(ContextStore);

  const findObjectByCategory = (catagory) => {
    return Articles.filter((article) => article.category === catagory);
  };

  const matchedObject = findObjectByCategory(catagory);
  console.log(matchedObject);
  return (
    <>
      {location.pathname !== "/web_stories" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:category"
          element={<Category object={matchedObject} />}
        />
        <Route path="/web_stories" element={<WebStoriesData />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog_page" element={<BlogPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      </Routes>
      {location.pathname !== "/web_stories" && <Footer />}
    </>
  );
}
