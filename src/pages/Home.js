import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';
import Services from '../components/common/Services';
import TopBarProducts from '../components/product/TopBarProducts';
import SwipperSlider from '../components/sliders/SwipperSlider';


const Home = () => {

    return (
        <main>
{/* <section className='topbarproducts' style={{background:"#bcc8eb",height:"150px"}}>
    <TopBarProducts/>
</section> */}
            <section id="products" className="section">
                <div className="container">
                    {/* <SectionsHead heading="Top Products" /> */}
                    <TopProducts />
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

export default Home;;