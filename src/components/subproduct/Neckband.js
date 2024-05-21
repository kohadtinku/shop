


import React, { useState, useEffect, useContext } from 'react';

import filtersContext from '../../contexts/filters/filtersContext';

import NeckBandFilter from './subfilter/NeckBandFilter';

const Neckband = () => {
  const { allProducts } = useContext(filtersContext);
  const [nackbandProducts, setNeckbandProducts] = useState([]);

  useEffect(() => {
    // Filter products with the "Mobile" category
    const filteredProducts = allProducts.filter((item) => item.category === "Neckbands");
    setNeckbandProducts(filteredProducts);
  }, [allProducts]);

  return (
    <>
      <section id="custom_products" className="custom_products" style={{display:"flex"}}>
        {/* <CustomFilter /> */}
        {/* <FilterBar/> */}
        <NeckBandFilter/>
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

export default Neckband;
