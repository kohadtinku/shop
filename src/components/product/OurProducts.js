import React, { useState } from 'react';
import productsData from '../../data/productsData';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const OurProducts = () => {
    const [products, setProducts] = useState(productsData);

    return (
        <div className="our-products">
            <h2>Our Products</h2>
           
      <div className="wrapper products_wrapper">
        {/* {products.slice(0, 11).map((item) => ( */}
        {products.slice(0, 20).map((item) => (
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
}

export default OurProducts;
