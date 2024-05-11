// import React from 'react'
// import productsData from '../../data/productsData';
// import ProductCard from '../product/ProductCard';

// const Mobile = () => {
//   const [products, setProducts] = useState(productsData);
//   const [selectedCategory, setSelectedCategory] = useState("Mobile");


//   useEffect(() => {
//     filterProducts();
//   }, [selectedCategory]);


  
//   const filterProducts = () => {
//     let filteredProducts = productsData;
//     if (selectedCategory !== "Mobile") {
//       filteredProducts = filteredProducts.filter(
//         (item) => item.category === selectedCategory
//       );
//     }

  
//   return (
//     <div className="wrapper products_wrapper">
//         {products.slice(0, 11).map((item) => (
//           <ProductCard key={item.id} {...item} />
//         ))}
//         <div
//           className="card products_card browse_card"
//           style={{ height: "200px", color: "red" }}
//         >
//           <Link to="/all-products">
//             Browse All <br /> Products <BsArrowRight />
//           </Link>
//         </div>
//       </div>
//   )
// }

// export default Mobile




// import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { BsArrowRight, BsExclamationCircle } from 'react-icons/bs';
// import productsData from '../../data/productsData';
// import ProductCard from '../product/ProductCard';
// import FilterBar from '../filters/FilterBar';
// import filtersContext from '../../contexts/filters/filtersContext';
// import EmptyView from '../common/EmptyView';

// const Mobile = () => {
//   const [mobileProducts, setMobileProducts] = useState([]);

//   useEffect(() => {
//     // Filter products with the "Mobile" category
//     const filteredProducts = productsData.filter((item) => item.category === "Mobile");
//     setMobileProducts(filteredProducts);
//   }, []);
//   const { allProducts } = useContext(filtersContext);

//   return (
//     <>

//     {/* <FilterBar />
//     <div className="wrapper products_wrapper">
//       {mobileProducts.map((item) => (
//         <ProductCard key={item.id} {...item} />
//       ))}
//       <div
//         className="card products_card browse_card"
//         style={{ height: "200px", color: "red" }}
//       >
//         <Link to="/all-products">
//           Browse All <br /> Products <BsArrowRight />
//         </Link>
//       </div>
//     </div> */}
//     <section id="all_products" className="section">
//                 <FilterBar />

//                 <div className="container">
//                     {
//                       allProducts.length ? (
//                             <div className="wrapper products_wrapper">
//                                 {
//                                   allProducts.filter((item) => item.category==="Mobile" )
//                                         <ProductCard
//                                             key={item.id}
//                                             {...item}
//                                         />
//                                     )                               }
//                             </div>
//                         ) : (
//                             <EmptyView
//                                 icon={<BsExclamationCircle />}
//                                 msg="No Results Found"
//                             />
//                         )
//                     }
//                 </div>
//             </section>
      

//     </>
//   );
// }

// export default Mobile;




import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsExclamationCircle } from 'react-icons/bs';
import productsData from '../../data/productsData';
import ProductCard from '../product/ProductCard';
import filtersContext from '../../contexts/filters/filtersContext';
import EmptyView from '../common/EmptyView';
import CustomFilter from '../filters/CustomFilter';
import FilterBar from '../filters/FilterBar';
import MainFIlter from './subfilter/MainFilter';

const Mobile = () => {
  const { allProducts } = useContext(filtersContext);
  const [mobileProducts, setMobileProducts] = useState([]);

  useEffect(() => {
    // Filter products with the "Mobile" category
    const filteredProducts = allProducts.filter((item) => item.category === "Mobile");
    setMobileProducts(filteredProducts);
  }, [allProducts]);

  return (
    <>
      <section id="custom_products" className="custom_products" style={{display:"flex",marginTop:"100px"}}>
        {/* <CustomFilter /> */}
        {/* <FilterBar/> */}
        <MainFIlter/>
        {/* <div className="container">
          {
            mobileProducts.length ? (
              <div className="wrapper products_wrapper">
                {mobileProducts.map(item => (
                  <ProductCard
                    key={item.id}
                    {...item}
                  />
                ))}
              </div>
            ) : (
              <EmptyView
                icon={<BsExclamationCircle />}
                msg="No Results Found"
              />
            )
          }
        </div> */}
      </section>
      {/* <div
        className="card products_card browse_card"
        style={{ height: "200px", color: "red" }}
      >
        <Link to="/all-products">
          Browse All <br /> Products <BsArrowRight />
        </Link>
      </div> */}
    </>
  );
}

export default Mobile;
