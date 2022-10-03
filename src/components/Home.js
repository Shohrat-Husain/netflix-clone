import React from "react";
import Navbar from "./Navbar";
import Hindi from "./Hindi";
import English from "./English";
import {Routes, Route } from "react-router-dom";
import Movies from "./Movies";
import HindiMovie from "./HindiMovie";

function Home() {
  return (
    <>
      <div className="home_top_background">
        <Navbar />

        <Routes>
          <Route path="/" element={<English />} />
          <Route path="/hindi" element={<Hindi />} />
          <Route path="/english-movies" element={<Movies />} />
          <Route path="/hindi-movies" element={<HindiMovie/>} />
        </Routes>

      </div>
    </>
  );
}

export default Home;
