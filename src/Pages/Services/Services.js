import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <PhotoProvider>
        <PhotoView
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBkqkOkb9_9iDex4-ptTAblZyLYEAx1HpK4g&usqp=CAU"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBkqkOkb9_9iDex4-ptTAblZyLYEAx1HpK4g&usqp=CAU"
            alt=""
          />
        </PhotoView>
      </PhotoProvider>
    </div>
  );
};

export default Services;
