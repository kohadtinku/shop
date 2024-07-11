// import React, { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { IoMdStar, IoMdCheckmark } from "react-icons/io";
// import { calculateDiscount, displayMoney } from "../helpers/utils";
// import useDocTitle from "../hooks/useDocTitle";
// import useActive from "../hooks/useActive";
// import cartContext from "../contexts/cart/cartContext";
// import productsData from "../data/productsData";
// import SectionsHead from "../components/common/SectionsHead";
// import RelatedSlider from "../components/sliders/RelatedSlider";
// import ProductSummary from "../components/product/ProductSummary";
// import Services from "../components/common/Services";
// import { ToastContainer, toast } from "react-toastify";
// // import ReactImageMagnify from "react-image-magnify";

// import "react-toastify/dist/ReactToastify.css";

// import ReactImageGallery from "react-image-gallery";
// // swiper

// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';
// // import '../styles/product.css'

// // // import required modules
// // import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

// const ProductDetails = () => {
//   // const notify = () => toast("Wow so easy!");

//   useDocTitle("Product Details");

//   const { handleActive, activeClass } = useActive(0);

//   const { addItem } = useContext(cartContext);

//   const { productId } = useParams();

//   // here the 'id' received has 'string-type', so converting it to a 'Number'
//   const prodId = parseInt(productId);

//   // showing the Product based on the received 'id'
//   const product = productsData.find((item) => item.id === prodId);

//   const {
//     images,
//     title,
//     info,
//     category,
//     finalPrice,
//     originalPrice,
//     ratings,
//     rateCount,
//   } = product;

//   const [previewImg, setPreviewImg] = useState(images[0]);

//   // handling Add-to-cart
//   const handleAddItem = () => {
//     addItem(product);
//     toast.success("Added To Cart");
//   };

//   // setting the very-first image on re-render
//   useEffect(() => {
//     setPreviewImg(images[0]);
//     handleActive(0);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [images]);

//   // handling Preview image
//   const handlePreviewImg = (i) => {
//     setPreviewImg(images[i]);
//     handleActive(i);
//   };

//   // calculating Prices
//   const discountedPrice = originalPrice - finalPrice;
//   const newPrice = displayMoney(finalPrice);
//   const oldPrice = displayMoney(originalPrice);
//   const savedPrice = displayMoney(discountedPrice);
//   const savedDiscount = calculateDiscount(discountedPrice, originalPrice);

//   // swiper

//   return (
//     <>
//       <section id="product_details" className="section">
//         <div className="container">
//           <div className="wrapper prod_details_wrapper">
//             {/*=== Product Details Left-content ===*/}
//             <div className="prod_details_left_col">
//               <div className="prod_details_tabs">
//                 {/* {images.map((img, i) => (
//                   <div
//                     key={i}
//                     className={`tabs_item ${activeClass(i)}`}
//                     onClick={() => handlePreviewImg(i)}
//                   >
//                     <img src={img} alt="product-img" />
//                   </div>
//                 ))} */}
//                 {/*
//                 <Swiper
//                   navigation={true}
//                   pagination={true}
//                   keyboard={true}
//                   autoplay={true}
//                   loop={true}
//                   modules={[
//                     Navigation,
//                     Pagination,
//                     Mousewheel,
//                     Keyboard,
//                     Autoplay,
//                   ]}
//                   className="mySwiper"
//                 >
//                   {images.map((imageUrl, index) => (
//                     <SwiperSlide key={index}>
//                       <img src={imageUrl} alt={`Slide ${index + 1}`} />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper> */}

//                 <div className="container mx-auto px-4">
//                   <ReactImageGallery
//                     showBullets={false}
//                     showFullscreenButton={false}
//                     showPlayButton={false}
//                     items={images}
//                   />

