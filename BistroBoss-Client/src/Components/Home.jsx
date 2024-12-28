import React from 'react';
import Banner from './Banner';
import SwiperPagination from './Swiper';
import PopularMenu from './PopularMenu';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <SwiperPagination></SwiperPagination>
            {/* tumi banaba ekta bg image er upor ekta card */}
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;