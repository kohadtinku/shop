// import { createContext, useEffect, useReducer } from "react";
// // import productsData from "../../data/productsData";
// import { categoryMenu, priceMenu } from "../../data/filterBarData";
// import filtersReducer from "./filtersReducer";

// import {
//   mobileData,
//   earbudsData,
//   earphoneData,
//   laptopData,
//   tvData,
//   headphoneData,
//   neckbandData
// } from "../../data/productsData";

// const allProductsData = [
//   ...mobileData,
//   ...earbudsData,
//   ...earphoneData,
//   ...laptopData,
//   ...tvData,
//   ...headphoneData,
//   ...neckbandData
// ];
// // Filters-Context
// const customContext = createContext();

// // Initial State
// const initialState = {
//   allProducts: [],
//   sortedValue: null,
//   updatePriceMenu: priceMenu,
//   updatedCategoryMenu: categoryMenu,
//   selectedPrice: {
//     price: 0,
//     minPrice: 0,
//     maxPrice: 0,
//   },
//   mobFilterBar: {
//     isMobSortVisible: false,
//     isMobFilterVisible: false,
//   },
// };

// // Filters-Provider Component
// const CustomFiltersProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(filtersReducer, initialState);

//   /* Loading All Products on the initial render */
//   useEffect(() => {
//     // making a shallow copy of the original products data, because we should never mutate the orginal data.
//     const products = [...allProductsData];

//     // finding the Max and Min Price, & setting them into the state.
//     const priceArr = products.map((item) => item.finalPrice);
//     const minPrice = Math.min(...priceArr);
//     const maxPrice = Math.max(...priceArr);

//     dispatch({
//       type: "LOAD_ALL_PRODUCTS",
//       payload: { products, minPrice, maxPrice },
//     });
//   }, []);

//   /* function for applying Filters - (sorting & filtering) */
//   const applyFilters = () => {
//     let updatedProducts = [...allProductsData];

//     /*==== Sorting ====*/
//     if (state.sortedValue) {
//       switch (state.sortedValue) {
//         case "Low - High":
//           updatedProducts = updatedProducts.sort(
//             (a, b) => a.finalPrice - b.finalPrice
//           );
//           break;

//         case "High - Low":
//           updatedProducts = updatedProducts.sort(
//             (a, b) => b.finalPrice - a.finalPrice
//           );
//           break;

//         default:
//           throw new Error("Wrong Option Selected");
//       }
//     }

//     /*==== Filtering ====*/

//     // filter by Brands
//     const checkedBrandItems = state.updatePriceMenu
//       .filter((item) => {
//         return item.checked;
//       })
//       .map((item) => item.label.toLowerCase());

//     if (checkedBrandItems.length) {
//       updatedProducts = updatedProducts.filter((item) =>
//         checkedBrandItems.includes(item.brand.toLowerCase())
//       );
//     }

//     // // filter by Category
//     // const checkedCategoryItems = state.updatedCategoryMenu.filter(item => {
//     //     return item.checked;
//     // }).map(item => item.label.toLowerCase());

//     // if (checkedCategoryItems.length) {
//     //     updatedProducts = updatedProducts.filter(item => checkedCategoryItems.includes(item.category.toLowerCase()));
//     // }

//     // filter by Price
//     // if (state.selectedPrice) {
//     //     updatedProducts = updatedProducts.filter(item => {
//     //         return item.finalPrice <= state.selectedPrice.price;
//     //     });
//     // }

//     // let updatedProducts = [...productsData];

//    // Filter by selected price range
// const checkedPriceRanges = state.updatePriceMenu
//   .filter(item => item.checked)
//   .map(item => item.range);

// if (checkedPriceRanges.length > 0) {
//   updatedProducts = updatedProducts.filter(item => {
//     const itemPrice = item.finalPrice;
//     return checkedPriceRanges.some(range => {
//       const [min, max] = range;
//       return min <= itemPrice && itemPrice <= max;
//     });
//   });
// }
//   };

//   useEffect(() => {
//     applyFilters();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [
//     state.sortedValue,
//     state.updatePriceMenu,
//     state.updatedCategoryMenu,
//     state.selectedPrice,
//   ]);

//   // Dispatched Actions
//   const setSortedValue = (sortValue) => {
//     return dispatch({
//       type: "SET_SORTED_VALUE",
//       payload: { sortValue },
//     });
//   };

//   const handleBrandsMenu = (id) => {
//     return dispatch({
//       type: "CHECK_BRANDS_MENU",
//       payload: { id },
//     });
//   };

//   const handleCategoryMenu = (id) => {
//     return dispatch({
//       type: "CHECK_CATEGORY_MENU",
//       payload: { id },
//     });
//   };

//   const handlePrice = (event) => {
//     const value = event.target.value;

//     return dispatch({
//       type: "HANDLE_PRICE",
//       payload: { value },
//     });
//   };

//   const handleMobSortVisibility = (toggle) => {
//     return dispatch({
//       type: "MOB_SORT_VISIBILITY",
//       payload: { toggle },
//     });
//   };

