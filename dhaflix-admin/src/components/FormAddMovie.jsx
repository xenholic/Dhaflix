import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchGenres } from "../store/actions/actionsGenre";
import { addMovie } from "../store/actions/actionsMovie";

export default function AddMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addmovieForm, setAddMovie] = useState({
    title: "",
    imgUrl: "",
    synopsis: "",
    rating: "",
    trailerUrl: "",
    GenreId: 0,
    nameCast1: "",
    nameCast2: "",
    imgCast1: "",
    imgCast2: "",
  });

  const genres = useSelector((state) => {
    return state.genres.genres;
  });

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    // console.log(addmovieForm, "ini tes data");
    dispatch(addMovie(addmovieForm));
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmitAdd}>
        <div className="mt-12 md:flex items-center px-6">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none">Movie Title</label>
            <input
              onChange={(e) => {
                setAddMovie({
                  ...addmovieForm,
                  title: e.target.value,
                });
              }}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Title"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none ">Image Url</label>
            <input
              onChange={(e) => {
                setAddMovie({
                  ...addmovieForm,
                  imgUrl: e.target.value,
                });
              }}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Image Url"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none ">Synopsis</label>
            <input
              onChange={(e) => {
                setAddMovie({
                  ...addmovieForm,
                  synopsis: e.target.value,
                });
              }}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="+Synopsis"
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center px-6">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none">Rating</label>
            <input
              onChange={(e) => {
                setAddMovie({
                  ...addmovieForm,
                  rating: e.target.value,
                });
              }}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Rating Movie"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none ">Trailer Url</label>
            <input
              onChange={(e) => {
                setAddMovie({
                  ...addmovieForm,
                  trailerUrl: e.target.value,
                });
              }}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Trailer Url"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none ">Genre</label>
            <select
              onChange={(e) => {
                setAddMovie({
                  ...addmovieForm,
                  GenreId: e.target.value,
                });
              }}
            >
              <option value="0" hidden disable>
                Select the Genre for movie
              </option>
              {genres.map((el) => {
                return (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="mt-12 md:flex items-center px-6">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none">Cast Name 1</label>
            <input
              onChange={(e) => {
                setAddMovie({
                  ...addmovieForm,
                  nameCast1: e.target.value,
                });
              }}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Cast Name"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none ">
              Profile Picture Cast 1
            </label>
            <input
              onChange={(e) => {
                setAddMovie({
                  ...addmovieForm,
                  imgCast1: e.target.value,
                });
              }}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Profile Pic Url"
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center px-6">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none">Cast Name 2</label>
            <input
              onChange={(e) => {
                setAddMovie({
                  ...addmovieForm,
                  nameCast2: e.target.value,
                });
              }}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Cast Name"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none ">
              Profile Picture Cast 2
            </label>
            <input
              onChange={(e) => {
                setAddMovie({
                  ...addmovieForm,
                  imgCast2: e.target.value,
                });
              }}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Profile Pic Url"
            />
          </div>
        </div>
        {/* end form */}
        <div className="pt-4 px-6">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center white:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white"
          >
            Add Movies
          </button>
          <Link
            to="/"
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
