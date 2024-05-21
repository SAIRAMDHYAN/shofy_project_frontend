import { useState } from "react";

import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./cartAmmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./context/cartContext";
// import { Button } from "../styles/Button";

import '../screens/description/prodDesc.css'
const AddToCart = ({product}) => {



    console.log('product<==>',product)
    const { title, description, price, rating, brand, category, images } = product;
   
//   const { id, colors, stock } = product;
// console.log('id=>=>',id)
//   const [color, setColor] = useState(colors[0]);


console.log('destructured product=>',title,'//', description,'//', price,'//', rating)
console.log('singleProduct.product=>>',product)

  const [amount, setAmount] = useState(1);
  const { addToCart } = useCartContext();


  return (
    <>
      <div className="colors">
        <p>
        {/* Title:{title}
        Price:{price}
        brand:{brand} */}
          {/* {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })} */}
        </p>
      </div>

      {/* add to cart  */}
  

      <div> 
      <div className="buyNow"  onClick={() => addToCart(product)}><strong>Add To Cart</strong></div>

      </div>
     
    </>
  );
};

export default AddToCart