import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      {/* <Home /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
