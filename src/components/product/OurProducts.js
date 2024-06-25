import React, { useState } from "react";
import productsData from "../../data/productsData";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import {
  mobileData,
  earbudsData,
  earphoneData,
  laptopData,
  tvData,
  headphoneData,
  neckbandData
} from "../../data/productsData";

const allProductsData = [
  ...mobileData,
  ...earbudsData,
  ...earphoneData,
  ...laptopData,
  ...tvData,
  ...headphoneData,
  ...neckbandData
];

const OurProducts = () => {
  const [products, setProducts] = useState(allProductsData);

  return (
    <div className="our-products">
      <h2 style={{ textAlign: "center" }}>Our Products</h2>



      <div className="wrapper products_wrapper">
        {products.slice(0, 12).map((item) => (
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
