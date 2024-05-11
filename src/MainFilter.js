// import React, { useContext, useState } from "react";
// import customContext from "./contexts/filters/customContext";
// import { sortQualityMenu } from "./data/filterBarData";
// import { displayMoney } from "./helpers/utils";
// import productsData from "./data/productsData";
// import ProductCard from "./components/product/ProductCard";
// import EmptyView from "./components/common/EmptyView";
// import { BsExclamationCircle } from "react-icons/bs";

// const MainFIlter = () => {
//   const {
//     sortedValue,
//     setSortedValue,
//     updatedBrandsMenu,
//     updatePriceMenu,
//     updatedCategoryMenu,
//     handleBrandsMenu,
//     handleCategoryMenu,
//     handlePrice,
//     selectedPrice: { price, minPrice, maxPrice },
//     mobFilterBar: { isMobSortVisible, isMobFilterVisible },
//     handleMobSortVisibility,
//     handleMobFilterVisibility,
//     handleClearFilters,
//   } = useContext(customContext);

//   const displayPrice = displayMoney(price);

//   const [isApplied, setIsApplied] = useState(false);

//   const handleApplyFilters = () => {
//     setIsApplied(true);
//     // Add logic to display filtered results
//     // For example, call a function to fetch filtered data
//   };

//   const [mobileProducts, setMobileProducts] = useState([]);

//   const handleLowtohigh = () => {
//     // Filter products with category "Mobile"
//     let filteredProducts = productsData.filter(product => product.category === "Mobile");

//     // Sort the filtered products by finalPrice from low to high
//     let sortedProducts = filteredProducts.sort((a, b) => a.finalPrice - b.finalPrice);

//     // Update state with sorted mobile products
//     setMobileProducts(sortedProducts);
//     console.log(sortedProducts);
//   }

//   const handleHightoLow = () => {
//     // Filter products with category "Mobile"
//     let filteredProducts = productsData.filter(product => product.category === "Mobile");

//     // Sort the filtered products by finalPrice from low to high
//     let sortedProducts = filteredProducts.sort((a, b) => b.finalPrice - a.finalPrice);

//     // Update state with sorted mobile products
//     setMobileProducts(sortedProducts);
//     console.log(sortedProducts);
//   }

// //  const handleChange = (event) => {
// //   const { id } = event.target;
// //   let filteredProducts = [];

// //   switch (id) {
// //     case "under5000":
// //       filteredProducts = productsData.filter(product => product.finalPrice < 5000);
// //       break;
// //     case "5000to10000":
// //       filteredProducts = productsData.filter(product => product.finalPrice >= 5000 && product.finalPrice <= 10000);
// //       break;
// //     case "10000to15000":
// //       filteredProducts = productsData.filter(product => product.finalPrice >= 10000 && product.finalPrice <= 15000);
// //       break;
// //     case "15000to20000":
// //       filteredProducts = productsData.filter(product => product.finalPrice >= 15000 && product.finalPrice <= 20000);
// //       break;
// //     case "25000andabove":
// //       filteredProducts = productsData.filter(product => product.finalPrice >= 25000);
// //       break;
// //     default:
// //       // Handle default case
// //       break;
// //   }

// //   // Update state with filtered products
// //   setMobileProducts(filteredProducts);
// // };

// const handleChange = (event) => {
//   const { id } = event.target;

//   // Define filter functions for each filter ID
//   const filterFunctions = {
//     under5000: product => product.finalPrice < 5000,
//     "5000to10000": product => product.finalPrice >= 5000 && product.finalPrice <= 10000,
//     "10000to15000": product => product.finalPrice >= 10000 && product.finalPrice <= 15000,
//     "15000to20000": product => product.finalPrice >= 15000 && product.finalPrice <= 20000,
//     "25000andabove": product => product.finalPrice >= 25000
//   };

//   // Get the selected filter function
//   const selectedFilter = filterFunctions[id];

//   // Apply the selected filter to filter only mobile products
//   const filteredProducts = productsData
//     .filter(product => product.category === "Mobile" && (!selectedFilter || selectedFilter(product)));

//   // Update state with filtered products
//   setMobileProducts(filteredProducts);
// };

//   return (
//     <>
//       {(sortedValue || isApplied) && (
//         <div className="">
//           <button type="button" className="btn" onClick={handleClearFilters}>
//             Clear Filters
//           </button>
//         </div>
//       )}
//       <div className="customDiv">
//         <div className={`sort_options ${isMobSortVisible ? "show" : ""}`}>
//           <div className="sort_head">
//             <h3 className="title">Sort By</h3>
//             <button
//               type="button"
//               className="close_btn"
//               onClick={() => handleMobSortVisibility(false)}
//             >
//               &times;
//             </button>
//           </div>

//           <div className="separator"></div>

//           {/* <ul className="sort_menu">
//             {sortQualityMenu.map((item) => {
//               const { id, title } = item;
//               return (
//                 <li
//                   key={id}
//                   className={sortedValue === title ? "active" : ""}
//                   onClick={() => setSortedValue(title)}
//                 >
//                   {title}
//                 </li>
//               );
//             })}
//           </ul> */}
//           <ul className="sort_menu">
//             <li>
//               <label htmlFor="lowHigh" onClick={handleLowtohigh}>Low-High</label>
//             </li>
//             <li>
//               <label htmlFor="highLow" onClick={handleHightoLow}>High-Low</label>
//             </li>
//           </ul>
//         </div>

