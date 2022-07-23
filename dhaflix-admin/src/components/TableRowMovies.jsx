import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../store/actions/actionsMovie";

export default function MovieList({ movie }) {
  const dispatch = useDispatch();
  const deleteHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteMovie(id)).then((res) => {
      if (!res.ok) {
        throw new Error("Internal server error");
      }
    });
  };
  return (
    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {movie.id}
      </th>
      <td className="px-6 py-4">{movie.title}</td>
      <td className="px-6 py-4">
        <a href={movie.trailerUrl}>Link Traler</a>
      </td>
      <td className="px-6 py-4">{movie.Genre.name}</td>
      <td className="px-6 py-4">{movie.User.username}</td>
      <td className="flex justify-center px-6 py-4 text-right space-x-2">
        <Link
          to={`/editmovie/${movie.id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={(e) => deleteHandler(e, movie.id)}
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
