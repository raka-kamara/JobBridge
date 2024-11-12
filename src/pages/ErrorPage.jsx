import React from "react";
import img from "../assets/ErrorPage.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className=" h-[100vh] bg-cover  flex justify-center md:justify-end md:pr-20 items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div>
        <div className="card bg-blue-950 opacity-95 w-[400px] shadow-xl">
          <div className="card-body text-white ">
            <h1 className="text-2xl font-bold text-center text-red-600 uppercase">404 error!</h1>
            <h2 className="card-title text-5xl">OH NO!<span className="text-xl text-red-600">But that's okay!</span></h2>
            <p>Even cool people lose their way online at some point! Don't worry, You'll find your way back</p>
            <div className="card-actions justify-center">
              <Link to="/"><button className="p-3 hover:bg-transparent hover:scale-105 rounded-2xl bg-red-600 border border-red-600 text-white transition duration-300 ease-in-out  hover:shadow-lg ">Back to Home</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;