//         <div className={`filter_options ${isMobFilterVisible ? "show" : ""}`}>
//           <div className="filter_head">
//             <h3 className="title">Filter By</h3>
//             <button
//               type="button"
//               className="close_btn"
//               onClick={() => handleMobFilterVisibility(false)}
//             >
//               &times;
//             </button>
//           </div>

//           <div className="separator"></div>

//           <div className="filter_block">
//             <h4>Price</h4>
//             {/* <ul className="filter_menu">
//               {updatePriceMenu.map((item) => {
//                 const { id, checked, label } = item;
//                 return (
//                   <li key={id} className="filter_btn">
//                     <input
//                       type="checkbox"
//                       id={label}
//                       value={label}
//                       checked={checked}
//                       onChange={() => handleBrandsMenu(id)}
//                     />
//                     <label htmlFor={label}>{label}</label>
//                   </li>
//                 );
//               })}
//             </ul> */}

//             <ul className="filter_menu">
//               {[
//                 { id: "under5000", label: "under 5000" },
//                 { id: "5000to10000", label: "5000-10000" },
//                 { id: "10000to15000", label: "10000-15000" },
//                 { id: "15000to20000", label: "15000-20000" },
//                 { id: "25000andabove", label: "25000 and above" },
//               ].map(({ id, label }) => (
//                 <li key={id}>
//                   <input type="checkbox" id={id} onChange={handleChange}/>
//                   <label htmlFor={id}>{label}</label>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="container" style={{display:"flex"}}>
//           {
//             mobileProducts.length ? (
//               <div className="wrapper products_wrapper">
//                 {mobileProducts.map(item => (
//                   <ProductCard
//                     key={item.id}
//                     {...item}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <EmptyView
//                 icon={<BsExclamationCircle />}
//                 msg="No Results Found"
//               />
//             )
//           }
//         </div>
//     </>
//   );
// };

// export default MainFIlter;



import React, { useContext, useState, useEffect } from "react";
import customContext from "./contexts/filters/customContext";
import { displayMoney } from "./helpers/utils";
import productsData from "./data/productsData";
import ProductCard from "./components/product/ProductCard";
import EmptyView from "./components/common/EmptyView";
import { BsExclamationCircle } from "react-icons/bs";
import priceMenu from "./data/filterBarData";
import './App.css'
const MainFIlter = () => {
  const {
    sortedValue,
    mobFilterBar: { isMobSortVisible, isMobFilterVisible },
    handleMobSortVisibility,
    handleMobFilterVisibility,
    handleClearFilters,
  } = useContext(customContext);

  const displayPrice = displayMoney(priceMenu);
  const [isApplied, setIsApplied] = useState(false);
  const [mobileProducts, setMobileProducts] = useState([]);

  useEffect(() => {
    // Filter products with category "Mobile" initially
    const filteredProducts = productsData.filter(
      (product) => product.category === "Mobile"
    );
    setMobileProducts(filteredProducts);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleLowtohigh = () => {
    // Sort the filtered products by finalPrice from low to high
    let sortedProducts = mobileProducts.sort(
      (a, b) => a.finalPrice - b.finalPrice
    );
    setMobileProducts([...sortedProducts]); // Ensure state immutability
  };

  const handleHightoLow = () => {
    // Sort the filtered products by finalPrice from high to low
    let sortedProducts = mobileProducts.sort(
      (a, b) => b.finalPrice - a.finalPrice
    );
    setMobileProducts([...sortedProducts]); // Ensure state immutability
  };
  const handleChange = (event) => {
    const { value } = event.target;
    let filteredProducts = [];

    // Filter out non-mobile products first
    const mobileProductsData = productsData.filter(
      (product) => product.category === "Mobile"
    );

    switch (value) {
      case "under5000":
        filteredProducts = mobileProductsData.filter(
          (product) => product.finalPrice < 5000
        );
        break;
      case "5000to10000":
        filteredProducts = mobileProductsData.filter(
          (product) => product.finalPrice >= 5000 && product.finalPrice <= 10000
        );
        break;
      case "10000to15000":
        filteredProducts = mobileProductsData.filter(
          (product) =>
            product.finalPrice >= 10000 && product.finalPrice <= 15000
        );
        break;
      case "15000to20000":
        filteredProducts = mobileProductsData.filter(
          (product) =>
            product.finalPrice >= 15000 && product.finalPrice <= 20000
        );
        break;
      case "25000andabove":
        filteredProducts = mobileProductsData.filter(
          (product) => product.finalPrice >= 25000
        );
        break;
      default:
        // Reset to show all mobile products if no price range is selected
        filteredProducts = mobileProductsData;
        break;
    }

    // Update state with filtered mobile products
    setMobileProducts(filteredProducts);
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
              if (event.target.value === "lowHigh") {
                handleLowtohigh();
              } else if (event.target.value === "highLow") {
                handleHightoLow();
              }
            }}
          >
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
      <div className="custom_container" style={{ display: "flex" }}>
        {mobileProducts.length ? (
          <div className="wrapper products_wrapper">
            {mobileProducts.map((item) => (
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

export default MainFIlter;
