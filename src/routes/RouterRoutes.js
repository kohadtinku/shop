import React from "react";
import { Routes, Route } from "react-router";
import useScrollRestore from "../hooks/useScrollRestore";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import Mobile from "../components/subproduct/Mobile";
import TV from "../components/subproduct/TV";
import Headphone from "../components/subproduct/Headphone";
import Laptop from "../components/subproduct/Laptop";
import Earbuds from "../components/subproduct/Earbuds";
import Neckband from "../components/subproduct/Neckband";
import BreadCrumbs from "../components/breadcrumbs/BreadCrumbs";
import SearchResults from "../components/search/SearchResults";
const RouterRoutes = () => {
  useScrollRestore();

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-products" element={<AllProducts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product-details/:productId" element={<ProductDetails />} />
      <Route path="/search/:searchTerm" element={<SearchResults />} />

      {/* Subproduct routes */}
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/tv" element={<TV />} />
      <Route path="/headphone" element={<Headphone />} />
      <Route path="/laptop" element={<Laptop />} />
      <Route path="/earbuds" element={<Earbuds />} />
      <Route path="/neckband" element={<Neckband />} />

      {/* Catch-all route for errors */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  );
};

export default RouterRoutes;
