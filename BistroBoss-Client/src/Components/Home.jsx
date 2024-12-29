import React from "react";
import Banner from "./Banner";
import SwiperPagination from "./Swiper";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import Banner2 from "./Banner2";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <SwiperPagination></SwiperPagination>
      <Banner2></Banner2>
      <PopularMenu></PopularMenu>
      {/* tumi banaba ekta bg image er upor ekta card */}
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
