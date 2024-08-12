import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Maharastra from "./component/Category/Maharastra";
import WebStoriesData from "./component/Web Stories/WebStoriesData";
export default function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/web_stories" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maharashtra" element={<Maharastra />} />
        <Route path="/web_stories" element={<WebStoriesData />} />
      </Routes>
      {location.pathname !== "/web_stories" && <Footer />}
    </>
  );
}
