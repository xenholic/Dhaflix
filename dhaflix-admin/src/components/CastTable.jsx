import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCasts } from "../store/actions/actionsCast";
import CastRow from "./TableRowCast";

const CastTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCasts());
  }, []);

  const casts = useSelector((state) => {
    console.log(state.casts.casts);
    return state.casts.casts;
  });
  return (
    <div className="w-full px-12">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="sm:flex items-center justify-between">
          <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white ">
            List Cast
          </p>
          <div className="mt-4 sm:mt-0"></div>
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
                Profile Pic
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Movie
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {casts.map((el) => {
              return <CastRow cast={el} key={el.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CastTable;
