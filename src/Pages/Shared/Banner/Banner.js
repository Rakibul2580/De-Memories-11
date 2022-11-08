import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ data }) => {
  const { img, title, details } = data;
  return (
    <div data-aos="fade-down-right" className="dark:text-gray-100">
      <div className="flex flex-col mx-auto overflow-hidden">
        <div
          style={{ backgroundImage: `url('${img}')` }}
          className={`saturate-20 bg-center bg-no-repeat bg-cover min-h-10/12`}
        >
          <div className="container right-0 flex flex-col items-center px-4 py-16 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-white">
              {title}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-white">
              {details}
            </p>
            <div className="flex flex-wrap justify-center">
              <Link
                to="/courses"
                className="bg-slate-400 px-8 py-3 m-2 text-lg font-semibold rounded dark:text-slate-900  duration-300 hover:bg-pink-400 hover:text-white"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;