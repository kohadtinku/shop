// src/components/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/productsData';
import ProductCard from '../product/ProductCard';

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const results = productsData.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      {filteredProducts.length > 0 ? (
        <div className='wrapper products_wrapper'>
          {filteredProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
