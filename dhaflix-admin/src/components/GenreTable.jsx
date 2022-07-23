import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../store/actions/actionsGenre";
import GenreRow from "./TableRowGenres";
import { Link } from "react-router-dom";

const GenreTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  const genres = useSelector((state) => {
    return state.genres.genres;
  });
  return (
    <div className="w-full px-12">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="sm:flex items-center justify-between">
          <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white ">
            List Genre Movie
          </p>
          <div className="mt-4 sm:mt-0">
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <Link
                to="/addGenre"
                className="text-sm font-medium leading-none text-white"
              >
                Add Genre
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
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {genres.map((el) => {
              return <GenreRow genre={el} key={el.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenreTable;
