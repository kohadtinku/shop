// import React, { useEffect, useState } from "react";
// import reviewsData from "../../data/reviewsData";
// import useActive from "../../hooks/useActive";
// import ProductReviews from "./ProductReviews";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import productsData from "../../data/productsData";

// const ProductSummary = (props) => {
//   const [products, setProducts] = useState(productsData);
//   useEffect(() => {
//     AOS.init({
//       duration: 2000, // Animation duration
//       // easing: 'ease-in-out', // Animation easing
//     });
//   }, []);
//   const { brand, title, info, category, type, connectivity,ram,internal,color_varient } = props;

//   const { active, handleActive, activeClass } = useActive("specs");

//   return (
//     <>
//       <section id="product_summary" className="section" data-aos="zoom-in">
//         <div className="container">
//           {/*===== Product-Summary-Tabs =====*/}
//           <div className="prod_summary_tabs">
//             <ul className="tabs">
//               <li
//                 className={`tabs_item ${activeClass("specs")}`}
//                 onClick={() => handleActive("specs")}
//               >
//                 Specifications
//               </li>
//               <li
//                 className={`tabs_item ${activeClass("overview")}`}
//                 onClick={() => handleActive("overview")}
//               >
//                 Overview
//               </li>
//               <li
//                 className={`tabs_item ${activeClass("reviews")}`}
//                 onClick={() => handleActive("reviews")}
//               >
//                 Reviews
//               </li>
//             </ul>
//           </div>

//           {/*===== Product-Summary-Details =====*/}
//           <div className="prod_summary_details">
//             {active === "specs" ? (
//               <div className="prod_specs">
//                 {/* <ul>
//                                         <li>
//                                             <span>Brand</span>
//                                             <span className='custom-span' style={{textAlign:"start"}}>{brand}</span>
//                                         </li>
//                                         <li>
//                                             <span>Model</span>
//                                             <span>{title}</span>
//                                         </li>
//                                         <li>
//                                             <span>Generic Name</span>
//                                             <span>{category}</span>
//                                         </li>
//                                         <li>
//                                             <span>Headphone Type</span>
//                                             <span>{type}</span>
//                                         </li>
//                                         <li>
//                                             <span>Connectivity</span>
//                                             <span>{connectivity}</span>
//                                         </li>
//                                         <li>
//                                             <span>Microphone</span>
//                                             <span>Yes</span>
//                                         </li>
//                                     </ul> */}

//                 <table className="product-details-table">
//                   <tbody>
//                     <tr>
//                       <td>Brand</td>
//                       <td className="custom-td">{brand}</td>
//                     </tr>
//                     <tr>
//                       <td>Model</td>
//                       <td>{title}</td>
//                     </tr>
//                     <tr>
//                       <td>Generic Name</td>
//                       <td>{category}</td>
//                     </tr>
//                     <tr>
//                       <td>Headphone Type</td>
//                       <td>{type}</td>
//                     </tr>
//                     <tr>
//                       <td>Connectivity</td>
//                       <td>{connectivity}</td>
//                     </tr>
//                     <tr>
//                       <td>Microphone</td>
//                       <td>Yes</td>
//                     </tr>
//                     <tr>
//                       <td>RAM</td>
//                       <td>{ram}</td>
//                     </tr>
//                     <tr>
//                       <td>Internal</td>
//                       <td>{internal}</td>
//                     </tr>
//                     <tr>
//                       <td>Color varient</td>
//                       <td>{color_varient}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             ) : active === "overview" ? (
//               <div className="prod_overview">
//                 <h3>
//                   The <span>{title}</span> {info} provides with fabulous sound
//                   quality
//                 </h3>
//                 <ul>
//                   <li>Sound Tuned to Perfection</li>
//                   <li>Comfortable to Wear</li>
//                   <li>Long Hours Playback Time</li>
//                 </ul>
//                 <p>
//                   Buy the{" "}
//                   <b>
//                     {title} {info}
//                   </b>{" "}
//                   which offers you with fabulous music experience by providing
//                   you with awesome sound quality that you can never move on
//                   from. Enjoy perfect flexibility and mobility with amazing
//                   musical quality with these {category} giving you a truly
//                   awesome audio experience. It blends with exceptional sound
//                   quality and a range of smart features for an unrivalled
//                   listening experience.
//                 </p>
//               </div>
//             ) : (
//               <div className="prod_reviews">
//                 <ul>
//                   {reviewsData.map((item) => (
//                     <ProductReviews key={item.id} {...item} />
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProductSummary;












