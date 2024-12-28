import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import Title from "./Title";
const SwiperPagination = () => {
  return (
       <div className="my-8">
        <Title heading='from 10 am to 2 pm' subtitle='Order Online'></Title>
         <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <p className="text-white text-4xl text-center uppercase -mt-16 pb-7 mr-16">Salad</p>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <p className="text-white text-4xl text-center uppercase -mt-16 pb-7 mr-16">Soop</p>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <p className="text-white text-4xl text-center uppercase -mt-16 pb-7 mr-16">Pizza</p>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <p className="text-white text-4xl text-center uppercase -mt-16 pb-7 mr-16">Dissest</p>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <p className="text-white text-4xl text-center uppercase -mt-16 pb-7 mr-16">Salad</p>
        </SwiperSlide>

      </Swiper>
       </div>
  );
};

export default SwiperPagination;
