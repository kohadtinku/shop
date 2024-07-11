import React, { useContext } from "react";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import { displayMoney } from "../../helpers/utils";
import cartContext from "../../contexts/cart/cartContext";
import QuantityBox from "../common/QuantityBox";

const CartItem = (props) => {
  const {
    id,
    images,
    title,
    info,
    category,
    finalPrice,
    originalPrice,
    quantity,
    path,
    ram,
    color: isColor,
  } = props;

  console.log("popss", props);
  const { removeItem } = useContext(cartContext);

  const newPrice = displayMoney(finalPrice);
  const oldPrice = displayMoney(originalPrice);

  return (
    <>
      <div className="cart_item">
        <figure className="cart_item_img">
          <Link to={`${path}${id}`}>
            <img src={images[0]} alt="product-img" />
          </Link>
        </figure>
        <div className="cart_item_info">
          <div className="cart_item_head">
            <h4 className="cart_item_title">
               <span style={{color:"black",fontWeight:"700"}}> Product Name:</span>
              <Link to={`/product-details/${id}`}>
                {title} {info}
              </Link>
            </h4>
            <div className="cart_item_del">
              <span onClick={() => removeItem(id)}>
                <TbTrash />
              </span>
              <div className="tooltip">Remove Item</div>
            </div>
          </div>

          <h2 className="cart_item_price">
            ₹{finalPrice} &nbsp;
            <small>
              <del>₹{originalPrice}</del>
            </small>
          </h2>
          <div className="" style={{ display: "flex" }}>
            <label htmlFor="">Color:</label>
            <p>{isColor}</p>
          </div>
          {(category === "Mobile" || category === "Laptop") && (
              <div className="" style={{ display: "flex" }}>
                <label htmlFor="">RAM:</label>
                <p>{ram}</p>
              </div>
            )}

          <QuantityBox itemId={id} itemQuantity={quantity} />
        </div>
      </div>
    </>
  );
};

export default CartItem;
