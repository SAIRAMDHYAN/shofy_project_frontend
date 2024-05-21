import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer  from '../reducer/cartReducer'
const CartContext = createContext();

let getLocalCartData=()=>{
    let localCartData=localStorage.getItem('shofy2cart');
    if(localCartData==[]){
      return [];
    }else{
        console.log('Number of element in cart=>',localCartData)

return JSON.parse(localCartData)
    }
}

const initialState = {
  cart: [],
  cart:getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
  
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    
    console.log('clicked on add to',product)

    console.log(product)
    dispatch({ type: "ADD_TO_CART", payload: product});
  };
    
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

const clearCart=()=>{
    dispatch({ type: "CLEAR_CART" });
}
  ////

  useEffect(()=>{
    console.log("Updating local storage with:", state.cart);
    localStorage.setItem('shofy2cart',JSON.stringify(state.cart))
  },[state.cart])

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };