// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './slider.css';
// import topdata from '../../data/TopData';

// const TopSlider = () => {
//   return (
//     <Swiper
//       slidesPerView={1}
//       spaceBetween={1}
//       pagination={{ clickable: true }}
//       breakpoints={{
//         320: {
//           slidesPerView: 2,
//           spaceBetween: 5,
//         },
//         480: {
//           slidesPerView: 2,
//           spaceBetween: 10,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 15,
//         },
//         1024: {
//           slidesPerView: 7,
//           spaceBetween: 20,
//         },
//       }}
//       className="mySwiper"
//     >
//       {topdata.map((item) => (
//         <SwiperSlide key={item.id}>
//           <div className="custom_product" style={{ alignItems: 'center' }}>
//             <div className="rounded">
//               <a href={item.href}>
//                 <img src={item.img} alt={item.title} style={{ height: '100px', width: '100px' }} />
//               </a>
//             </div>
//             <h3>{item.title}</h3>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default TopSlider;




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import topdata from '../../data/TopData';

const TopSlider = () => {
  return (
    

    <Swiper
      slidesPerView={1}
      spaceBetween={1}
      pagination={{ clickable: true }}
      // navigation={true}
      autoplay={true}
      loop={true} // Enable infinite loop
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
      className="custom-swiper" // Change the class name to 'custom-swiper'
         style={{height:"180px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      {topdata.map((item) => (
        <SwiperSlide key={item.id} className="custom-swiper-slide"> {/* Change the class name to 'custom-swiper-slide' */}
          <div className="custom_product">
            <div className="rounded">
              <a href={item.href}>
                <img src={item.img} className='custom_img' alt={item.title} style={{ height: '100px', width: '100px' }} />
              </a>
            </div>
            <h3 className='c-text' style={{fontSize:"18px"}}>{item.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
   
  );
};

export default TopSlider;




// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './slider.css';
// import topdata from '../../data/TopData';

// const TopSlider = () => {
//   return (
//     <Swiper
//       slidesPerView={1}
//       spaceBetween={1}
//       pagination={{ clickable: true }}
//       navigation={true}
//       autoplay={true}
//       loop={true} // Enable infinite loop
//       breakpoints={{
//         320: {
//           slidesPerView: 3,
//           spaceBetween: 5,
//         },
//         480: {
//           slidesPerView: 3,
//           spaceBetween: 10,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 15,
//         },
//         1024: {
//           slidesPerView: 6,
//           spaceBetween: 20,
//         },
//       }}
//       className="custom-swiper"
//       style={{
//         height: "180px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center"
//       }}
//     >
//       {topdata.map((item) => (
//         <SwiperSlide key={item.id} className="custom-swiper-slide">
//           <div className="custom-product">
//             <div className="rounded">
//               <a href={item.href}>
//                 <img
//                   src={item.img}
//                   className="custom-img"
//                   alt={item.title}
//                   style={{ height: '100px', width: '100px' }}
//                 />
//               </a>
//             </div>
//             <h3 className="c-text" style={{ fontSize: "18px" }}>
//               {item.title}
//             </h3>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default TopSlider;
