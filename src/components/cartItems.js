// // CartItem.js
// import React, { useState } from "react";
// import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
// import { useCartContext } from "./context/cartContext";

// const CartItem = ({ id, title, price, updateSum }) => {
//   const { removeItem } = useCartContext();
//   const [amount, setAmount] = useState(1);

//   const setDecrease = () => {
//     setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
//     updateSum(price * (amount - 1));
//   };

//   const setIncrease = () => {
//     setAmount((prevAmount) => (prevAmount < 5 ? prevAmount + 1 : 5));
//     updateSum(price * (amount + 1));
//   };

//   let sum = price * amount;

//   return (
//     <div className="row tableContent border">
//       <div className="col-md-5 col-sm-9">{title}</div>
//       <div className="col-md-2 ">
//         <h5>{price}</h5>
//       </div>
//       <div className="col-md-2 col-sm-0">
//         <div className="cartQuantityDiv">
//           <button onClick={setDecrease}>
//             <FaMinus />
//           </button>
//           <span className="cartQuantity">{amount}</span>
//           <button onClick={setIncrease}>
//             <FaPlus />
//           </button>
//         </div>
//       </div>
//       <div className="col-md-2">
//         <h5>{sum}</h5>
//       </div>
//       <div className="col-md-1 col-sm-0">
//         <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
//       </div>
//     </div>
//   );
// };

// export default CartItem;


import React,{useState} from "react";
// import FormatPrice from "../Helpers/FormatPrice";
import StarComp from "./starComp";
import CartAmountToggle from "./cartAmmountToggle";
import { FaTrash,FaMinus,FaPlus } from "react-icons/fa";
import { useCartContext } from "./context/cartContext";
import Cart from "../cart";
import '../screens/cart/cart.css'
const CartItem = ({ id,title, description, price,count,sum, rating, brand, category, images}) => {

    // console.log('in cart Item=>','title',title, 'description',description,'price', price,'rating', rating,'brand', brand, category, images)
 
    const { removeItem } = useCartContext();

  const[amount,setAmount]=useState(1)
  // const setDecrease = () => {
  //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  // const setIncrease = () => {
  //   amount < 5 ? setAmount(amount + 1) : setAmount(5);
  // };

   

  return (

    <div className="row tableContent border">
    <div className="col-6 ">
      <div className="row">
        <div className="col-3 cart_image"><img src={images} alt={title} height={'120px'} width={'auto'}  /></div>
        <div className="col-8 text-center cart_desc">
          <h3 className="trunketText">{title}</h3>
          <h5 className="trunketText">{brand}  </h5>
          <h5 style={{color:'gold'}}><StarComp stars={rating}/></h5>
        </div>
      </div>
    </div>
    <div className="col-2 text-center "><h5>{price}</h5></div>
{/* 
            <div className="col-md-2 col-sm-0">
              <div className="cartQuantityDiv">
                
                 <button onClick={setDecrease}><FaMinus/></button>  
                 <span className="cartQuantity">{amount}</span>
                 <button onClick={setIncrease}><FaPlus/></button>
              </div>
            </div> */}

         <div className="col-1 text-center quantity"> <h2>{count}</h2></div>
         <div className="col-2 text-center sum"><h5>{sum}</h5></div>
         <div className="col-1  text-center">
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
         </div>
   </div>
  

    
  );
};

export default CartItem;