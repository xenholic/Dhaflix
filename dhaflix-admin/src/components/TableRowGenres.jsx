import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteGenre } from "../store/actions/actionsGenre";

export default function MovieList({ genre }) {
  const dispatch = useDispatch();
  const deleteHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteGenre(id)).then((res) => {
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
        {genre.id}
      </th>
      <td className="px-6 py-4">{genre.name}</td>
      <td className="px-6 py-4">{genre.name}</td>
      <td className="flex justify-center px-6 py-4 text-right space-x-2">
        <Link
          to={`/editgenre/${genre.id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={(e) => deleteHandler(e, genre.id)}
          className="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
