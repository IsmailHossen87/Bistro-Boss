import React, { useEffect, useState } from "react";
import Title from "./Title";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { IoMdQuote } from "react-icons/io";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div className="py-10">
      <Title heading="What out Client Say" subtitle="Testimonials"></Title>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div>
            {review?.map((reviews) => (
              <SwiperSlide  key={reviews._id}>
                <div className="md:mx-16 mx-9 px-4 my-10 flex flex-col items-center space-y-4 bg-slate-300 py-5 rounded-lg">
                  <Rating style={{ maxWidth: 180 }} value={reviews.rating} readOnly />
                  <IoMdQuote className="font-bold text-6xl"/>
                  <p>{reviews.details}</p>
                  <h3 className="text-2xl text-orange-400">{reviews.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
