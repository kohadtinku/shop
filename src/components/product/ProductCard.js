
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
    color=[]
  } = props;

  const { addItem } = useContext(cartContext);
  const { active, handleActive, activeClass } = useActive(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [iscolor, setIsColor] = useState(color[0]);

  // handling Add-to-cart
  const handleAddItem = () => {
    const item = { ...props };
    addItem({...item,color:iscolor});
    setAddedToCart(true);
    handleActive(id);
    setTimeout(() => {
      setAddedToCart(false);
      handleActive(false);
    }, 2000); // Reset addedToCart state after 2 seconds
  };

  console.log("propsscard",props);
  const newPrice = displayMoney(finalPrice);
  const oldPrice = displayMoney(originalPrice);

  return (
    <>
      <div className="card products_card">
      <Link to={`${path}${id}`}>
        <figure className="products_img">
        
            {images.length > 0 ? (
              <img src={images[0]} alt="product-img" />
            ) : (
              <img src="/path/to/default/image.jpg" alt="default-img" />
            )}{" "}
          
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
          <h5 className="products_info">{info.slice(0, 80)}...<span style={{color:"red"}}>Read More </span> </h5>       
             <div className="separator"></div>
          <h2 className="products_price">
            {displayMoney(finalPrice[0] || finalPrice[0])} &nbsp;
            {originalPrice[0] && (
              <small>
                <del>{displayMoney(originalPrice[0])}</del>
              </small>
            )}
          </h2>
          <Link to={`${path}${id}`}>
            <button
              type="button"
              className={`btn products_btn ${activeClass(id)}`}
              // onClick={handleAddItem}
              // disabled={addedToCart} // Disable button if item added to cart
            >
              Buy Now
            </button>
          </Link>
        </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;






