import React from "react";
import Sidebar from "../components/Sidebar";
import Cast from "../components/CastTable";

const HomePage = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <Cast />
    </div>
  );
};

export default HomePage;
