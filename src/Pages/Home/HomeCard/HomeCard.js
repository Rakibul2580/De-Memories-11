import React from "react";

const HomeCard = ({ service }) => {
  const { title, details, picture, price } = service;
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
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
    </div>
  );
};

export default HomeCard;
