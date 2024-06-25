// import React, { useContext } from "react";
// import { IoMdStar } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { displayMoney } from "../../helpers/utils";
// import cartContext from "../../contexts/cart/cartContext";
// import useActive from "../../hooks/useActive";
// import { ToastContainer, toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";

// const ProductCard = (props) => {
//   const {
//     id,
//     images,
//     title,
//     info,
//     finalPrice,
//     originalPrice,
//     rateCount,
//     path,
//   } = props;

//   const { addItem } = useContext(cartContext);
//   const { active, handleActive, activeClass } = useActive(false);

//   // handling Add-to-cart
//   const handleAddItem = () => {
//     const item = { ...props };
//     addItem(item);
//     // toast("Added To Cart");
//     // console.log(toast);
//     // alert("Added to cart")
//     // toast.success(`Added to cart, ${id}!`);

//     handleActive(id);

//     setTimeout(() => {
//       handleActive(false);
//     }, 3000);
//   };

//   const newPrice = displayMoney(finalPrice);
//   const oldPrice = displayMoney(originalPrice);

//   return (
//     <>
//       <div className="card products_card">
//         <figure className="products_img">
//           <Link to={`${path}${id}`}>
//             <img src={images[0]} alt="product-img" />
//           </Link>
//         </figure>
//         <div className="products_details">
//           <span className="rating_star">
//             {[...Array(rateCount)].map((_, i) => (
//               <IoMdStar key={i} />
//             ))}
//           </span>
//           <h3 className="products_title">
//             <Link to={`${path}${id}`}>{title}</Link>
//           </h3>
//           <h5 className="products_info">{info}</h5>
//           <div className="separator"></div>
//           <h2 className="products_price">
//             {newPrice} &nbsp;
//             <small>
//               <del>{oldPrice}</del>
//             </small>
//           </h2>
//           <Link to={"/cart"}>
//             <button
//               type="button"
//               className={`btn products_btn ${activeClass(id)}`}
//               onClick={handleAddItem}
//               // id={id}
//             >
//               {/* {active ? 'Added' : 'Buy Now'} */}
//               <h5>Buy Now</h5>
//               {/* <ToastContainer  position="top-right"
//          autoClose={2000}
//          hideProgressBar={false}
//          newestOnTop={false}
//          closeOnClick={true}
//          rtl={false}
//          limit={1}
//          pauseOnFocusLoss
//          draggable
//          id={id}
//          pauseOnHover /> */}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCard;

import React, { useContext, useState } from "react";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { displayMoney } from "../../helpers/utils";
import cartContext from "../../contexts/cart/cartContext";
import useActive from "../../hooks/useActive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = (props) => {
  const {
    id,
    images = [],
    title,
    info,
    finalPrice = [] || "",
    originalPrice = [] || "",
    rateCount,
    path,
  } = props;

  const { addItem } = useContext(cartContext);
  const { active, handleActive, activeClass } = useActive(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // handling Add-to-cart
  const handleAddItem = () => {
    const item = { ...props };
    addItem(item);
    setAddedToCart(true);
    handleActive(id);
    setTimeout(() => {
      setAddedToCart(false);
      handleActive(false);
    }, 2000); // Reset addedToCart state after 2 seconds
  };

  const newPrice = displayMoney(finalPrice);
  const oldPrice = displayMoney(originalPrice);

  return (
    <>
      <div className="card products_card">
        <figure className="products_img">
          <Link to={`${path}${id}`}>
            {images.length > 0 ? (
              <img src={images[0]} alt="product-img" />
            ) : (
              <img src="/path/to/default/image.jpg" alt="default-img" />
            )}{" "}
          </Link>
        </figure>
        <div className="products_details">
          <span className="rating_star">
            {[...Array(rateCount)].map((_, i) => (
              <IoMdStar key={i} />
            ))}
          </span>
          <h3 className="products_title">
            <Link to={`${path}${id}`}>{title}</Link>
          </h3>
          <h5 className="products_info">{info}</h5>
          <div className="separator"></div>
          <h2 className="products_price">
            {displayMoney(finalPrice[0] || finalPrice[0])} &nbsp;
            {originalPrice[0] && (
              <small>
                <del>{displayMoney(originalPrice[0])}</del>
              </small>
            )}
          </h2>
          <Link to="/cart">
            <button
              type="button"
              className={`btn products_btn ${activeClass(id)}`}
              onClick={handleAddItem}
              disabled={addedToCart} // Disable button if item added to cart
            >
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
