import React from "react";
import Sidebar from "../components/Sidebar";
import MovieTable from "../components/MovieTable";

const Dasboard = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <MovieTable />
    </div>
  );
};

export default Dasboard;
