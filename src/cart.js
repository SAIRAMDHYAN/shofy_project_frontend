import React, { useState, useEffect } from "react";
import { useCartContext } from "./components/context/cartContext";
import CartItem from "./components/cartItems";
import Banner from "./components/banner";
import { NavLink,useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  const [totalAmount, setTotalAmount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(50); // Set the default delivery charge

  useEffect(() => {
    if (cart.length > 0) {
      const totalPrice = cart.reduce((accum, cur) => accum + (cur.sum), 0);
      setTotalAmount(totalPrice);
    } else {
      setTotalAmount(0);
    }
  }, [cart]);

  
  let navigate=useNavigate()
    
useEffect(() => {
  const token = localStorage.getItem('token');
  console.log(token)
  if (!token) {
      navigate('/login');
      return;
  }

}, [navigate]);
  // Update sum in the Cart component
  const updateSum = (sum) => {
    // Do something with the sum received from the CartItem component
    return sum ; // Multiply sum by 2
  };

  return (
    <>
      <div className="container shadow ">
        <div className="row  ">
          <div className="col-lg-8 col-sm-12 align-self-start ">
            <div className="row tableHeader">
              <div className="col-6  text-center">Product</div>
              <div className="col-2  text-center">Price</div>
              <div className="col-1  text-center quantity">Quantity</div>
              <div className="col-2  text-center sum">Sum</div>
              <div className="col-1  text-center"></div>
            </div>
            

            <div className="cart-item">
              {cart.map((curElem) => {
                return <CartItem key={curElem.id} {...curElem} updateSum={updateSum} />;
              })}
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 contact-sidebar align-self-start">
            <div className="aside">
              <span className="asideHeader">PRICE DETAILS</span>

              <div className="asideRow asidePrice">
                <div className="key">Price</div>
                <div className="value">Rs: {totalAmount}</div>
              </div>
              <div className="asideRow asideDiscounts">
                <div className="key">Discounts</div>
                <div className="value">Rs: 00</div>
              </div>
              <div className="asideRow asideDeleCharg">
                <div className="key">Delivery Charge</div>
                <div className="value">
                  <del>Rs.{deliveryCharge}</del> <span style={{ color: "green" }}>Free</span>
                </div>
              </div>

              <div className="asideRow asideTotal">
                <div className="key">Total </div>
                <div className="value">Rs: {totalAmount}</div>
              </div>
              {/* <span className="savingInfo">You will save Rs.196 on this order</span> */}

              <NavLink to={"/checkout"}>
                <div className={`${cart.length===0?'disabled':'addToCheckout'}`} onClick={(e)=>{
                  if(cart.length===0){
                    e.preventDefault()
                  }
                }}>Add to Checkout</div>
              </NavLink>

              <div className="addToCheckout" onClick={clearCart}>
                Clear cart
              </div>

          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

// Cart.js
// import React, { useState, useEffect } from "react";
// import { useCartContext } from "./components/context/cartContext";
// import CartItem from "./components/cartItems";
// import Banner from "./components/banner";
// import { NavLink } from "react-router-dom";

// const Cart = () => {
//   const { cart, clearCart } = useCartContext();
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [deliveryCharge, setDeliveryCharge] = useState(50); // Set the default delivery charge

//   useEffect(() => {
//     if (cart.length > 0) {
//       const totalPrice = cart.reduce((accum, cur) => accum + cur.price, 0);
//       setTotalAmount(totalPrice);
//     } else {
//       setTotalAmount(0);
//     }
//   }, [cart]);

//   // Update sum in the Cart component
//   const updateSum = (sum) => {
//     // Multiply sum by 2 and return
//     return sum ;
//   };

//   return (
//     <>
//       <div className="container shadow ">
//         <div className="row  ">
//           <div className="col-lg-8 col-sm-12 align-self-start ">
//             <div className="row tableHeader">
//               <div className="col-5 border">Product</div>
//               <div className="col-2 border">Price</div>
//               <div className="col-2 border">Quantity</div>
//               <div className="col-2 border">Sum</div>
//               <div className="col-1 border">remove</div>
//             </div>
//             <hr />

//             <div className="cart-item">
//               {cart.map((curElem) => {
//                 return <CartItem key={curElem.id} {...curElem} updateSum={updateSum} />;
//               })}
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-12 contact-sidebar align-self-start">
//             <div className="aside">
//               <span className="asideHeader">PRICE DETAILS</span>

//               <div className="asideRow asidePrice">
//                 <div className="key">Price</div>
//                 <div className="value">Rs: {totalAmount}</div>
//               </div>
//               <div className="asideRow asideDiscounts">
//                 <div className="key">Discounts</div>
//                 <div className="value">Rs: 00</div>
//               </div>
//               <div className="asideRow asideDeleCharg">
//                 <div className="key">Delivery Charge</div>
//                 <div className="value">
//                   <del>Rs.{deliveryCharge}</del> <span style={{ color: "green" }}>Free</span>
//                 </div>
//               </div>

//               <div className="asideRow asideTotal">
//                 <div className="key">Total </div>
//                 <div className="value">Rs: {totalAmount}</div>
//               </div>
//               <span className="savingInfo">You will save Rs.196 on this order</span>

//               <NavLink to={"/checkout"}>
//                 <div className="addToCheckout">Add to Checkout</div>
//               </NavLink>

//               <div className="addToCheckout" onClick={clearCart}>
//                 Clear cart
//               </div>

//               {/* Display updateSum multiplied by 2 */}
//               <div>{updateSum(totalAmount)}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;
