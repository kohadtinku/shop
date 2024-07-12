import React, { useEffect } from "react";
import HeroSlider from "../components/sliders/HeroSlider";
import FeaturedSlider from "../components/sliders/FeaturedSlider";
import SectionsHead from "../components/common/SectionsHead";
import TopProducts from "../components/product/TopProducts";
import Services from "../components/common/Services";
import TopBarProducts from "../components/product/TopBarProducts";
import SwipperSlider from "../components/sliders/SwipperSlider";
import OurProducts from "../components/product/OurProducts";
import TopSlider from "../components/sliders/TopSlider";
import MainSlider from "../components/sliders/MainSlider";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      // easing: 'ease-in-out', // Animation easing
    });
  }, []);
  return (
    <>
      <main>
        <section
          className="topbarproducts"
          // style={{
          //   marginTop: "100px",
          // }}
        >
          {/* <MainSlider/> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
              marginTop: "100px",
            }}
            data-aos="fade-down"
          >
            <h1>Categories</h1>
            {/* <TopBarProducts/> */}
            <TopSlider />
          </div>
        </section>
        <section id="products" className="section">
          <div className="container" data-aos="zoom-in">
            {/* <SectionsHead heading="Top Products" /> */}
            {/* <TopProducts /> */}
            <OurProducts />
          </div>
        </section>
        <section id="hero" data-aos="fade-down">
          <HeroSlider />
        </section>

        <section id="featured" className="section">
          <div className="container" data-aos="zoom-in">
            <SectionsHead heading="Featured Products" />
            <FeaturedSlider />
          </div>
        </section>

        {/* <section id="featured" className="section">
                <div className="container">
                    <SectionsHead heading="Today Best Deals" />
                    <SwipperSlider />
                </div>
            </section> */}

        <Services />
      </main>

    
    </>
  );
};

export default Home;
