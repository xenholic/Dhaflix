import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchGenres } from "../store/actions/actionsGenre";
import { editMovie, fetchMovieById } from "../store/actions/actionsMovie";

export default function EditMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id, "dari edit");

  const [editMovieForm, setEditMovie] = useState({
    title: "",
    imgUrl: "",
    synopsis: "",
    rating: "",
    trailerUrl: "",
    GenreId: 0,
  });

  const movieById = useSelector((state) => {
    console.log(state);
    return state.movies.movie;
  });

  const genres = useSelector((state) => {
    return state.genres.genres;
  });

  const inputData = movieById[0];

  useEffect(() => {
    if (inputData) {
      setEditMovie({
        title: inputData.title,
        synopsis: inputData.synopsis,
        trailerUrl: inputData.trailerUrl,
        imgUrl: inputData.imgUrl,
        rating: inputData.rating,
        GenreId: inputData.Genre.id,
      });
    }
  }, [movieById]);

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(editMovie(editMovieForm, id));
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchMovieById(id));
    dispatch(fetchGenres());
  }, [dispatch]);
  return (
    <div>
      <form>
        <div className="mt-12 md:flex items-center px-6">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none">Movie Title</label>
            <input
              onChange={(e) => {
                setEditMovie({
                  ...editMovieForm,
                  title: e.target.value,
                });
              }}
              value={editMovieForm.title}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Title"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none ">Image Url</label>
            <input
              onChange={(e) => {
                setEditMovie({
                  ...editMovieForm,
                  imgUrl: e.target.value,
                });
              }}
              value={editMovieForm.imgUrl}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Image Url"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none ">Synopsis</label>
            <input
              onChange={(e) => {
                setEditMovie({
                  ...editMovieForm,
                  synopsis: e.target.value,
                });
              }}
              value={editMovieForm.synopsis}
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
                setEditMovie({
                  ...editMovieForm,
                  rating: e.target.value,
                });
              }}
              value={editMovieForm.rating}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Rating Movie"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none ">Trailer Url</label>
            <input
              onChange={(e) => {
                setEditMovie({
                  ...editMovieForm,
                  trailerUrl: e.target.value,
                });
              }}
              value={editMovieForm.trailerUrl}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Trailer Url"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none ">Genre</label>
            <select
              onChange={(e) => {
                setEditMovie({
                  ...editMovieForm,
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
        {/* end form */}
        <div className="pt-4 px-6">
          <button
            onClick={(e) => handleSubmitEdit(e)}
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center white:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white"
          >
            Edit Movies
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
