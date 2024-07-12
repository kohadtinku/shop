// const cartReducer = (state, action) => {
//     switch (action.type) {

//         case 'ADD_TO_CART':
//             const newItemId = action.payload.item.id;
//             const itemExist = state.cartItems.some(item => item.id === newItemId);

//             let updatedCartItems = null;

//             if (itemExist) {
//                 updatedCartItems = state.cartItems.map(item => {
//                     if (item.id === newItemId) {
//                         return {
//                             ...item,
//                             quantity: item.quantity + 1
//                         };
//                     }
//                     return item;
//                 });
//             } else {
//                 updatedCartItems = [...state.cartItems, action.payload.item];
//             }

//             return {
//                 ...state,
//                 cartItems: updatedCartItems
//             };


//         case 'REMOVE_FROM_CART':
//             return {
//                 ...state,
//                 cartItems: state.cartItems.filter(item => item.id !== action.payload.itemId)
//             };


//         case 'INCREMENT_ITEM':
//             return {
//                 ...state,
//                 cartItems: state.cartItems.map(item => {
//                     if (item.id === action.payload.itemId) {
//                         return {
//                             ...item,
//                             quantity: item.quantity + 1
//                         };
//                     }
//                     return item;
//                 })
//             };


//         case 'DECREMENT_ITEM':
//             return {
//                 ...state,
//                 cartItems: state.cartItems.map(item => {
//                     if (item.id === action.payload.itemId) {
//                         return {
//                             ...item,
//                             quantity: item.quantity - 1
//                         };
//                     }
//                     return item;
//                 }).filter(item => item.quantity !== 0)
//             };


//         default:
//             return state;
//     }
// };

// export default cartReducer;









const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newItemId = action.payload.item.id;
            const itemExist = state.cartItems.some(item => item.id === newItemId);

            const updatedCartItems = itemExist
                ? state.cartItems.map(item => 
                    item.id === newItemId 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                  )
                : [...state.cartItems, { ...action.payload.item, quantity: 1 }]; // Ensure new item starts with quantity 1

            return {
                ...state,
                cartItems: updatedCartItems
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.itemId)
            };

        case 'INCREMENT_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.id === action.payload.itemId 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                )
            };

        case 'DECREMENT_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.map(item => 
                    item.id === action.payload.itemId 
                        ? { ...item, quantity: Math.max(item.quantity - 1, 0) } // Prevent negative quantities
                        : item
                ).filter(item => item.quantity > 0) // Filter out zero quantity items
            };

        default:
            return state;
    }
};

export default cartReducer;
