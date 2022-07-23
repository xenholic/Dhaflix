import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardPage({ movie }) {
  const navigate = useNavigate();
  const handleDetail = (slug) => {
    navigate(`/movie/${slug}`, { state: { data: movie } });
  };
  return (
    <div className="swiper-button swiper-button-prev group flex items-start">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          onClick={() => handleDetail(movie.slug)}
          className="w-full transition-colors duration-200 hover:text-white md:text-2xl cursor-pointer"
          src={movie.imgUrl}
          alt="Sunset in the mountains"
        ></img>

        <div className=" px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{movie.title}</div>
          <p className="text-white text-base">{movie.synopsis}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className=" bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mb-2">
            <span>{movie.rating}</span>
            <button
              onClick={() => handleDetail(movie.slug)}
              className="btn btn-card"
            >
              See Details
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