//                   {/* /image gallery  */}
//                 </div>
//               </div>
//               {/* <figure className="prod_details_img">
//                 <img src={previewImg} alt="product-img" />
//               </figure> */}
//               {/* <div className="prod_details_img">
//       <ReactImageMagnify
//         {...{
//           smallImage: {
//             alt: 'Product Image',
//             src: previewImg,
//             isFluidWidth: true,
//             width: 300,
//             height: 200,
//           },
//           largeImage: {
//             src: previewImg,
//             width: 800, // Adjust the width and height of the large image as needed
//             height: 600,
//           },
//           isHintEnabled: true,
//         }}
//         className="custom_magnify" // Add a custom class for styling purposes
//       />
//     </div> */}
//             </div>

//             {/*=== Product Details Right-content ===*/}
//             <div className="prod_details_right_col">
//               <h1 className="prod_details_title">{title}</h1>
//               <h4 className="prod_details_info">{info}</h4>

//               <div className="prod_details_ratings">
//                 <span className="rating_star">
//                   {[...Array(rateCount)].map((_, i) => (
//                     <IoMdStar key={i} />
//                   ))}
//                 </span>
//                 <span>|</span>
//                 <Link to="*">{ratings} Ratings</Link>
//               </div>

//               <div className="separator"></div>

//               <div className="prod_details_price">
//                 <div className="price_box">
//                   <h2 className="price">
//                     {newPrice} &nbsp;
//                     <small className="del_price">
//                       <del>{oldPrice}</del>
//                     </small>
//                   </h2>
//                   <p className="saved_price">
//                     You save: {savedPrice} ({savedDiscount}%)
//                   </p>
//                   <span className="tax_txt">(Inclusive of all taxes)</span>
//                 </div>

//                 <div className="badge">
//                   <span>
//                     <IoMdCheckmark /> In Stock
//                   </span>
//                 </div>
//               </div>

//               <div className="separator"></div>

//               <div className="prod_details_offers">
//                 <h4>Offers and Discounts</h4>
//                 <ul>
//                   <li>No Cost EMI on Credit Card</li>
//                   <li>Pay Later & Avail Cashback</li>
//                 </ul>
//               </div>

//               <div className="separator"></div>

//               <div className="prod_details_buy_btn">
//                 <button type="button" className="btn" onClick={handleAddItem}>
//                   <Link to={"/cart"}>Buy Now</Link>
//                 </button>
//                 {/* <ToastContainer /> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <ProductSummary {...product} />

//       <section id="related_products" className="section">
//         <div className="container">
//           <SectionsHead heading="Related Products" />
//           <RelatedSlider category={category} />
//         </div>
//       </section>

//       <Services />
//     </>
//   );
// };

// export default ProductDetails;

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { IoMdStar, IoMdCheckmark } from "react-icons/io";
// import { calculateDiscount, displayMoney } from "../helpers/utils";
// import useDocTitle from "../hooks/useDocTitle";
// import useActive from "../hooks/useActive";
// import cartContext from "../contexts/cart/cartContext";
// import productsData from "../data/productsData";
// import SectionsHead from "../components/common/SectionsHead";
// import RelatedSlider from "../components/sliders/RelatedSlider";
// import ProductSummary from "../components/product/ProductSummary";
// import Services from "../components/common/Services";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "../styles/product.css";
// import {
//   Navigation,
//   Pagination,
//   Mousewheel,
//   Keyboard,
//   Autoplay,
// } from "swiper/modules";

// import AOS from "aos";
// import "aos/dist/aos.css";
// const ProductDetails = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 2000, // Animation duration
//       // easing: 'ease-in-out', // Animation easing

//     });
//   }, []);
//   useDocTitle("Product Details");

//   const { handleActive, activeClass } = useActive(0);
//   const { addItem } = useContext(cartContext);
//   const { productId } = useParams();
//   const prodId = parseInt(productId);
//   const product = productsData.find((item) => item.id === prodId);

//   const {
//     images,
//     title,
//     info,
//     category,
//     finalPrice,
//     originalPrice,
//     ratings,
//     rateCount,
//   } = product;

//   const [previewImg, setPreviewImg] = useState(images[0]);

//   const handleAddItem = () => {
//     addItem(product);
//     };

