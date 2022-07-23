import React from "react";
import { useState } from "react";
import logo from "../assets/netflix-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset <= 472 ? true : false);
    return () => (window.onscroll = null);
  };
  return (
    <div
      className={`px-8 pl-16 flex fixed w-full bg-black ${
        isScrolled ? "navbar" : "navbar-scrolled"
      }`}
    >
      <div className="flex w-full items-center h-20">
        <div className="flex-1">
          <img src={logo} alt="Background" className="w-30 h-32"></img>
        </div>
        <ul className="flex text-white text-xl  ">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1">
            <Link to="/home">Movies</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
