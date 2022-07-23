import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./views/DetailPage";
import HomePage from "./views/HomePage";
import LandingPage from "./views/LandingPage"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/movie/:slug" element={<DetailPage />} />
      </Routes>
    </div>
  )
}

export default App;