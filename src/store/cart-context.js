import React from "react";


const CartContext = React.createContext({
    items: [],
    totalamount: 0,
    addItem: (id) => {},
    removeItem: (id) => {},
    clearCart: () => {}
})

export default CartContext;