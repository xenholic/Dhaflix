import React from "react";
import Sidebar from "../components/Sidebar";
import GenreTable from "../components/GenreTable";

const HomePage = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <GenreTable />
    </div>
  );
};

export default HomePage;
