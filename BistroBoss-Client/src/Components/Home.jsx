import React from "react";
import Banner from "./Banner";
import SwiperPagination from "./Swiper";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Banner></Banner>
      <SwiperPagination></SwiperPagination>
      <PopularMenu></PopularMenu>
      {/* tumi banaba ekta bg image er upor ekta card */}
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
