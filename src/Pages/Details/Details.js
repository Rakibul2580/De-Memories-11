import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const service = useLoaderData();
  const { details, picture, price, title } = service;

  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-100">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={picture}
          alt=""
          className="saturate-200 w-full h-60 sm:h-96 dark:bg-gray-500 rounded-md"
        />
        <div className="z-10 rounded-md p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
          <div className="space-y-2">
            <h1 className="inline-block text-2xl font-semibold sm:text-3xl">
              {title}
            </h1>
          </div>
          <div className="dark:text-gray-100">
            <p>{details}</p>
            <p className="mt-5">Price: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
