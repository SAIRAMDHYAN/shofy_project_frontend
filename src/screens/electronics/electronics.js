
import React, { useEffect,useState } from 'react'
import './electronics.css'
import { useProductContext } from '../../components/context/productcontext2'

import StarComp from '../../components/starComp'

import { NavLink,useNavigate } from 'react-router-dom'

function Electronics() {
  let {electronics}=useProductContext()
  // let [products,setProducts]=useState([])
  // useEffect(()=>{
  //   fetch("https://dummyjson.com/products?limit=100")
  //   .then(res=>res.json())
  //   .then(data=>{
  //          if(data.products&& Array.isArray(data.products)){
  //           let productItems=data.products.filter(el=>el.category==='smartphones'||el.category==='laptops'||el.category==='lighting'||el.category==='automotive')
  //           setProducts(productItems)
  //           console.log(productItems)
  //          }
  //          else{
  //           console.log('data is not an array So cannot iterate through data.products')
  //          }
  //   })
    
  //   .catch(err=>console.log(err))
  // },[])

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
    <div className='body '>
    
      <div id="products-grid" className='container'>
      {electronics.map(product=>(
        <NavLink to={`/singleProduct/${product.id}`}>
            <div class="product-card ">
              {/* Check if images are stored in an array */}
      {Array.isArray(product.images) && product.images.length > 0 && (
        <img className="product-image" src={product.images[0]} alt={product.title} />
      )}
      {/* Check if image is a property of an object */}
      {product.image && !Array.isArray(product.image) && (
        <img className="product-image" src={`http://localhost:3002/${product.image}`} alt={product.title} />
      )}
            <div class="product-details">
              <div class="product-title">{product.title}</div>
              <div class="product-description">{product.brand}</div>
             <div className='product_rating'> <StarComp stars={product.rating}/></div>
              <div class="product-price">Rs:{product.price*50}</div>
        
            </div>
          </div>
          </NavLink>
      ))}
   </div>

    </div>
  )
}

export default Electronics

