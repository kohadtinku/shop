import React, { createContext, useEffect, useReducer } from 'react';
import cartReducer from './cartReducer';

// Cart-Context
const cartContext = createContext();

// Initial State
const initialState = {
    // new added
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
};

// Cart-Provider Component
const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    // new add
    useEffect(() => {
        // Update localStorage whenever cartItems changes
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }, [state.cartItems]);

    // Dispatched Actions
    const addItem = (item) => {
        return dispatch({
            type: 'ADD_TO_CART',
            payload: { item }
        });
    };

    const removeItem = (itemId) => {
        return dispatch({
            type: 'REMOVE_FROM_CART',
            payload: { itemId }
        });
    };

    const incrementItem = (itemId) => {
        return dispatch({
            type: 'INCREMENT_ITEM',
            payload: { itemId }
        });
    };

    const decrementItem = (itemId) => {
        return dispatch({
            type: 'DECREMENT_ITEM',
            payload: { itemId }
        });
    };

    // Context values
    const values = {
        ...state,
        addItem,
        removeItem,
        incrementItem,
        decrementItem
    };

    return (
        <cartContext.Provider value={values}>
            {children}
        </cartContext.Provider>
    );
};


export default cartContext;
export { CartProvider };