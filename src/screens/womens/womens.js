import React, { useContext, useEffect,useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './womens.css'
import { useProductContext } from '../../components/context/productcontext2'
import StarComp from '../../components/starComp'

import { ShopContext } from '../../components/context/shopContext'

function Womens() {
let data_products=useContext(ShopContext)
console.log('data_product in womens====>',data_products)

const{products,laptops,womens}=useProductContext()

    
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
    <div className='outer-body'>
 
         <img src="https://i.pinimg.com/736x/b4/6e/b7/b46eb746f7664083877a42aa05062dfe.jpg" alt=""  width={'90%'} className='m-5'/>
      <div id="products-grid" className='container'>
      {womens.map(product=>(
        <NavLink to={`/singleProduct/${product.id}`}>
            <div class="product-card">
            <img class="product-image" src={product.images[0]} alt={product.title}/>
            <div class="product-details">
              <div class="product-title trunketText">{product.title}</div>
              <div class="product-description trunketText">{product.brand} {product.category}</div>
             <div className='product_rating'> <StarComp stars={product.rating}/></div>
              <div class="product-price">Rs:&nbsp; {product.price*50}</div>
              {/* <div className='btn btn-info'>Buy Now</div> */}
            </div>
          </div>
          </NavLink>  
      ))}
   </div>

    </div>
  )
}

export default Womens
