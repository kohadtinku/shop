import React, { useEffect } from 'react';
import servicesData from '../../data/servicesData';
import SectionsHead from './SectionsHead';
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      // easing: 'ease-in-out', // Animation easing
    
    });
  }, []);
  return (
    <>
      <section id="services" className="section" data-aos="fade-right">
        <div className="container">
          <SectionsHead heading="Our Advantages" />
          <div className="wrapper services_wrapper">
            {
              servicesData.map((item) => {
                const { id, icon, title, info } = item;

                return (
                  <div className="services_card" key={id}>
                    <div className="services_icon">{icon}</div>
                    <div className="services_details">
                      <h4>{title}</h4>
                      <p>{info}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;