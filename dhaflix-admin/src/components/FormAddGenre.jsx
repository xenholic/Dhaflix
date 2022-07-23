import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addGenre } from "../store/actions/actionsGenre";

export default function AddGenre() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addGenreForm, setAddGenre] = useState({ name: "" });

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    dispatch(addGenre(addGenreForm));
    navigate("/genres");
  };

  return (
    <div>
      <form onSubmit={handleSubmitAdd}>
        <div className="mt-12 md:flex items-center px-6">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none">Name Genre</label>
            <input
              onChange={(e) => {
                setAddGenre({
                  ...addGenreForm,
                  name: e.target.value,
                });
              }}
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none p-3 border rounded border-gray-200"
              placeholder="Genre Name"
            />
          </div>
        </div>
        {/* end form */}
        <div className="pt-4 px-6">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center white:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white"
          >
            Add Genre
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
