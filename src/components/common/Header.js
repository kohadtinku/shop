import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { dropdownMenu } from "../../data/headerData";
import commonContext from "../../contexts/common/commonContext";
import cartContext from "../../contexts/cart/cartContext";
import AccountForm from "../form/AccountForm";
import logo from "../../assets/ylogo1.png";
import productsData from "../../data/productsData";

const Header = () => {
  const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
  const { cartItems } = useContext(cartContext);
  const [isSticky, setIsSticky] = useState(false);

  // handle the sticky-header
  useEffect(() => {
    const handleIsSticky = () =>
      window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

    window.addEventListener("scroll", handleIsSticky);

    return () => {
      window.removeEventListener("scroll", handleIsSticky);
    };
  }, [isSticky]);

  const cartQuantity = cartItems.length;



  // ========new====
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value); // Update the search term

    // Filter data for auto-suggestions (case-insensitive)
    const filteredSuggestions = productsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Function to handle clicking on a search result
  const handleSearchResultClick = () => {
    setSearchTerm(""); // Clear the search term
    setSuggestions([]); // Clear suggestions
  };

  return (
    <>
      <header id="header" className={isSticky ? "sticky" : ""}>
        <div className="container">
          <div className="navbar">
            <h2 className="nav_logo">
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  style={{ height: "50px", width: "70px" }}
                />
              </Link>
            </h2>
            <nav className="nav_actions">
              <div className="search_action">
                <input
                  className="search_input"
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="search here.."
                  style={{
                    color: "black",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
                <button >
                  <AiOutlineSearch
                    style={{ color: "gray", fontSize: "30px" }}
                  />
                </button>
                {/* <div className="tooltip">Search</div> */}
              </div>

              <div className="cart_action">
                <Link to="/cart">
                  <AiOutlineShoppingCart />
                  {cartQuantity > 0 && (
                    <span className="badge">{cartQuantity}</span>
                  )}
                </Link>
                <div className="tooltip">Cart</div>
              </div>

              <div className="user_action">
                <span>
                  <AiOutlineUser />
                </span>
                <div className="dropdown_menu">
                  <h4>
                    Hello!{" "}
                    {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}
                  </h4>
                  <p>Access account and manage orders</p>
                  {!formUserInfo && (
                    <button type="button" onClick={() => toggleForm(true)}>
                      Login / Signup
                    </button>
                  )}
                  <div className="separator"></div>
                  <ul >
                    {dropdownMenu.map((item) => {
                      const { id, link, path } = item;
                      return (
                        <li key={id}>
                          <Link to={path}>{link}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Render the SearchBar component only if a search is not performed */}
      {/* {!searchQuery && <SearchBar />} */}
      <AccountForm />
      {/* Render the search results */}
   {/* Display search results if search term is not empty */}
   {searchTerm.trim() !== "" && (
  <div>
    <h2>Search Results</h2>
    {suggestions.length > 0 ? (
      <ul className="suggestion_bar">
        {suggestions.map((item, id) => (
          <li
            key={id}
            style={{ marginBottom: "5px", cursor: "pointer" }}
            className="list_bar"
          >
            {/* Use Link component to link to the product */}
            <Link
              to={`${item.path}${item.id}`} 
              style={{ color: "black", textDecoration: "none" }}
              onClick={handleSearchResultClick} // Close suggestion on link click
            >
              {item.title.toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <p>No results found</p>
    )}
  </div>
)}

  


{/* 
      {searchQuery && (
        <div
          className="searchfield"
          style={{
            color: "red",
            background: "black",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {productsData
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .slice(0, 10)
              .map((item) => (
                <li
                  key={item.id}
                  style={{ marginBottom: "5px", cursor: "pointer" }}
                  onClick={() => onSearch(item.title)}
                >
                  <Link
                    to={`${item.path}${item.id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )} */}
    </>
  );
};

export default Header;
