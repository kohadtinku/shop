// src/components/SearchResults.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data/productsData";
import ProductCard from "../product/ProductCard";
import EmptyView from "../common/EmptyView";
import { BsExclamationCircle } from "react-icons/bs";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const results = productsData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  return (
    <div>
      {filteredProducts.length > 0 ? (
        <>
          <div className="search">
            <h2 style={{ marginTop: "5%", padding: "10px" }}>
              Search Results for{" "}
              <span style={{ color: "red" }}>"{searchTerm}" </span>{" "}
            </h2>
            <div className="wrapper products_wrapper">
              {filteredProducts.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div style={{marginTop:"5%",padding:"50px"}}>
          <EmptyView icon={<BsExclamationCircle />} msg="No Results Found" />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