//   useEffect(() => {
//     setPreviewImg(images[0]);
//     handleActive(0);
//   }, [images, handleActive]);

//   const discountedPrice = originalPrice - finalPrice;
//   const newPrice = displayMoney(finalPrice);
//   const oldPrice = displayMoney(originalPrice);
//   const savedPrice = displayMoney(discountedPrice);
//   const savedDiscount = calculateDiscount(discountedPrice, originalPrice);

//   return (
//     <>
//       <section id="product_details" className="section">
//         <div className="container">
//           <div className="wrapper prod_details_wrapper">
//             <div className="prod_details_left_col">
//               <div className="prod_details_tabs" data-aos="fade-left">
//                 <Swiper
//                   navigation={true}
//                   pagination={true}
//                   keyboard={true}
//                   autoplay={{ delay: 3000 }}
//                   loop={true}
//                   modules={[
//                     Navigation,
//                     Pagination,
//                     Mousewheel,
//                     Keyboard,
//                     Autoplay,
//                   ]}
//                   className="mySwiper"
//                 >
//                   {images.map((imageUrl, index) => (
//                     <SwiperSlide key={index}>
//                       <img src={imageUrl} alt={`Slide ${index + 1}`} />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//             <div className="prod_details_right_col" data-aos="fade-down">
//               <h1 className="prod_details_title">{title}</h1>
//               <h4 className="prod_details_info">{info}</h4>
//               <div className="prod_details_ratings">
//                 <span className="rating_star">
//                   {[...Array(rateCount)].map((_, i) => (
//                     <IoMdStar key={i} />
//                   ))}
//                 </span>
//                 <span>|</span>
//                 <Link to="*">{ratings} Ratings</Link>
//               </div>
//               <div className="separator"></div>
//               <div className="prod_details_price">
//                 <div className="price_box">
//                   <h2 className="price">
//                     {newPrice} &nbsp;
//                     <small className="del_price">
//                       <del>{oldPrice}</del>
//                     </small>
//                   </h2>
//                   <p className="saved_price">
//                     You save: {savedPrice} ({savedDiscount}%)
//                   </p>
//                   <span className="tax_txt">(Inclusive of all taxes)</span>
//                 </div>
//                 <div className="badge">
//                   <span>
//                     <IoMdCheckmark /> In Stock
//                   </span>
//                 </div>
//               </div>

//               {/* ram rom */}
//               <div className="separator"></div>
//               <div className="prod_details_offers">
//                 <h4>Offers and Discounts</h4>
//                 <ul>
//                   <li>No Cost EMI on Credit Card</li>
//                   <li>Pay Later & Avail Cashback</li>
//                 </ul>
//               </div>
//               <div className="separator"></div>
//               <div className="prod_details_buy_btn">
//                 <Link to={"/cart"}>
//                   <button type="button" className="btn" onClick={handleAddItem}>
//                     Buy Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ProductSummary {...product} />
//       <section id="related_products" className="section">
//         <div className="container">
//           <SectionsHead heading="Related Products" />
//           <RelatedSlider category={category} />
//         </div>
//       </section>
//       <Services />
//       <ToastContainer />
//     </>
//   );
// };

// export default ProductDetails;

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { IoMdStar, IoMdCheckmark } from "react-icons/io";
// import { calculateDiscount, displayMoney } from "../helpers/utils";
// import useDocTitle from "../hooks/useDocTitle";
// import useActive from "../hooks/useActive";
// import cartContext from "../contexts/cart/cartContext";
// import productsData from "../data/productsData";
// import SectionsHead from "../components/common/SectionsHead";
// import RelatedSlider from "../components/sliders/RelatedSlider";
// import ProductSummary from "../components/product/ProductSummary";
// import Services from "../components/common/Services";

// const ProductDetails = () => {
//   useDocTitle("Product Details");

//   const { handleActive, activeClass } = useActive(0);

//   const { addItem } = useContext(cartContext);

//   const { productId } = useParams();

//   // here the 'id' received has 'string-type', so converting it to a 'Number'
//   const prodId = parseInt(productId);

