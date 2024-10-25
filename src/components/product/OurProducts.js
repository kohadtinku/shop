
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";


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

const OurProducts = () => {
  // const [dbpath, setDbpath] = useState(
  //   "http://localhost/Y-Mart/app/Products.php"
  // );
  // console.log("pathh", dbpath);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(data);
  //       const data = response.data;
  //       if (Array.isArray(data)) {
  //         setData(data);
  //       } else {
  //         console.error("API response is not an array:", data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, [dbpath]);

  return (
    <div className="our-products">
      <h2 style={{ textAlign: "start" }}>Our Products</h2>
      <div className="wrapper products_wrapper">
        {allProductsData.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
        <div
          className="card products_card browse_card"
          style={{ height: "200px", color: "red" }}
        >
          <Link to="/all-products">
            Browse All <br /> Products <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
