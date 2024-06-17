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












import React, { useEffect, useState } from "react";
import reviewsData from "../../data/reviewsData";
import useActive from "../../hooks/useActive";
import ProductReviews from "./ProductReviews";
import AOS from "aos";
import "aos/dist/aos.css";
import productsData from "../../data/productsData";

const ProductSummary = (props) => {
  const [products, setProducts] = useState(productsData);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      // easing: 'ease-in-out', // Animation easing
    });
  }, []);

  const { brand, title, info, category, type, connectivity, ram, internal, color_varient } = props;
console.log(category);
  const { active, handleActive, activeClass } = useActive("specs");

  return (
    <>
      <section id="product_summary" className="section" data-aos="zoom-in">
        <div className="container">
          {/*===== Product-Summary-Tabs =====*/}
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

          {/*===== Product-Summary-Details =====*/}
          <div className="prod_summary_details">
            {active === "specs" ? (
              <div className="prod_specs">
                <table className="product-details-table">
                  <tbody>
                    <tr>
                      <td>Brand</td>
                      <td className="custom-td">{brand}</td>
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
                    {category === "Mobile" && (
                      <>
                        <tr>
                          <td>RAM</td>
                          <td>{ram}</td>
                        </tr>
                        <tr>
                          <td>Internal</td>
                          <td>{internal}</td>
                        </tr>
                        <tr>
                          <td>Color Variant</td>
                          <td>{color_varient}</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            ) : active === "overview" ? (
              <div className="prod_overview">
                <h3>
                  The <span>{title}</span> {info} provides with fabulous sound quality
                </h3>
                <ul>
                  <li>Sound Tuned to Perfection</li>
                  <li>Comfortable to Wear</li>
                  <li>Long Hours Playback Time</li>
                </ul>
                <p>
                  Buy the{" "}
                  <b>
                    {title} {info}
                  </b>{" "}
                  which offers you with fabulous music experience by providing
                  you with awesome sound quality that you can never move on
                  from. Enjoy perfect flexibility and mobility with amazing
                  musical quality with these {category} giving you a truly
                  awesome audio experience. It blends with exceptional sound
                  quality and a range of smart features for an unrivalled
                  listening experience.
                </p>
              </div>
            ) : (
              <div className="prod_reviews">
                <ul>
                  {reviewsData.map((item) => (
                    <ProductReviews key={item.id} {...item} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSummary;
