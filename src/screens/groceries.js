import React, { useEffect,useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
// import './womens.css'
import { useProductContext } from '../components/context/productcontext2'

import StarComp from '../components/starComp'

function Grocery() {

const{products,laptops,groceries}=useProductContext()

let navigate=useNavigate()
    
useEffect(() => {
  const token = localStorage.getItem('token');
  console.log(token)
  if (!token) {
      navigate('/login');
      return;
  }

}, [navigate]);

  return (
    <>  
    <div className='body'>
  

      <div id="products-grid" className='container'>
      {groceries.map(product=>(
        <NavLink to={`/singleProduct/${product.id}`}>
            <div class="product-card">
            <img class="product-image" src={product.images[0]} alt={product.title}/>
            <div class="product-details">
              <div class="product-title">{product.title}</div>
              <div class="product-description">{product.brand} {product.category}</div>
             <div className='product_rating'> <StarComp stars={product.rating}/></div>
              <div class="product-price">Rs:&nbsp; {product.price*50}</div>
              {/* <div className='btn btn-info'>Buy Now</div> */}
            </div>
          </div>
          </NavLink>  
      ))}
   </div>

 
    </div>

    </>
  )
}

export default Grocery