// import React, { useEffect, useState } from "react";
// import reviewsData from "../../data/reviewsData";
// import useActive from "../../hooks/useActive";
// import ProductReviews from "./ProductReviews";
// import AOS from "aos";
// import "aos/dist/aos.css";
// // import productsData from "../../data/productsData";

// import {
//   mobileData,
//   earbudsData,
//   earphoneData,
//   laptopData,
//   tvData,
//   headphoneData,
//   neckbandData
// } from "../../data/productsData";

// const allProductsData = [
//   ...mobileData,
//   ...earbudsData,
//   ...earphoneData,
//   ...laptopData,
//   ...tvData,
//   ...headphoneData,
//   ...neckbandData
// ];
// const ProductSummary = (props) => {
//   const [products, setProducts] = useState(allProductsData);

//   useEffect(() => {
//     AOS.init({
//       duration: 2000, // Animation duration
//       // easing: 'ease-in-out', // Animation easing
//     });
//   }, []);

//   const { brand, title, info, category, type, connectivity, ram, internal, color_varient,picture_quality,screen_size ,screenSize,processor,colorVariants,warranty,releaseDate,waterproof,battery_life,noise_cancellation,hdd} = props;
// console.log(category);
//   const { active, handleActive, activeClass } = useActive("specs");

//   return (
//     <>
//       <section id="product_summary" className="section" data-aos="zoom-in">
//         <div className="container">
//           {/*===== Product-Summary-Tabs =====*/}
//           <div className="prod_summary_tabs">
//             <ul className="tabs">
//               <li
//                 className={`tabs_item ${activeClass("specs")}`}
//                 onClick={() => handleActive("specs")}
//               >
//                 Specifications
//               </li>
//               <li
//                 className={`tabs_item ${activeClass("overview")}`}
//                 onClick={() => handleActive("overview")}
//               >
//                 Overview
//               </li>
//               <li
//                 className={`tabs_item ${activeClass("reviews")}`}
//                 onClick={() => handleActive("reviews")}
//               >
//                 Reviews
//               </li>
//             </ul>
//           </div>

//           {/*===== Product-Summary-Details =====*/}
//           <div className="prod_summary_details">
//             {active === "specs" ? (
//               <div className="prod_specs">
//                 <table className="product-details-table">
//                   <tbody>
//                     <tr>
//                       <td>Brand</td>
//                       <td className="custom-td">{brand}</td>
//                     </tr>
//                     <tr>
//                       <td>Model</td>
//                       <td>{title}</td>
//                     </tr>
//                     <tr>
//                       <td>Generic Name</td>
//                       <td>{category}</td>
//                     </tr>
//                     <tr>
//                       <td>Headphone Type</td>
//                       <td>{type}</td>
//                     </tr>
//                     <tr>
//                       <td>Connectivity</td>
//                       <td>{connectivity}</td>
//                     </tr>
//                     <tr>
//                       <td>Microphone</td>
//                       <td>Yes</td>
//                     </tr>
//                     {category === "Mobile" && (
//                       <>
//                         <tr>
//                           <td>RAM</td>
//                           <td>{ram}</td>
//                         </tr>
//                         <tr>
//                           <td>Internal</td>
//                           <td>{internal}</td>
//                         </tr>
//                         <tr>
//                           <td>Color Varient</td>
//                           <td>{color_varient}</td>
//                         </tr>
                     
//                       </>
//                     )}
//                     {category === "TV" && (
//                       <>
//                         <tr>
//                           <td>Screen Size</td>
//                           <td>{screen_size}</td>
//                         </tr>
//                         <tr>
//                           <td>Picture Quality</td>
//                           <td>{picture_quality}</td>
//                         </tr>
//                         <tr>
//                           <td>Color Variant</td>
//                           <td>{colorVariants}</td>
//                         </tr>
                     