//   // showing the Product based on the received 'id'
//   const product = productsData.find((item) => item.id === prodId);

//   const {
//     images,
//     title,
//     info,
//     category,
//     finalPrice,
//     originalPrice,
//     ratings,
//     rateCount,
//     ram,
//   } = product;

//   const [previewImg, setPreviewImg] = useState(images[0]);
//   const [selectedRam, setSelectedRam] = useState(ram[0]);
//   const [newPrice, setNewPrice] = useState(finalPrice[0]);
//   const [oldPrice, setOldPrice] = useState(originalPrice[0]);

//   // handling Add-to-cart
//   const handleAddItem = () => {
//     addItem(product);
//   };

//   // setting the very-first image on re-render
//   useEffect(() => {
//     setPreviewImg(images[0]);
//     handleActive(0);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [images]);

//   // handling Preview image
//   const handlePreviewImg = (i) => {
//     setPreviewImg(images[i]);
//     handleActive(i);
//   };

//   const handleRamChange = (event) => {
//     const selectedRam = event.target.value;
//     setSelectedRam(selectedRam);

//     const ramIndex = ram.indexOf(selectedRam);
//     if (ramIndex > -1) {
//       setNewPrice(finalPrice[ramIndex]);
//       setOldPrice(originalPrice[ramIndex]);
//     }
//   };

//   // calculating Prices
//   const discountedPrice = originalPrice - finalPrice;
//   // const newPrice = displayMoney(finalPrice);
//   // const oldPrice = displayMoney(originalPrice);
//   const savedPrice = displayMoney(discountedPrice);
//   const savedDiscount = calculateDiscount(discountedPrice, originalPrice);

//   return (
//     <>
//       <section id="product_details" className="section">
//         <div className="container">
//           <div className="wrapper prod_details_wrapper">
//             {/*=== Product Details Left-content ===*/}
//             <div className="prod_details_left_col">
//               <div className="prod_details_tabs">
//                 {images.map((img, i) => (
//                   <div
//                     key={i}
//                     className={`tabs_item ${activeClass(i)}`}
//                     onClick={() => handlePreviewImg(i)}
//                   >
//                     <img src={img} alt="product-img" />
//                   </div>
//                 ))}
//               </div>
//               <figure className="prod_details_img">
//                 <img src={previewImg} alt="product-img" />
//               </figure>
//             </div>

//             {/*=== Product Details Right-content ===*/}
//             <div className="prod_details_right_col">
//               <h1 className="prod_details_title">{title}</h1>
//               <h4 className="prod_details_info">{info}</h4>

//               <div className="prod_details_ratings">
//                 <span className="rating_star">
//                   {[...Array(rateCount)].map((_, i) => (
//                     <IoMdStar key={i} />
//                   ))}
//                 </span>
//                 <span>|</span>
//                 <Link to="*">{ratings} Ratings</Link>
//               </div>

//               <div className="separator"></div>

//               <div className="prod_details_price">
//                 <div className="price_box">
//                   <h2 className="price">
//                     {newPrice} &nbsp;
//                     <small className="del_price">
//                       <del>{oldPrice}</del>
//                     </small>
//                   </h2>
//                   <p className="saved_price">
//                     You save: {savedPrice} ({savedDiscount}%)
//                   </p>
//                   <span className="tax_txt">(Inclusive of all taxes)</span>
//                 </div>

//                 <div className="badge">
//                   <span>
//                     <IoMdCheckmark /> In Stock
//                   </span>
//                 </div>
//               </div>

//               <div className="separator"></div>

//               <div className="prod_details_offers">
//                 <h4>Offers and Discounts</h4>
//                 <ul>
//                   <li>No Cost EMI on Credit Card</li>
//                   <li>Pay Later & Avail Cashback</li>
//                 </ul>
//               </div>

