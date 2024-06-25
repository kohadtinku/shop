import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
// import productsData from '../../data/productsData';
import ProductCard from '../product/ProductCard';
import {
    mobileData,
    earbudsData,
    earphoneData,
    laptopData,
    tvData,
    headphoneData,
    neckbandData
  } from "../../data/productsData";
  
  import 'swiper/scss';
  import 'swiper/scss/pagination';
  import AOS from "aos";
  import "aos/dist/aos.css";
  
  const allProductsData = [
    ...mobileData,
    ...earbudsData,
    ...earphoneData,
    ...laptopData,
    ...tvData,
    ...headphoneData,
    ...neckbandData
  ];


const RelatedSlider = (props) => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration
          // easing: 'ease-in-out', // Animation easing
        
        });
      }, []);

    const { category } = props;

    const relatedProduct = allProductsData.filter(item => item.category === category);

    return (
        <Swiper
        data-aos="fade-down"
            modules={[Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            breakpoints={{
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 4,
                },
            }}
            className="related_swiper"
        >
            {
                relatedProduct.map(item => (
                    <SwiperSlide key={item.id}>
                        <ProductCard {...item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default RelatedSlider;