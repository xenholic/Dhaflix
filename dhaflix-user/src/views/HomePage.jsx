import React from "react";
import Navbar from "../component/Navbar";
import MovieCard from "../component/MovieList";

const HomePage = () => {
  return (
    <div className="bg-black">
      <div>
        <Navbar />
      </div>
      <MovieCard />;
    </div>
  );
};

export default HomePage;
