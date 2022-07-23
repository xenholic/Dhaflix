import { useDispatch } from "react-redux";
import { deleteCast } from "../store/actions/actionsCast";

export default function MovieList({ cast }) {
  const dispatch = useDispatch();
  const deleteHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteCast(id));
  };
  return (
    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {cast.id}
      </th>
      <td className="px-6 py-4">{cast.profilePict}</td>
      <td className="px-6 py-4">{cast.name}</td>
      <td className="px-6 py-4">{cast.Movie.title}</td>
      <td className="flex justify-center px-6 py-4 text-right space-x-2">
        <button
          onClick={(e) => deleteHandler(e, cast.id)}
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
