// import React, { useContext, useEffect, useState } from "react";
// import { Link, Navigate, redirect } from "react-router-dom";
// import {
//   AiOutlineSearch,
//   AiOutlineShoppingCart,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { dropdownMenu } from "../../data/headerData";
// import commonContext from "../../contexts/common/commonContext";
// import cartContext from "../../contexts/cart/cartContext";
// import AccountForm from "../form/AccountForm";
// import logo from "../../assets/ylogo1.png";
// import productsData from "../../data/productsData";

// const Header = () => {
//   const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
//   const { cartItems } = useContext(cartContext);
//   const [isSticky, setIsSticky] = useState(false);

//   // handle the sticky-header
//   useEffect(() => {
//     const handleIsSticky = () =>
//       window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

//     window.addEventListener("scroll", handleIsSticky);

//     return () => {
//       window.removeEventListener("scroll", handleIsSticky);
//     };
//   }, [isSticky]);

//   const cartQuantity = cartItems.length;

//   // ========new====
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   // Function to handle changes in the search input
//   const handleSearchChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value); // Update the search term

//     // Filter data for auto-suggestions (case-insensitive)
//     const filteredSuggestions = productsData.filter((item) =>
//       item.title.toLowerCase().includes(value.toLowerCase())
//     );
//     setSuggestions(filteredSuggestions);
//   };

//   // Function to handle clicking on a search result
//   const handleSearchResultClick = () => {
//     setSearchTerm(""); // Clear the search term
//     setSuggestions([]); // Clear suggestions
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     console.log("search click");
//     Navigate(`/search/${searchTerm}`)
//   };
//   return (
//     <>
//       <header id="header" className={isSticky ? "sticky" : ""}>
//         <div className="container">
//           <div className="navbar">
//             <h2 className="nav_logo">
//               <Link to="/">
//                 <img
//                   src={logo}
//                   alt=""
//                   style={{ height: "50px", width: "70px" }}
//                 />
//               </Link>
//             </h2>
//             <nav className="nav_actions">
//               <div className="search_action">
//                 <input
//                   className="search_input"
//                   type="text"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                   placeholder="search here.."
//                   style={{
//                     color: "black",
//                     borderRadius: "10px",
//                     padding: "10px",
//                   }}
//                 />
//                 <Link to={`/search/${searchTerm}`} >
//                   <button onClick={handleSearchSubmit}>
//                     <AiOutlineSearch
//                       style={{ color: "gray", fontSize: "30px" }}
//                     />
//                   </button>
//                 </Link>
//                 {/* <div className="tooltip">Search</div> */}
//               </div>

//               <div className="cart_action">
//                 <Link to="/cart">
//                   <AiOutlineShoppingCart />
//                   {cartQuantity > 0 && (
//                     <span className="badge">{cartQuantity}</span>
//                   )}
//                 </Link>
//                 <div className="tooltip">Cart</div>
//               </div>

//               <div className="user_action">
//                 <span>
//                   <AiOutlineUser />
//                 </span>
//                 <div className="dropdown_menu">
//                   <h4>
//                     Hello!{" "}
//                     {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}
//                   </h4>
//                   <p>Access account and manage orders</p>
//                   {!formUserInfo && (
//                     <button type="button" onClick={() => toggleForm(true)}>
//                       Login / Signup
//                     </button>
//                   )}
//                   <div className="separator"></div>
//                   <ul>
//                     {dropdownMenu.map((item) => {
//                       const { id, link, path } = item;
//                       return (
//                         <li key={id}>
//                           <Link to={path}>{link}</Link>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>
//       {/* Render the SearchBar component only if a search is not performed */}
//       {/* {!searchQuery && <SearchBar />} */}
//       <AccountForm />
//       {/* Render the search results */}
//       {/* Display search results if search term is not empty */}
//       {searchTerm.trim() !== "" && (
//         <div>
//           <h2>Search Results</h2>
//           {suggestions.length > 0 ? (
//             <ul className="suggestion_bar">
//               {suggestions.map((item, id) => (
//                 <li
//                   key={id}
//                   style={{ marginBottom: "5px", cursor: "pointer" }}
//                   className="list_bar"
//                 >
//                   {/* Use Link component to link to the product */}
//                   <Link
//                     to={`${item.path}${item.id}`}
//                     style={{ color: "black", textDecoration: "none" }}
//                     onClick={handleSearchResultClick} // Close suggestion on link click
//                   >
//                     {item.title.toLowerCase()}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No results found</p>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;






// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";  // Updated import statement
// import {
//   AiOutlineSearch,
//   AiOutlineShoppingCart,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { dropdownMenu } from "../../data/headerData";
// import commonContext from "../../contexts/common/commonContext";
// import cartContext from "../../contexts/cart/cartContext";
// import AccountForm from "../form/AccountForm";
// import logo from "../../assets/ylogo1.png";
// import productsData from "../../data/productsData";

// const Header = () => {
//   const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
//   const { cartItems } = useContext(cartContext);
//   const [isSticky, setIsSticky] = useState(false);
//   const navigate = useNavigate();  // Added useNavigate hook

//   // handle the sticky-header
//   useEffect(() => {
//     const handleIsSticky = () =>
//       window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

