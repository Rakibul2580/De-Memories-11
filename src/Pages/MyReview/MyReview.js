import React from "react";
import { useLoaderData } from "react-router-dom";

const MyReview = () => {
  const reviews = useLoaderData();
  return (
    <div>
      {reviews?.map((review) => (
        <div key={review?._id}>{review?.title}</div>
      ))}
    </div>
  );
};

export default MyReview;
