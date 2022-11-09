import React, { useContext, useEffect, useState } from "react";
import toast, { ToastBar } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooke/useTitle";

const MyReview = () => {
  useTitle("MyReview");
  const [reviews, setReviews] = useState([]);
  const [render, setRender] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews/${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, [user?.email, render]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/reviewdelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Deleted successfully");
        setRender((render) => !render);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {reviews[0]?._id ? (
        <>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 row-gap-5 md:grid-cols-2">
              {reviews?.map((review) => (
                <div
                  key={review?._id}
                  className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl"
                >
                  <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
                    <div className="mb-6 mr-6 lg:mb-0">
                      <div className="flex items-center justify-center w-24 h-24 rounded-full  ">
                        {/* <svg
                      className="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg> */}
                        <img
                          src={review?.serviceImg}
                          className="w-full h-full lg:w-24 lg:h-24 rounded-md"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <h6 className="mb-2 font-semibold leading-5">
                          {review?.title}
                        </h6>
                        <p className="mb-2 text-sm text-gray-900">
                          {review?.review}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(review?._id)}
                        className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-5xl text-yellow-500">test</h1>
        </>
      )}
    </div>
  );
};

export default MyReview;
