import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import '../screens/description/prodDesc.css'

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    // <div className="cart-button d-flex justify-content-center">
    //   <div className="amount-toggle">
    //     <button onClick={() => setDecrease()}>
    //       <FaMinus />
    //     </button>
    //     <div className="amount-style">{amount}</div>
    //     <button onClick={() => setIncrease()}>
    //       <FaPlus />
    //     </button>
    <div className='quntCartDiv'>          
    <div className="quantityDiv ">
    <button onClick={() => setDecrease()}><FaMinus/></button>
    <span className="quantity">{amount}</span>
    <button onClick={() => setIncrease()}><FaPlus/></button>
      </div>
    </div>
  );
};

export default CartAmountToggle;