//   const handleMobFilterVisibility = (toggle) => {
//     return dispatch({
//       type: "MOB_FILTER_VISIBILITY",
//       payload: { toggle },
//     });
//   };

//   const handleClearFilters = () => {
//     return dispatch({
//       type: "CLEAR_FILTERS",
//     });
//   };

//   // Context values
//   const values = {
//     ...state,
//     setSortedValue,
//     handleBrandsMenu,
//     handleCategoryMenu,
//     handlePrice,
//     handleMobSortVisibility,
//     handleMobFilterVisibility,
//     handleClearFilters,
//   };

//   return (
//     <customContext.Provider value={values}>{children}</customContext.Provider>
//   );
// };

// export default customContext;
// export { CustomFiltersProvider };














import { createContext, useEffect, useReducer } from "react";
import { categoryMenu, priceMenu } from "../../data/filterBarData";
import filtersReducer from "./filtersReducer";

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

// Filters-Context
const customContext = createContext();

// Initial State
const initialState = {
  allProducts: [],
  sortedValue: null,
  updatePriceMenu: priceMenu,
  updatedCategoryMenu: categoryMenu,
  selectedPrice: {
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
  mobFilterBar: {
    isMobSortVisible: false,
    isMobFilterVisible: false,
  },
};

// Filters-Provider Component
const CustomFiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState);

  /* Loading All Products on the initial render */
  useEffect(() => {
    // making a shallow copy of the original products data, because we should never mutate the original data.
    const products = [...allProductsData];

    // finding the Max and Min Price, & setting them into the state.
    const priceArr = products.map((item) => item.finalPrice);
    const minPrice = Math.min(...priceArr);
    const maxPrice = Math.max(...priceArr);

    dispatch({
      type: "LOAD_ALL_PRODUCTS",
      payload: { products, minPrice, maxPrice },
    });
  }, []);

  /* function for applying Filters - (sorting & filtering) */
  const applyFilters = () => {
    let updatedProducts = [...allProductsData];

    /*==== Sorting ====*/
    if (state.sortedValue) {
      switch (state.sortedValue) {
        case "Low - High":
          updatedProducts = updatedProducts.sort(
            (a, b) => a.finalPrice - b.finalPrice
          );
          break;

        case "High - Low":
          updatedProducts = updatedProducts.sort(
            (a, b) => b.finalPrice - a.finalPrice
          );
          break;

        default:
          throw new Error("Wrong Option Selected");
      }
    }

    /*==== Filtering ====*/

    // filter by Brands
    const checkedBrandItems = state.updatePriceMenu
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (checkedBrandItems.length) {
      updatedProducts = updatedProducts.filter((item) =>
        checkedBrandItems.includes(item.brand.toLowerCase())
      );
    }

    // filter by Price range
    const checkedPriceRanges = state.updatePriceMenu
      .filter(item => item.checked)
      .map(item => item.range);

    if (checkedPriceRanges.length > 0) {
      updatedProducts = updatedProducts.filter(item => {
        const itemPrice = item.finalPrice;
        return checkedPriceRanges.some(range => {
          const [min, max] = range;
          return min <= itemPrice && itemPrice <= max;
        });
      });
    }

    // dispatch the filtered products
    dispatch({
      type: "SET_FILTERED_PRODUCTS",
      payload: { updatedProducts },
    });
  };

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.sortedValue,
    state.updatePriceMenu,
    state.updatedCategoryMenu,
    state.selectedPrice,
  ]);

  // Dispatched Actions
  const setSortedValue = (sortValue) => {
    return dispatch({
      type: "SET_SORTED_VALUE",
      payload: { sortValue },
    });
  };

  const handleBrandsMenu = (id) => {
    return dispatch({
      type: "CHECK_BRANDS_MENU",
      payload: { id },
    });
  };

  const handleCategoryMenu = (id) => {
    return dispatch({
      type: "CHECK_CATEGORY_MENU",
      payload: { id },
    });
  };

  const handlePrice = (event) => {
    const value = event.target.value;

    return dispatch({
      type: "HANDLE_PRICE",
      payload: { value },
    });
  };

  const handleMobSortVisibility = (toggle) => {
    return dispatch({
      type: "MOB_SORT_VISIBILITY",
      payload: { toggle },
    });
  };

  const handleMobFilterVisibility = (toggle) => {
    return dispatch({
      type: "MOB_FILTER_VISIBILITY",
      payload: { toggle },
    });
  };

  const handleClearFilters = () => {
    return dispatch({
      type: "CLEAR_FILTERS",
    });
  };

  // Context values
  const values = {
    ...state,
    setSortedValue,
    handleBrandsMenu,
    handleCategoryMenu,
    handlePrice,
    handleMobSortVisibility,
    handleMobFilterVisibility,
    handleClearFilters,
  };

  return (
    <customContext.Provider value={values}>{children}</customContext.Provider>
  );
};

export default customContext;
export { CustomFiltersProvider };