//                       </>
//                     )}
//                     {category === "Laptop" && (
//                       <>
//                         <tr>
//                           <td>Screen Size</td>
//                           <td>{screenSize}</td>
//                         </tr>
//                         <tr>
//                           <td>Processor</td>
//                           <td>{processor}</td>
//                         </tr>
//                         <tr>
//                           <td>Color Variant</td>
//                           <td>{colorVariants}</td>
//                         </tr>
//                         <tr>
//                           <td>Warranty</td>
//                           <td>{warranty}</td>
//                         </tr>
//                         <tr>
//                           <td>Release Date</td>
//                           <td>{releaseDate}</td>
//                         </tr>
//                         <tr>
//                           <td>RAM</td>
//                           <td>{ram}</td>
//                         </tr>
//                         <tr>
//                           <td>HDD</td>
//                           <td>{hdd}</td>
//                         </tr>
                     
//                       </>
//                     )}
//                     {category === "Neckbands" && (
//                       <>
//                         <tr>
//                           <td> Battery Life</td>
//                           <td>{battery_life}</td>
//                         </tr>
//                         <tr>
//                           <td>waterproof</td>
//                           <td>{waterproof}</td>
//                         </tr>
//                         <tr>
//                           <td>Color Variant</td>
//                           <td>{colorVariants}</td>
//                         </tr>
                     
//                       </>
//                     )}
//                     {category === "Earbuds" && (
//                       <>
//                         <tr>
//                           <td> Battery Life</td>
//                           <td>{battery_life}</td>
//                         </tr>
//                         <tr>
//                           <td>waterproof</td>
//                           <td>{waterproof}</td>
//                         </tr>
//                         <tr>
//                           <td>Color Variant</td>
//                           <td>{colorVariants}</td>
//                         </tr>
                      
                     
//                       </>
//                     )}
//                     {category === "Headphones" && (
//                       <>
//                         <tr>
//                           <td> Battery Life</td>
//                           <td>{battery_life}</td>
//                         </tr>
//                         <tr>
//                           <td>Noise Cancellation</td>
//                           <td>{noise_cancellation}</td>
//                         </tr>
//                         <tr>
//                           <td>Color Variant</td>
//                           <td>{colorVariants}</td>
//                         </tr>
                      
                     
//                       </>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             ) : active === "overview" ? (
//               <div className="prod_overview">
//                 <h3>
//                   The <span>{title}</span> {info} provides with fabulous sound quality
//                 </h3>
//                 <ul>
//                   <li>Sound Tuned to Perfection</li>
//                   <li>Comfortable to Wear</li>
//                   <li>Long Hours Playback Time</li>
//                 </ul>
//                 <p>
//                   Buy the{" "}
//                   <b>
//                     {title} {info}
//                   </b>{" "}
//                   which offers you with fabulous music experience by providing
//                   you with awesome sound quality that you can never move on
//                   from. Enjoy perfect flexibility and mobility with amazing
//                   musical quality with these {category} giving you a truly
//                   awesome audio experience. It blends with exceptional sound
//                   quality and a range of smart features for an unrivalled
//                   listening experience.
//                 </p>
//               </div>
//             ) : (
//               <div className="prod_reviews">
//                 <ul>
//                   {reviewsData.map((item) => (
//                     <ProductReviews key={item.id} {...item} />
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProductSummary;













import React, { useEffect, useState } from "react";
import reviewsData from "../../data/reviewsData";
import useActive from "../../hooks/useActive";
import ProductReviews from "./ProductReviews";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  mobileData,
  earbudsData,
  earphoneData,
  laptopData,
  tvData,
  headphoneData,
  neckbandData,
} from "../../data/productsData";

const allProductsData = [
  ...mobileData,
  ...earbudsData,
  ...earphoneData,
  ...laptopData,
  ...tvData,
  ...headphoneData,
  ...neckbandData,
];

