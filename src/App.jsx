import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
export default function App() {
  return (
    <>
      {/* <Home /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}
