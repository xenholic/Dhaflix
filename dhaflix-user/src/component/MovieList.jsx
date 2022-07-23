import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchMovies from "../store/actions/actionMovie";
import CardPage from "./CardPage";

export default function MovieCard() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => {
    return state.movies.movies;
  });

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-4 gap-1 pt-24">
      {movies.map((el) => {
        return <CardPage movie={el} key={el.id} />;
      })}
    </div>
  );
}