const ProductSummary = (props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const {
    brand,
    title,
    info,
    category,
    type,
    connectivity,
    ram,
    internal,
    color_varient,
    picture_quality,
    screen_size,
    screenSize,
    processor,
    colorVariants,
    warranty,
    releaseDate,
    waterproof,
    battery_life,
    noise_cancellation,
    hdd,
  } = props;

  const { active, handleActive, activeClass } = useActive("specs");

  const renderSpecs = () => {
    const commonSpecs = (
      <>
        <tr>
          <td>Brand</td>
          <td>{brand}</td>
        </tr>
        <tr>
          <td>Model</td>
          <td>{title}</td>
        </tr>
        <tr>
          <td>Generic Name</td>
          <td>{category}</td>
        </tr>
        <tr>
          <td>Headphone Type</td>
          <td>{type}</td>
        </tr>
        <tr>
          <td>Connectivity</td>
          <td>{connectivity}</td>
        </tr>
        <tr>
          <td>Microphone</td>
          <td>Yes</td>
        </tr>
      </>
    );

    const categorySpecs = {
      Mobile: (
        <>
          {/* <tr>
            <td>RAM</td>
            <td>{ram}</td>
          </tr>
          <tr>
            <td>Internal</td>
            <td>{internal}</td>
          </tr> */}
          <tr>
            <td>Color Variant</td>
            <td>{color_varient}</td>
          </tr>
        </>
      ),
      TV: (
        <>
          <tr>
            <td>Screen Size</td>
            <td>{screen_size}</td>
          </tr>
          <tr>
            <td>Picture Quality</td>
            <td>{picture_quality}</td>
          </tr>
          <tr>
            <td>Color Variant</td>
            <td>{colorVariants}</td>
          </tr>
        </>
      ),
      Laptop: (
        <>
          <tr>
            <td>Screen Size</td>
            <td>{screenSize}</td>
          </tr>
          <tr>
            <td>Processor</td>
            <td>{processor}</td>
          </tr>
          <tr>
            <td>Color Variant</td>
            <td>{colorVariants}</td>
          </tr>
          <tr>
            <td>Warranty</td>
            <td>{warranty}</td>
          </tr>
          <tr>
            <td>Release Date</td>
            <td>{releaseDate}</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>{ram}</td>
          </tr>
          <tr>
            <td>HDD</td>
            <td>{hdd}</td>
          </tr>
        </>
      ),
      Neckbands: (
        <>
          <tr>
            <td>Battery Life</td>
            <td>{battery_life}</td>
          </tr>
          <tr>
            <td>Waterproof</td>
            <td>{waterproof}</td>
          </tr>
          <tr>
            <td>Color Variant</td>
            <td>{colorVariants}</td>
          </tr>
        </>
      ),
      Earbuds: (
        <>
          <tr>
            <td>Battery Life</td>
            <td>{battery_life}</td>
          </tr>
          <tr>
            <td>Waterproof</td>
            <td>{waterproof}</td>
          </tr>
          <tr>
            <td>Color Variant</td>
            <td>{colorVariants}</td>
          </tr>
        </>
      ),
      Headphones: (
        <>
          <tr>
            <td>Battery Life</td>
            <td>{battery_life}</td>
          </tr>
          <tr>
            <td>Noise Cancellation</td>
            <td>{noise_cancellation}</td>
          </tr>
          <tr>
            <td>Color Variant</td>
            <td>{colorVariants}</td>
          </tr>
        </>
      ),
    };

    return (
      <div className="prod_specs">
        <table className="product-details-table">
          <tbody>
            {commonSpecs}
            {categorySpecs[category]}
          </tbody>
        </table>
      </div>
    );
  };

  const renderOverview = () => (
    <div className="prod_overview">
      <h3>
        The <span>{title}</span> {info} provides fabulous sound quality.
      </h3>
      <ul>
        <li>Sound Tuned to Perfection</li>
        <li>Comfortable to Wear</li>
        <li>Long Hours Playback Time</li>
      </ul>
      <p>
        Buy the <b>{title} {info}</b> which offers a fabulous music experience
        with awesome sound quality that you can never move on from. Enjoy perfect
        flexibility and mobility with amazing musical quality with these {category}
        giving you a truly awesome audio experience. It blends exceptional sound
        quality and a range of smart features for an unrivalled listening experience.
      </p>
    </div>
  );

  const renderReviews = () => (
    <div className="prod_reviews">
      <ul>
        {reviewsData.map((item) => (
          <ProductReviews key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );

  return (
    <section id="product_summary" className="section" data-aos="zoom-in">
      <div className="container">
        <div className="prod_summary_tabs">
          <ul className="tabs">
            <li
              className={`tabs_item ${activeClass("specs")}`}
              onClick={() => handleActive("specs")}
            >
              Specifications
            </li>
            <li
              className={`tabs_item ${activeClass("overview")}`}
              onClick={() => handleActive("overview")}
            >
              Overview
            </li>
            <li
              className={`tabs_item ${activeClass("reviews")}`}
              onClick={() => handleActive("reviews")}
            >
              Reviews
            </li>
          </ul>
        </div>
        <div className="prod_summary_details">
          {active === "specs" ? renderSpecs() : active === "overview" ? renderOverview() : renderReviews()}
        </div>
      </div>
    </section>
  );
};

export default ProductSummary;
