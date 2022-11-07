import React from "react";
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
    </div>
  );
};

export default Services;
