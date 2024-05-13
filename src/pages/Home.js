import React from "react";
import HeroSlider from "../components/sliders/HeroSlider";
import FeaturedSlider from "../components/sliders/FeaturedSlider";
import SectionsHead from "../components/common/SectionsHead";
import TopProducts from "../components/product/TopProducts";
import Services from "../components/common/Services";
import TopBarProducts from "../components/product/TopBarProducts";
import SwipperSlider from "../components/sliders/SwipperSlider";
import OurProducts from "../components/product/OurProducts";
import TopSlider from "../components/sliders/TopSlider";

const Home = () => {
  return (
    <main>
      <section
        className="topbarproducts"
        style={{
          marginTop: "100px",
        }}
      >
        <div style={{display:"flex",
        justifyContent:"center",alignItems:"center","flexDirection":"column",gap:"2rem"}}>
          <h1>Categories</h1>
          {/* <TopBarProducts/> */}
          <TopSlider />
        </div>
      </section>
      <section id="products" className="section">
        <div className="container">
          {/* <SectionsHead heading="Top Products" /> */}
          {/* <TopProducts /> */}
          <OurProducts />
        </div>
      </section>
      <section id="hero">
        <HeroSlider />
      </section>

      <section id="featured" className="section">
        <div className="container">
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
  );
};

export default Home;