//     window.addEventListener("scroll", handleIsSticky);

//     return () => {
//       window.removeEventListener("scroll", handleIsSticky);
//     };
//   }, [isSticky]);

//   const cartQuantity = cartItems.length;

//   // ========new====
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   // Function to handle changes in the search input
//   const handleSearchChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value); // Update the search term

//     // Filter data for auto-suggestions (case-insensitive)
//     const filteredSuggestions = productsData.filter((item) =>
//       item.title.toLowerCase().includes(value.toLowerCase())
//     );
//     setSuggestions(filteredSuggestions);
//   };

//   // Function to handle clicking on a search result
//   const handleSearchResultClick = () => {
//     setSearchTerm(""); // Clear the search term
//     setSuggestions([]); // Clear suggestions
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     console.log("search click");
//     navigate(`/search/${searchTerm}`);  // Updated navigation
//     setSearchTerm(""); // Clear the search term
//     setSuggestions([]); // Clear suggestions
//   };

//   return (
//     <>
//       <header id="header" className={isSticky ? "sticky" : ""}>
//         <div className="container">
//           <div className="navbar">
//             <h2 className="nav_logo">
//               <Link to="/">
//                 <img
//                   src={logo}
//                   alt=""
//                   style={{ height: "50px", width: "70px" }}
//                 />
//               </Link>
//             </h2>
//             <nav className="nav_actions">
//               <div className="search_action">
//                 <input
//                   className="search_input"
//                   type="text"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                   placeholder="search here.."
//                   style={{
//                     color: "black",
//                     borderRadius: "10px",
//                     padding: "10px",
//                   }}
//                 />
//                 <button onClick={handleSearchSubmit}>
//                   <AiOutlineSearch
//                     style={{ color: "gray", fontSize: "30px" }}
//                   />
//                 </button>
//               </div>

//               <div className="cart_action">
//                 <Link to="/cart">
//                   <AiOutlineShoppingCart />
//                   {cartQuantity > 0 && (
//                     <span className="badge">{cartQuantity}</span>
//                   )}
//                 </Link>
//                 <div className="tooltip">Cart</div>
//               </div>

//               <div className="user_action">
//                 <span>
//                   <AiOutlineUser />
//                 </span>
//                 <div className="dropdown_menu">
//                   <h4>
//                     Hello!{" "}
//                     {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}
//                   </h4>
//                   <p>Access account and manage orders</p>
//                   {!formUserInfo && (
//                     <button type="button" onClick={() => toggleForm(true)}>
//                       Login / Signup
//                     </button>
//                   )}
//                   <div className="separator"></div>
//                   <ul>
//                     {dropdownMenu.map((item) => {
//                       const { id, link, path } = item;
//                       return (
//                         <li key={id}>
//                           <Link to={path}>{link}</Link>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>
//       <AccountForm />
//       {searchTerm.trim() !== "" && (
//         <div>
//           <h2>Search Results</h2>
//           {suggestions.length > 0 ? (
//             <ul className="suggestion_bar">
//               {suggestions.map((item, id) => (
//                 <li
//                   key={id}
//                   style={{ marginBottom: "5px", cursor: "pointer" }}
//                   className="list_bar"
//                 >
//                   <Link
//                     to={`${item.path}${item.id}`}
//                     style={{ color: "black", textDecoration: "none" }}
//                     onClick={handleSearchResultClick}
//                   >
//                     {item.title.toLowerCase()}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No results found</p>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;





import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { dropdownMenu } from "../../data/headerData";
import commonContext from "../../contexts/common/commonContext";
import cartContext from "../../contexts/cart/cartContext";
import AccountForm from "../form/AccountForm";
import logo from "../../assets/ylogo1.png";
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

const Header = () => {
  const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
  const { cartItems } = useContext(cartContext);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

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

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value); // Update the search term

    // Filter data for auto-suggestions (case-insensitive)
    const filteredSuggestions = allProductsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  // Function to handle clicking on a search result
  const handleSearchResultClick = () => {
    setSearchTerm(""); // Clear the search term
    setSuggestions([]); // Clear suggestions
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm}`);
      setSearchTerm(""); // Clear the search term
      setSuggestions([]); // Clear suggestions
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit(event);
      console.log("enter press");
    }
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
                  onKeyDown={handleKeyDown}
                  placeholder="search here.."
                  style={{
                    color: "black",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                />
                <button onClick={handleSearchSubmit}>
                  <AiOutlineSearch
                    style={{ color: "gray", fontSize: "30px" }}
                  />
                </button>
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
                <Link to='/login'>
                <span>
                  <AiOutlineUser />
                </span>
                </Link>
                
                {/* <p>Login</p> */}
                {/* <div className="dropdown_menu">
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
                  <ul>
                    {dropdownMenu.map((item) => {
                      const { id, link, path } = item;
                      return (
                        <li key={id}>
                          <Link to={path}>{link}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div> */}
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* <AccountForm /> */}
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
                  <Link
                    to={`${item.path}${item.id}`}
                    style={{ color: "black", textDecoration: "none" }}
                    onClick={handleSearchResultClick}
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
    </>
  );
};

export default Header;
