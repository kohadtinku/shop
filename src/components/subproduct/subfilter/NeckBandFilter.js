

import React, { useContext, useState, useEffect } from "react";
import customContext from "../../../contexts/filters/customContext";
import { displayMoney } from "../../../helpers/utils";
// import productsData from "../../../data/productsData";
import ProductCard from "../../product/ProductCard";
import EmptyView from "../../common/EmptyView";
import { BsExclamationCircle } from "react-icons/bs";
import priceMenu from "../../../data/filterBarData";
import '../../../App.css';
import AOS from "aos";
import "aos/dist/aos.css";


import {
  mobileData,
  earbudsData,
  earphoneData,
  laptopData,
  tvData,
  headphoneData,
  neckbandData
} from "../../../data/productsData";

const allProductsData = [
  ...mobileData,
  ...earbudsData,
  ...earphoneData,
  ...laptopData,
  ...tvData,
  ...headphoneData,
  ...neckbandData
];

const NeckBandFilter = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    
    });
  }, []);
  const {
    sortedValue,
    mobFilterBar: { isMobSortVisible, isMobFilterVisible },
    handleMobSortVisibility,
    handleMobFilterVisibility,
    handleClearFilters,
  } = useContext(customContext);

  const displayPrice = displayMoney(priceMenu);
  const [isApplied, setIsApplied] = useState(false);
  const [nackbandProducts, setNeckbandProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = allProductsData.filter(
      (product) => product.category === "Neckbands"
    );
    setNeckbandProducts(filteredProducts);
  }, []); 

  const handleLowtoHigh = () => {
    let sortedProducts = nackbandProducts.sort((a, b) => a.finalPrice[0] - b.finalPrice[0]);
    setNeckbandProducts([...sortedProducts]); // Ensure state immutability
  };

  const handleHighToLow = () => {
    let sortedProducts = nackbandProducts.sort((a, b) => b.finalPrice[0] - a.finalPrice[0]);
    setNeckbandProducts([...sortedProducts]); // Ensure state immutability
  };

  const handleLatest = () => {
    // Sort the filtered products by latest upload (assuming products have a `timestamp` property)
    let sortedProducts = nackbandProducts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setNeckbandProducts([...sortedProducts]); // Ensure state immutability
  };
  const handleChange = (event) => {
    const { value } = event.target;
    let filteredProducts = [];

    // Filter out non-mobile products first
    const NeckbandProductsData = allProductsData.filter(
      (product) => product.category === "Neckbands"
    );

    switch (value) {
      case "under5000":
        filteredProducts = NeckbandProductsData.filter(
          (product) => product.finalPrice[0] < 5000
        );
        break;
      case "5000to10000":
        filteredProducts = NeckbandProductsData.filter(
          (product) => product.finalPrice[0] >= 5000 && product.finalPrice[0] <= 10000
        );
        break;
      case "10000to15000":
        filteredProducts = NeckbandProductsData.filter(
          (product) =>
            product.finalPrice[0] >= 10000 && product.finalPrice[0] <= 15000
        );
        break;
      case "15000to20000":
        filteredProducts = NeckbandProductsData.filter(
          (product) =>
            product.finalPrice[0] >= 15000 && product.finalPrice[0] <= 20000
        );
        break;
      case "25000andabove":
        filteredProducts = NeckbandProductsData.filter(
          (product) => product.finalPrice[0] >= 25000
        );
        break;
      default:
        filteredProducts = NeckbandProductsData;
        break;
    }

    setNeckbandProducts(filteredProducts);
  };

  return (
    <>
      {(sortedValue || isApplied) && (
        <div className="clear_filter_btn">
          <button type="button" className="btn" onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
      )}
      <div className="customDiv">
        <div className="custom_sort_options" style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          <div className="custom_sort_head">
            <h3 className="custom_title">Sort By</h3>
           
            </div>
         
            <select
            className="custom_sort_menu"
            onChange={(event) => {
              if (event.target.value === "latest") {
                handleLatest();
              } else if (event.target.value === "lowHigh") {
                handleLowtoHigh();
              } else if (event.target.value === "highLow") {
                handleHighToLow();
              }
            }}
          >
            <option value="latest">Latest</option>
            <option value="lowHigh">Low-High</option>
            <option value="highLow">High-Low</option>
          </select>
          {/* <div className="separator"></div> */}
        </div>

        <div className={`custom_filter_options ${isMobFilterVisible ? "show" : ""}`}>
          {/* <div className="filter_head">
            <h3 className="title">Filter By</h3>
            <button
              type="button"
              className="close_btn"
              onClick={() => handleMobFilterVisibility(false)}
            >
              &times;
            </button>
          </div> */}
          <div className="separator"></div>
          <div className="filter_block">
            <h4>Price</h4>
            <select className="filter_menu" onChange={handleChange}>
              <option value="">Select Price Range</option>
              <option value="under5000">Under 5000</option>
              <option value="5000to10000">5000 - 10000</option>
              <option value="10000to15000">10000 - 15000</option>
              <option value="15000to20000">15000 - 20000</option>
              <option value="25000andabove">25000 and above</option>
            </select>
          </div>
        </div>
      </div>
      <div className="custom_container" style={{ display: "flex" }} data-aos="fade-down">
        {nackbandProducts.length ? (
          <div className="wrapper products_wrapper">
            {nackbandProducts.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <EmptyView icon={<BsExclamationCircle />} msg="No Results Found" />
        )}
      </div>
    </>
  );
};

export default NeckBandFilter;
