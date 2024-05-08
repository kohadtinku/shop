
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import productsData from '../../data/productsData';
import ProductCard from '../product/ProductCard';

const Earbuds = () => {
  const [earbudsProducts, setEarbudsProducts] = useState([]);

  useEffect(() => {
    // Filter products with the "Mobile" category
    const filteredProducts = productsData.filter((item) => item.category === "Earbuds");
    setEarbudsProducts(filteredProducts);
  }, []);

  return (
    <div className="wrapper products_wrapper">
      {earbudsProducts.map((item) => (
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
  );
}

export default Earbuds;
