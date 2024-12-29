import React from "react";
import Banner from "./Banner";
import SwiperPagination from "./Swiper";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <SwiperPagination></SwiperPagination>
      {/* tumi banaba ekta bg image er upor ekta card */}
      <PopularMenu></PopularMenu>
      {/* tumi banaba ekta bg image er upor ekta card */}
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
