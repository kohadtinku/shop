import React, { useContext, useState } from "react";
import filtersContext from "../../contexts/filters/customContext";
import { sortMenu, sortQualityMenu } from "../../data/filterBarData";
import { displayMoney } from "../../helpers/utils";
import customContext from "../../contexts/filters/customContext";

const CustomFilter = () => {
  const {
    sortedValue,
    setSortedValue,
    updatedBrandsMenu,
    updatePriceMenu,
    updatedCategoryMenu,
    handleBrandsMenu,
    handleCategoryMenu,
    handlePrice,
    selectedPrice: { price, minPrice, maxPrice },
    mobFilterBar: { isMobSortVisible, isMobFilterVisible },
    handleMobSortVisibility,
    handleMobFilterVisibility,
    handleClearFilters,
  } = useContext(customContext);

  const displayPrice = displayMoney(price);

  const [isApplied, setIsApplied] = useState(false);

  const handleApplyFilters = () => {
    setIsApplied(true);
    // Add logic to display filtered results
    // For example, call a function to fetch filtered data
  };

  return (
    <>
      {(sortedValue || isApplied) && (
        <div className="">
          <button type="button" className="btn" onClick={handleClearFilters}>
            Clear Filters
          </button>
        </div>
      )}
      <div className="customDiv" >
        <div className={`sort_options ${isMobSortVisible ? "show" : ""}`}>
          <div className="sort_head">
            <h3 className="title">Sort By</h3>
            <button
              type="button"
              className="close_btn"
              onClick={() => handleMobSortVisibility(false)}
            >
              &times;
            </button>
          </div>

          <div className="separator"></div>

          <ul className="sort_menu">
            {sortQualityMenu?.map((item) => {
              const { id, title } = item;
              return (
                <li
                  key={id}
                  className={sortedValue === title ? "active" : ""}
                  onClick={() => setSortedValue(title)}
                >
                  {title}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`filter_options ${isMobFilterVisible ? "show" : ""}`}>
          <div className="filter_head">
            <h3 className="title">Filter By</h3>
            <button
              type="button"
              className="close_btn"
              onClick={() => handleMobFilterVisibility(false)}
            >
              &times;
            </button>
          </div>

          <div className="separator"></div>

          <div className="filter_block">
            <h4>Price</h4>
            <ul className="filter_menu">
              {updatePriceMenu.map((item) => {
                const { id, checked, label } = item;
                return (
                  <li key={id} className="filter_btn">
                    <input
                      type="checkbox"
                      id={label}
                      value={label}
                      checked={checked}
                      onChange={() => handleBrandsMenu(id)}
                    />
                    <label htmlFor={label}>{label}</label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomFilter;
