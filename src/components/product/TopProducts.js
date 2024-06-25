// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BsArrowRight } from "react-icons/bs";
// import useActive from "../../hooks/useActive";
// import productsData from "../../data/productsData";
// import ProductCard from "./ProductCard";

// const TopProducts = () => {
//   const [products, setProducts] = useState(productsData);
//   const [company, setCompany] = useState(productsData);
//   const [selectedBrand, setSelectedBrand] = useState("All");
//   const { activeClass, handleActive } = useActive(0);

//   // making a unique set of product's category
//   const productsCategory = [
//     "All",
//     ...new Set(productsData.map((item) => item.category)),
//   ];
//   // Get unique company names from products state
//   const filterCategory = [...new Set(products.map((item) => item.company))];

//   // handling product's filtering
//   const handleProducts = (category,company, i) => {
//     if (category === "All") {
//       setProducts(productsData);
//       setCompany(productsData)
//       setSelectedBrand("All");
//       handleActive(i);
//       return;
//     }

//     const filteredProducts = productsData.filter(
//       (item) => item.category === category
//     );
//     setProducts(filteredProducts);
//     setSelectedBrand("All");
//     handleActive(i);
//   };

//   // handling company product's filtering
//   // const handlefilterProducts = (company) => {
//   //   setSelectedBrand(company);
//   //   if (company === "All") {
//   //     setProducts(productsData);
//   //   } else {
//   //     const filteredCompanyProducts = productsData.filter(
//   //       (item) => item.company === company
//   //     );
//   //     setProducts(filteredCompanyProducts);
//   //   }
//   // };

//   return (
//     <>
//       <div className="products_filter_tabs">
//         <ul className="tabs">
//           {productsCategory.map((item, i) => (
//             <li
//               key={i}
//               className={`tabs_item ${activeClass(i)}`}
//               onClick={() => handleProducts(item, i)}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>

//         <div className="filterbarProducts" style={{ marginTop: "10px", padding: "10px", margin: "10px" }}>
//           <select value={selectedBrand} onChange={(e) => handleProducts(e.target.value)} style={{ padding: "10px" }}>
//             <option value="All">All</option>

//             {filterCategory && filterCategory.map((item, i) => (
//               <option key={i} value={item}>
//                 {item}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="wrapper products_wrapper">
//         {products.slice(0, 11).map((item) => (
//           <ProductCard key={item.id} {...item} />
//         ))}
//         <div className="card products_card browse_card" style={{ height: "200px", color: "red" }}>
//           <Link to="/all-products">
//             Browse All <br /> Products <BsArrowRight />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TopProducts;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BsArrowRight } from "react-icons/bs";
// import useActive from "../../hooks/useActive";
// import productsData from "../../data/productsData";
// import ProductCard from "./ProductCard";

// const TopProducts = () => {
//   const [products, setProducts] = useState(productsData);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedCompany, setSelectedCompany] = useState("All");
//   const [selectedTemp, setSelectedTemp] = useState("");

//   const { activeClass, handleActive } = useActive(0);
//   const productsCategory = [
//     "All",
//     ...new Set(productsData.map((item) => item.category)),
//   ];
//   const companiesSet = new Set(products.map((item) => item.company));

//   const filterCompanies = ["All", ...companiesSet];
//   console.log(filterCompanies);

//   useEffect(() => {
//     filterProducts();
//   }, [selectedCategory, selectedCompany,selectedTemp]);

//   const filterProducts = () => {
//     let filteredProducts = productsData;
//     if (selectedCategory !== "All") {
//       filteredProducts = filteredProducts.filter(
//         (item) => item.category === selectedCategory
//       );
//     }
//     if (selectedCompany !== "All") {
//       filteredProducts = filteredProducts.filter(
//         (item) => item.company === selectedCompany
//       );
//     }
//     // Add high filter for Mobile category
//     if (selectedCategory === "Mobile" && selectedCompany === "All") {
//       filteredProducts = filteredProducts.filter(
//         (item) => item.category === "Mobile"
//       );
//     }
//     setProducts(filteredProducts);
//   };

//   const handleProducts = (category, i) => {
//     setSelectedCategory(category);
//     setSelectedCompany("All");
//     handleActive(i);
//   };

//   const handleFilterProducts = (company) => {
//     setSelectedCompany(company);
//     let filteredProducts = productsData;

//     if (company !== "All") {
//       filteredProducts = productsData.filter(
//         (item) => item.company === company
//       );
//     } else if (selectedCategory !== "All") {
//       filteredProducts = productsData.filter(
//         (item) => item.category === selectedCategory
//       );
//     }

//     // Sort filtered products by name
//     filteredProducts.sort((a, b) => (a.name > b.name ? 1 : -1));

//     setProducts(filteredProducts);
//   };

//   return (
//     <>
//       <div className="products_filter_tabs">
//         <ul className="tabs">
//           {productsCategory.map((item, i) => (
//             <li
//               key={i}
//               className={`tabs_item ${activeClass(i)}`}
//               onClick={() => handleProducts(item, i)}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div
//         className="filterbarProducts"
//         style={{ marginTop: "10px", padding: "10px", margin: "10px" }}
//       >
//         <select
//           name="company"
//           id="company"
//           value={selectedCompany}
//           onChange={(e) => handleFilterProducts(e.target.value)}
//           style={{ padding: "10px" }}
//         >
//           {filterCompanies.map((item, i) => (
//             <option key={i} value={item}>
//               {item}
//             </option>
//           ))}
//         </select>
//       </div>


//       <div className="wrapper products_wrapper">
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
//     </>
//   );
// };

// export default TopProducts;




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import useActive from "../../hooks/useActive";
import ProductCard from "./ProductCard";
// import productsData from "../../data/productsData";
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

const TopProducts = () => {
  const [products, setProducts] = useState(allProductsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const { activeClass, handleActive } = useActive(0);
  const productsCategory = [
    "All",
    ...new Set(allProductsData.map((item) => item.category)),
  ];
  const companiesSet = new Set(products.map((item) => item.company));
  const filterCompanies = ["All", ...companiesSet];

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, selectedCompany]);

  const filterProducts = () => {
    let filteredProducts = allProductsData;
    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === selectedCategory
      );
    }
    if (selectedCompany !== "All") {
      filteredProducts = filteredProducts.filter(
        (item) => item.company === selectedCompany
      );
    }
  
    // Sort filtered products by name
    filteredProducts.sort((a, b) => (a.name > b.name ? 1 : -1));
    setProducts(filteredProducts);
  };

  const handleProducts = (category, i) => {
    setSelectedCategory(category);
    setSelectedCompany("All");
    handleActive(i);
  };

  const handleFilterProducts = (company) => {
    setSelectedCompany(company);
  };

  return (
    <>
      <div className="products_filter_tabs">
        <ul className="tabs">
          {productsCategory.map((item, i) => (
            <li
              key={i}
              className={`tabs_item ${activeClass(i)}`}
              onClick={() => handleProducts(item, i)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="filterbarProducts"
        style={{ marginTop: "10px", padding: "10px", margin: "10px" }}
      >
        <select
          name="company"
          id="company"
          value={selectedCompany}
          onChange={(e) => handleFilterProducts(e.target.value)}
          style={{ padding: "10px" }}
        >
          {filterCompanies.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="wrapper products_wrapper">
        {products.slice(0, 11).map((item) => (
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
    </>
  );
};

export default TopProducts;
