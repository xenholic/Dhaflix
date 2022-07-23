import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../store/actions/actionUser";
import Swal from "sweetalert2";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputFormUser, setInputFormUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(inputFormUser))
      .then((res) => {
        if (!res.ok) {
          if (res.status === 400) {
            throw { name: "Please fill with right input" };
          }
          throw { name: "Internal server Error" };
        }
        return res.json();
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Register new Admin is success",
          text: "Welcome to DHafla Admin",
        });
        navigate("/");
      })
      .finally(() => {
        setInputFormUser({
          email: "",
          password: "",
          username: "",
          phoneNumber: "",
          address: "",
        });
      });
  };
  return (
    <div className="focus:outline-none w-full h-full bg-gradient-to-tl from-green-400 to-indigo-900 p-10">
      <div className="md:flex items-center border-b pb-6 border-gray-200"></div>
      <h1 className="focus:outline-none text-3xl font-bold text-white">
        Profile info
      </h1>
      <p className=" focus:outline-none text-sm font-light text-white mt-4">
        Fill in the data for profile. It will take a couple of minutes. <br />
        You only need a passport
      </p>
      <h2 className="focus:outline-none text-xl font-semibold leading-7 text-white mt-10">
        Personal data
      </h2>
      <p className="focus:outline-none text-sm font-light leading-none text-white mt-0.5">
        Your details and place of birth
      </p>
      <div className="mt-8 md:flex items-center">
        <div className="flex flex-col">
          <label className="mb-3 text-sm leading-none text-white">
            Username
          </label>
          <input
            onChange={(e) => {
              setInputFormUser({
                ...inputFormUser,
                username: e.target.value,
              });
            }}
            className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-black p-3 border rounded border-gray-200"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
          <label className="mb-3 text-sm leading-none text-white">
            Address
          </label>
          <input
            onChange={(e) => {
              setInputFormUser({
                ...inputFormUser,
                address: e.target.value,
              });
            }}
            className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-black p-3 border rounded border-gray-200"
            placeholder="Your address"
          />
        </div>
      </div>
      <div className="mt-12 md:flex items-center">
        <div className="flex flex-col">
          <label className="mb-3 text-sm leading-none text-white">
            Email Address
          </label>
          <input
            onChange={(e) => {
              setInputFormUser({
                ...inputFormUser,
                email: e.target.value,
              });
            }}
            className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-black p-3 border rounded border-gray-200"
            placeholder="your E-mail"
          />
        </div>
        <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
          <label className="mb-3 text-sm leading-none text-white">
            Phone number
          </label>
          <input
            onChange={(e) => {
              setInputFormUser({
                ...inputFormUser,
                phoneNumber: e.target.value,
              });
            }}
            className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-black p-3 border rounded border-gray-200"
            placeholder="+62"
          />
        </div>
      </div>
      <div className="mt-12 md:flex items-center">
        <div className="flex flex-col">
          <label className="mb-3 text-sm leading-none text-white">
            Password
          </label>
          <input
            onChange={(e) => {
              setInputFormUser({
                ...inputFormUser,
                password: e.target.value,
              });
            }}
            type="password"
            className="focus:outline-none focus:ring-2 focus:ring-indigo-400 w-64 bg-gray-100 text-sm font-medium leading-none text-black p-3 border rounded border-gray-200"
            placeholder="*******"
          />
        </div>
      </div>

      <div className="mt-12">
        <div className="py-4 flex items-center">
          <div className="bg-white dark:bg-white border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
            <input
              checked
              type="checkbox"
              className="focus:outline-none focus:ring-2 focus:ring-gray-700 checkbox focus:opacity-100 opacity-0 absolute cursor-pointer w-full h-full"
            />
            <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/form_layout-svg1.svg"
                alt="check-icon"
              ></img>
            </div>
          </div>
          <p className="focus:outline-none text-white text-sm leading-none ml-2">
            I agree with the{" "}
            <span className="text-indigo-700">terms of service</span>
          </p>
        </div>
      </div>

      <div className="mt-8 md:flex items-center">
        <button
          onClick={(e) => {
            handleRegister(e);
          }}
          className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        >
          Submit
          <img
            className="mt-1 ml-3"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/form_layout-svg2.svg"
            alt="arrow"
          ></img>
        </button>
        <Link
          to="/"
          className="flex md:ml-12 md:mt-0 mt-8 items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        >
          Home
          <img
            className="mt-1 ml-3"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/form_layout-svg2.svg"
            alt="arrow"
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default Login;