//               <div className="separator"></div>
//               {category === "Mobile" && (
//                 <div className="prod_details_ram_select">
//                   <label htmlFor="ram-select">Select RAM size:</label>
//                   <select
//                     id="ram-select"
//                     value={selectedRam}
//                     onChange={handleRamChange}
//                   >
//                     {ram.map((ramSize, index) => (
//                       <option key={index} value={ramSize}>
//                         {ramSize}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               <div className="separator"></div>

//               <div className="prod_details_buy_btn">
//                 <button type="button" className="btn" onClick={handleAddItem}>
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <ProductSummary {...product} />

//       <section id="related_products" className="section">
//         <div className="container">
//           <SectionsHead heading="Related Products" />
//           <RelatedSlider category={category} />
//         </div>
//       </section>

//       <Services />
//     </>
//   );
// };

// export default ProductDetails;

import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdStar, IoMdCheckmark } from "react-icons/io";
import { calculateDiscount, displayMoney } from "../helpers/utils";
import useDocTitle from "../hooks/useDocTitle";
import useActive from "../hooks/useActive";
import cartContext from "../contexts/cart/cartContext";
// import productsData from '../data/productsData';
import SectionsHead from "../components/common/SectionsHead";
import RelatedSlider from "../components/sliders/RelatedSlider";
import ProductSummary from "../components/product/ProductSummary";
import Services from "../components/common/Services";
import {
  mobileData,
  earbudsData,
  earphoneData,
  laptopData,
  tvData,
  headphoneData,
  neckbandData,
} from "../data/productsData";

