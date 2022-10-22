import React from "react";
import { BsShop } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import Typical from "react-typical";

const Landing = () => {
  return (
    <>
      <main className="w-screen h-screen">
        <section className="flex justify-between items-center w-screen border-b-2 border-gray-200">
          <div className="p-5 py-5 flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-red-400 font-inter cursor-pointer">
              SmartBuy
            </h1>
          </div>
          <div className="">
            <ul className="flex gap-10 justify-between items-center font-inter mr-5">
              <li className="font-lg">
                <a href="/marketplace">Marketplace</a>
              </li>
              <li className="font-lg">
                <a href="/studio">Studio</a>
              </li>
              <a href="/register">
                <li className="">
                  <button className="p-2 px-5 shadow-md rounded-md font-inter text-gray-100 font-semibold bg-gradient-to-r from-red-500 to-red-400 hover:bg-red-700">
                    <a href="/register">Register</a>
                  </button>
                </li>
              </a>
            </ul>
          </div>
        </section>

        {/* Hero Section */}

        <section className="block justify-center my-20">
          <div className="mx-auto w-[90px] block gap-x-5 justify-center mb-5">
            <BsShop className="text-7xl text-red-400 font-semibold" />
          </div>
          <div className="mx-auto w-[850px] block gap-x-5 justify-center">
            <h3 className="hero-text text-6xl font-semibold leading-10 text-gray-500 font-inter break-normal text-center">
              Find all your favourite sellers on campus with{" "}
              <span className="text-red-400">
                <Typical
                  steps={[
                    "ease",
                    2000,
                    "minimal stress",
                    2000,
                    "convinience",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </span>
            </h3>
            <div className="flex justify-center my-10">
              <button className="p-3 shadow-md text-lg px-5 flex justify-center items-center gap-1 rounded-lg font-inter text-gray-100 font-semibold bg-gradient-to-r from-red-500 to-red-400 hover:bg-red-700">
                <Link to="/marketplace">Get started</Link>{" "}
                <IoArrowForward className="text-xl font-bold" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Landing;
