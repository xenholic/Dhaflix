import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editGenre, fetchGenreId } from "../store/actions/actionsGenre";

export default function AddGenre() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const genreById = useSelector((state) => {
    return state.genres.genre;
  });

  const inputdata = genreById[0];
  const [editGenreForm, setEditGenre] = useState({ name: "" });

  useEffect(() => {
    dispatch(fetchGenreId(id));
  }, [dispatch]);

  useEffect(() => {
    if (inputdata) {
      setEditGenre({
        name: inputdata.name,
      });
    }
  }, [genreById]);

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(editGenre(e));
    navigate("/genres");
  };

  return (
    <div>
      <form>
        <div className="mt-12 md:flex items-center px-6">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none">Name Genre</label>
            <input
              onChange={(e) => {
                setEditGenre({
                  ...editGenreForm,
                  name: e.target.value,
                });
              }}
              value={editGenreForm.name}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Genre Name"
            />
          </div>
        </div>
        {/* end form */}
        <div className="pt-4 px-6">
          <button
            onClick={(e) => handleSubmitEdit(e)}
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center white:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white"
          >
            Edit Genre
          </button>
          <Link
            to="/genres"
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
