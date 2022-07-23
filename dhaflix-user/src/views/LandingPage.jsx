import React from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

// import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div>
      <main
        className={"min-h-screen py2"}
        style={{
          backgroundImage:
            "linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), url(https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/226e5fad-8b2f-47b6-bf0f-bc07efcd9a08/FR-fr-20220425-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
        }}
      >
        <Navbar />
        <div
          className={
            "min-h-screen flex flex-col items-center justify-center border-b-blue-200"
          }
        >
          <h2
            className={
              "text-5xl items-center justify-center px-20 text-center text-white font-bold mt-4 mb-8 max-w-2xl"
            }
          >
            Unlimited movies, Dagelan, Drakor Plastik, and more.
          </h2>

          <h3 className={"text-2xl text-white  my-4"}>
            Watch anywhere. But you cant cancel anytime.
          </h3>
          <p className={"text-1xl font-bold text-white "}>
            Ready to watch? Enter your email to make me rich more and more.
          </p>

          <div className={"flex mt-4"}>
            <Link
              to="/home"
              className={
                "rounded-full font-bold bg-red-500 text-white text-lg px-8 my-2"
              }
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
