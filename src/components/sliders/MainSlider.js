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
import sliderData from '../../data/sliderData';

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
         {sliderData.map(item => (
        <SwiperSlide key={item.id}>
          <a href={item.path}>
            <img src={item.img} alt={`Slide ${item.id}`} />
          </a>
        </SwiperSlide>
      ))}

      </Swiper>
    </>
  );
}
export default MainSlider