const allProductsData = [
  ...mobileData,
  ...earbudsData,
  ...earphoneData,
  ...laptopData,
  ...tvData,
  ...headphoneData,
  ...neckbandData,
];
const ProductDetails = () => {
  useDocTitle("Product Details");

  const { handleActive, activeClass } = useActive(0);
  const { addItem } = useContext(cartContext);
  const { productId } = useParams();

  // Convert the received 'productId' to a number
  const prodId = parseInt(productId, 10);

  // Find the product based on the 'id' received
  const product = allProductsData.find((item) => item.id === prodId);

  // Destructure product properties
  const {
    images,
    title,
    info,
    category,
    finalPrice,
    originalPrice,
    ratings,
    rateCount,
    ram,
    color,
  } = product;

  // State variables for RAM selection and pricing
  const [previewImg, setPreviewImg] = useState(images[0]);
  const [newPrice, setNewPrice] = useState(finalPrice[0]);
  const [oldPrice, setOldPrice] = useState(originalPrice[0]);
  const [iscolor, setIsColor] = useState(color[0]);

  const [newcolor, setNewColor] = useState("");

  const [selectedRam, setSelectedRam] = useState(
    category === "Mobile" ? ram[0] : ""
  );

  // Effect to reset image preview and active tab on image change
  useEffect(() => {
    setPreviewImg(images[0]);
    handleActive(0);
  }, [images]);

  // Handler for RAM selection change
  const handleRamChange = (event) => {
    const selectedRam = event.target.value;
    setSelectedRam(selectedRam);

    // Update prices based on selected RAM
    const ramIndex = ram.indexOf(selectedRam);
    if (ramIndex > -1) {
      setNewPrice(finalPrice[ramIndex]);
      setOldPrice(originalPrice[ramIndex]);
    }
  };

  //for color
  const handleColor = (e) => {
    const selectColor = e.target.value;
    setIsColor(selectColor);
    localStorage.setItem("color", selectColor);
  };

  // Handler for adding item to cart
  const handleAddItem = () => {
    console.log("colorrr", iscolor);
    console.log("cart-products", product);
    addItem({...product,color:iscolor,ram:selectedRam ,finalPrice:newPrice,originalPrice:oldPrice});
  };

  // Calculating discounted price and formatting displayed prices
  const discountedPrice = oldPrice - newPrice;
  const displayNewPrice = displayMoney(newPrice);
  const displayOldPrice = displayMoney(oldPrice);
  const savedPrice = displayMoney(discountedPrice);
  const savedDiscount = calculateDiscount(discountedPrice, oldPrice);

  return (
    <>
      <section id="product_details" className="section">
        <div className="container">
          <div className="wrapper prod_details_wrapper">
            {/*=== Product Details Left-content ===*/}
            <div className="prod_details_left_col">
              <div className="prod_details_tabs">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className={`tabs_item ${activeClass(i)}`}
                    onClick={() => setPreviewImg(images[i])}
                  >
                    <img src={img} alt="product-img" />
                  </div>
                ))}
              </div>
              <figure className="prod_details_img">
                <img src={previewImg} alt="product-img" />
              </figure>
            </div>

            {/*=== Product Details Right-content ===*/}
            <div className="prod_details_right_col">
              <h1 className="prod_details_title">{title}</h1>
              <h4 className="prod_details_info">{info}</h4>

              <div className="prod_details_ratings">
                <span className="rating_star">
                  {[...Array(rateCount)].map((_, i) => (
                    <IoMdStar key={i} />
                  ))}
                </span>
                <span>|</span>
                <Link to="*">{ratings} Ratings</Link>
              </div>

              <div className="separator"></div>

              <div className="prod_details_price">
                <div className="price_box">
                  <h2 className="price">
                    {displayNewPrice} &nbsp;
                    <small className="del_price">
                      <del>{displayOldPrice}</del>
                    </small>
                    {/* {finalPrice} <small className='del_price'>
                    <del>
                    {originalPrice}
                    </del></small> */}
                  </h2>
                  <p className="saved_price">
                    You save: {savedPrice} ({savedDiscount}%)
                  </p>
                  <span className="tax_txt">(Inclusive of all taxes)</span>
                </div>

                <div className="badge">
                  <span>
                    <IoMdCheckmark /> In Stock
                  </span>
                </div>
              </div>

              <div className="separator"></div>

              <div
                className="prod_details_offers"
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h4>Offers and Discounts</h4>
                <ul>
                  <li>No Cost EMI on Credit Card</li>
                  <li>Pay Later & Avail Cashback</li>
                </ul>
              </div>

              <div className="separator"></div>
              <div className="cutom_container">
                {category === "Mobile" && (
                  <>
                    <div className="prod_details_ram_select">
                      <label htmlFor="ram-select">Select RAM:</label>
                      <select
                        id="ram-select"
                        value={selectedRam}
                        onChange={handleRamChange}
                        onClick={()=>setSelectedRam(selectedRam)}
                        style={{ padding: "5px", marginLeft: "5px" }}
                      >
                        {ram.map((ramSize, index) => (
                          <option key={index} value={ramSize}>
                            {ramSize}
                          </option>
                        ))}
                      </select>
                    </div>
{console.log("selected ram",selectedRam)}
                    <div className="separator"></div>
                  </>
                )}
                {category === "Laptop" && (
                  <>
                    <div className="prod_details_ram_select">
                      <label htmlFor="ram-select">Select RAM:</label>
                      <select
                        id="ram-select"
                        value={selectedRam}
                        onChange={handleRamChange}
                        style={{ padding: "5px", marginLeft: "5px" }}
                      >
                        {ram.map((ramSize, index) => (
                          <option key={index} value={ramSize}>
                            {ramSize}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="separator"></div>
                  </>
                )}

                <div className="prod_details_ram_select">
                  <label htmlFor="ram-select">Select Color:</label>
                  <select
                    id="ram-select"
                    onChange={handleColor}
                    value={iscolor}
                    style={{ padding: "5px", marginLeft: "5px" }}
                    onClick={() => setNewColor(iscolor)}
                  >
                    {console.log("color", iscolor)}

                    {color.map((c, index) => (
                      <option key={index} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="separator"></div>

              <div className="prod_details_buy_btn">
                <Link to="/cart">
                  <button type="button" className="btn" onClick={handleAddItem}>
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSummary {...product} />

      <section id="related_products" className="section">
        <div className="container">
          <SectionsHead heading="Related Products" />
          <RelatedSlider category={category} />
        </div>
      </section>

      <Services />
    </>
  );
};

export default ProductDetails;
