import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieRow from "./TableRowMovies";
import { Link } from "react-router-dom";
import { fetchMovies } from "../store/actions/actionsMovie";

const MovieTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const movies = useSelector((state) => {
    return state.movies.movies;
  });

  return (
    <div className="w-full px-12">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="sm:flex items-center justify-between">
          <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white ">
            List Movies
          </p>
          <div className="mt-4 sm:mt-0">
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <Link
                to="/addmovie"
                className="text-sm font-medium leading-none text-white"
              >
                Add Movies
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Movie Title
              </th>
              <th scope="col" className="px-6 py-3">
                Trailer Url
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((el) => {
              return <MovieRow movie={el} key={el.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieTable;
