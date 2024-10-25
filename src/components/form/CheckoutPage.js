// CheckoutPage.js

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { displayMoney, calculateTotal } from "../../helpers/utils";
import cartContext from "../../contexts/cart/cartContext";
import CartItem from "../cart/CartItem";
import "./CheckoutPage.css";
import useDocTitle from "../../hooks/useDocTitle";

const CheckoutPage = () => {
  useDocTitle("Cart");

  const { cartItems, removeItem } = useContext(cartContext);
  const cartQuantity = cartItems.length;

  const cartTotal = cartItems.map((item) => item.originalPrice * item.quantity);
  const calculateCartTotal = calculateTotal(cartTotal);
  const displayCartTotal = displayMoney(calculateCartTotal);

  const cartDiscount = cartItems.map(
    (item) => (item.originalPrice - item.finalPrice) * item.quantity
  );
  const calculateCartDiscount = calculateTotal(cartDiscount);
  const displayCartDiscount = displayMoney(calculateCartDiscount);

  const totalAmount = calculateCartTotal - calculateCartDiscount;
  const displayTotalAmount = displayMoney(totalAmount);

  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    mobile: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic for submitting data to backend or processing order
  };

  return (
    <div className="checkout-page-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="product-details">
          <h3>Product Details</h3>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} removeItem={removeItem}>
                <div className="quantity-display">
                  <strong>Quantity:</strong> {item.quantity}
                </div>
              </CartItem>
            ))}
          </div>
        </div>
        <div className="customer-details">
          <h3>Customer Information</h3>
          <label className="form-label">
            Name:
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>
          <label className="form-label">
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>
          <label className="form-label">
            Mobile:
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>
          <label className="form-label">
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>
          <label className="form-label">
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-input"
              required
            />
          </label>
        </div>
        <button type="submit" className="submit-btn">
          Place Order
        </button>
      </form>
      <section id="order-summary" className="section">
        <div className="container">
          <div className="order-summary">
            <h3>
              Order Summary &nbsp; ({cartQuantity}{" "}
              {cartQuantity > 1 ? "items" : "item"})
            </h3>
            <div className="order-summary-details">
              <div className="price">
                <span>Original Price</span>
                <b>{displayCartTotal}</b>
              </div>
              <div className="discount">
                <span>Discount</span>
                <b>- {displayCartDiscount}</b>
              </div>
              <div className="delivery">
                <span>Delivery</span>
                <b>Free</b>
              </div>
              <div className="separator"></div>
              <div className="total-price">
                <b>
                  <small>Total Price</small>
                </b>
                <b>{displayTotalAmount}</b>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
