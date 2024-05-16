import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styles/mainslider.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const MainSlider=()=> {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="customSwiper"
      >
        <SwiperSlide className="customSwiperSlide">Slide 1</SwiperSlide>
        <SwiperSlide className="customSwiperSlide">Slide 2</SwiperSlide>
        <SwiperSlide className="customSwiperSlide">Slide 3</SwiperSlide>

      </Swiper>
    </>
  );
}
export default MainSlider