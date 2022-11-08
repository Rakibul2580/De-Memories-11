import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName, photoURL } = user;
  console.log(user);
  const service = useLoaderData();
  const { details, picture, price, title } = service;

  const handleReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const reviewInfo = {
      review,
      title,
      email,
      displayName,
      photoURL,
    };
  };

  return (
    <div>
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

      <div>
        <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            {user?.email ? (
              <>
                <section className="p-6 dark:text-gray-100">
                  <form
                    onSubmit={handleReview}
                    noValidate=""
                    className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid"
                  >
                    <h2 className="w-full text-3xl font-bold leading-tight">
                      Contact us
                    </h2>
                    <div>
                      <label htmlFor="message" className="block mb-1 ml-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        type="text"
                        name="review"
                        placeholder="Add Review"
                        className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </section>
              </>
            ) : (
              <Link to="/login">Please Login</Link>
            )}
          </div>
          <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
            <article>
              <h2 className="text-xl font-bold">
                Sed diam massa, semper a condimentum
              </h2>
              <p className="mt-4 dark:text-gray-400">
                Morbi porttitor mi in diam scelerisque commodo. Proin sed
                laoreet libero. Fusce faucibus porttitor lacus, at blandit
                mauris blandit eget. Donec facilisis lorem et risus commodo,
                quis auctor nulla varius. Pellentesque facilisis feugiat turpis,
                id molestie augue semper quis. Nunc ornare eget est sit amet
                elementum.
              </p>
              <div className="flex items-center mt-8 space-x-4">
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  className="w-10 h-10 rounded-full dark:bg-gray-500"
                />
                <div>
                  <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                  <time
                    dateTime="2021-02-18"
                    className="text-sm dark:text-gray-400"
                  >
                    Feb 18th 2021
                  </time>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;
