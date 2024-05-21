import React, { useEffect,useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
// import './womens.css'
import { useProductContext } from '../components/context/productcontext2'

import StarComp from '../components/starComp'
import Toolbar2 from '../components/toolbar2'
import Navbar from '../components/navbar'
import Footer from '../components/footer/footer'

function Beauty() {

const{products,laptops,beauty}=useProductContext()

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
    <Toolbar2/>
      

      <div id="products-grid" className='container'>
      {beauty.map(product=>(
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
    <Footer/>
    </>
  )
}

export default Beauty
