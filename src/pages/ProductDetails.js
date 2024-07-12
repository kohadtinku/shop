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
import { useSwipeable } from "react-swipeable"; // Import swipeable


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
    addItem({
      ...product,
      color: iscolor,
      ram: selectedRam,
      finalPrice: newPrice,
      originalPrice: oldPrice,
    });
  };

  // Calculating discounted price and formatting displayed prices
  const discountedPrice = oldPrice - newPrice;
  const displayNewPrice = displayMoney(newPrice);
  const displayOldPrice = displayMoney(oldPrice);
  const savedPrice = displayMoney(discountedPrice);
  const savedDiscount = calculateDiscount(discountedPrice, oldPrice);



  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const currentIndex = images.indexOf(previewImg);
      const nextIndex = (currentIndex + 1) % images.length;
      setPreviewImg(images[nextIndex]);
    },
    onSwipedRight: () => {
      const currentIndex = images.indexOf(previewImg);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setPreviewImg(images[prevIndex]);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // const goToNextImage = () => {
  //   const currentIndex = images.indexOf(previewImg);
  //   const nextIndex = (currentIndex + 1) % images.length;
  //   setPreviewImg(images[nextIndex]);
  // };

  // const goToPrevImage = () => {
  //   const currentIndex = images.indexOf(previewImg);
  //   const prevIndex = (currentIndex - 1 + images.length) % images.length;
  //   setPreviewImg(images[prevIndex]);
  // }
  return (
    <>
      <section id="product_details" className="section">
        <div className="container">
          <div className="wrapper prod_details_wrapper">
            {/*=== Product Details Left-content ===*/}
            {/* <div className="prod_details_left_col">
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
            </div> */}

            <div className="prod_details_left_col" {...handlers}>
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

              {/* <div className="image-navigation">
                <button className="prev-button" onClick={goToPrevImage}>
                  &lt; Prev
                </button>
                <button className="next-button" onClick={goToNextImage}>
                  Next &gt;
                </button>
              </div> */}
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
                        onClick={() => setSelectedRam(selectedRam)}
                        style={{ padding: "5px", marginLeft: "5px" }}
                      >
                        {ram.map((ramSize, index) => (
                          <option key={index} value={ramSize}>
                            {ramSize}
                          </option>
                        ))}
                      </select>
                    </div>
                    {console.log("selected ram", selectedRam)}
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
