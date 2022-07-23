import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../component/Navbar";
import fetchMovieBySlug from "../store/actions/actionMovieSlug";
import { useParams } from "react-router";

export default function DetailPage() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const movie = useSelector((state) => {
    return state.movies.movie;
  });

  useEffect(() => {
    dispatch(fetchMovieBySlug(slug));
  });
  return (
    <div>
      <Navbar />
      <div className="bg-black py-24">
        {/* // gallery */}
        <div className="pt-6">
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img
                src={movie.imgUrl}
                alt="Model wearing plain white basic tee."
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {movie.title}
              </h1>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {movie.slug}
              </h1>
            </div>
            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div>
                <h3 className="sr-only">Sypnosis</h3>
                <div className="space-y-6">
                  <p className="text-base text-white">{movie.synopsis}</p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-medium text-white">Highlights</h3>
                <div className="mt-4">
                  <ul className="pl-4 list-disc text-sm space-y-2">
                    <li className="text-white">
                      <label>Genre : </label>
                      <span className="text-white">{movie.GenreId}</span>
                    </li>
                    <li className="text-white">
                      <label>Rating : </label>
                      <span className="text-white">{movie.rating}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
