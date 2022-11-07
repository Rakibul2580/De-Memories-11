import React, { useEffect, useState } from "react";
import Banner from "../Shared/Banner/Banner";
import HomeCard from "./HomeCard/HomeCard";

const Home = () => {
  const [services, setServices] = useState([]);
  const bannerData = {
    img: "https://i.ibb.co/nrcv1xw/01-Active-Box.jpg",
    title: "best music for coding developers",
    details:
      "Learning arbitrary coding concepts can get boring after some time.To keep your motivation up, think of all the things you ve alwayswanted to create.",
  };
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Banner data={bannerData}></Banner>
      <div className="mx-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services?.map((service) => (
          <HomeCard key={service._id} service={service}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
