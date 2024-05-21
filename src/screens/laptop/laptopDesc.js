import React from 'react'
import { NavLink } from 'react-router-dom';

import StarComp from '../../components/starComp'
import './laptops.css'
function LaptopDesc(currElem) {
    const{id,title,description,price,rating,brand,category,images}=currElem;
  return (
   
    // <NavLink to={`/proddesc/:${id}`}>

<NavLink to={`/singleProduct/${id}`}>
<div id="products-grid" className='container'>

            <div class="product-card">
            <img class="product-image" src={images[0]} alt={title} />
            <div class="product-details">
              <div class="product-title">{title} id:{id}</div>
              <div class="product-description">{brand} {category}</div>
             <div className='product_rating'> <StarComp stars={rating}/></div>
              <div class="product-price">Rs:&nbsp; {price*50}</div>
              <div className='btn btn-info'>Buy Now</div>
            </div>
          </div>
 
   </div>
      </NavLink>
    
  )
}

export default LaptopDesc
