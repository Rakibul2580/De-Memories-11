import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ service }) => {
  const { title, details, picture, price } = service;
  return (
    <>
      {/* <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={picture}
          alt=""
          className="saturate-200 object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
            <p className="dark:text-gray-100">{details.slice(0, 100)}...</p>
            <p className="dark:text-red-400">Price : {price}</p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Read more
          </button>
        </div>
      </div> */}
      <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
        <div className="relative w-full h-48">
          <img
            src={picture}
            className="object-cover w-full h-full rounded-t"
            alt="Plan"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
          <div>
            <div className="text-xl font-bold">{title}</div>
            <p className="text-sm my-3 text-gray-900">
              {details.slice(0, 100)} . . . .
            </p>
            <div className="mt-1 mb-4 text-red-300 mr-1 text-xl font-medium sm:text-2xl">
              Price: ${price}
            </div>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium bg-teal-400 tracking-wide transition duration-200 rounded shadow-md hover:bg-teal-300"
          >
            Buy Basic
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
