import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/actionUser";
import Swal from "sweetalert2";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const inputDatahandler = (e) => {
    e.preventDefault();
    const newLogin = {
      ...formLogin,
    };
    newLogin[e.target.name] = e.target.value;
    setFormLogin(newLogin);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(formLogin))
      .then((res) => {
        if (!res.ok) {
          throw { name: `Wrong Email or Password` };
        }
        return res.json();
      })
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Thank you Login is success",
          text: "Welcome to DHafla Admin",
        });

        localStorage.setItem("access_token", data.access_token);
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.name,
        });
        console.log(err);
      })
      .finally(() => {
        setFormLogin({
          email: "",
          password: "",
        });
      });
  };

  return (
    <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
            Login to your account
          </p>
          <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
            Dont have account?{" "}
            <a
              href="#2"
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
            >
              {" "}
              Sign up here
            </a>
          </p>
          <button
            aria-label="Continue with google"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
              alt="google"
            ></img>
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
          <button className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
              alt="github"
            ></img>
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Github
            </p>
          </button>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400"></hr>
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  "></hr>
          </div>
          <div>
            <label className="text-sm font-medium leading-none text-gray-800">
              Email
            </label>
            <input
              value={formLogin.email}
              onChange={inputDatahandler}
              name="email"
              type="email"
              className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <label className="text-sm font-medium leading-none text-gray-800">
              Password
            </label>
            <div className="relative flex items-center justify-center">
              <input
                value={formLogin.password}
                onChange={inputDatahandler}
                name="password"
                type="password"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
          </div>
          <div className="mt-8 w-full">
            <button
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 rounded hover:bg-indigo-600 py-4 px-4 w-full "
              onClick={(e) => submitHandler(e)}
            >
              Login
            </button>
          </div>
          <div className="mt-8"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
