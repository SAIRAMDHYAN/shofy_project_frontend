import React, { useEffect,useState } from 'react'
import './mens.css'
import { useProductContext } from '../../components/context/productcontext2'
import axios from 'axios'
import StarComp from '../../components/starComp'

import { NavLink, useNavigate } from 'react-router-dom'

function Mens() {

const{products,laptops,mens,productsMdb,isLoading}=useProductContext()
console.log('logging from mens = products',products)
console.log('logging from mens =productsMdb',productsMdb)

console.log('logging from mens laptops',laptops)
// let [products,setProducts]=useState([])
  // useEffect(()=>{
  //   // fetch("https://dummyjson.com/products?limit=100")
  //   // .then(res=>res.json())
  //   // .then(data=>setProducts(data.products))
  //   fetch('https://dummyjson.com/products?limit=100')
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.products && Array.isArray(data.products)) {
  //       const productItems = data.products.filter(item => item.category === 'mens-shirts'||item.category ==='mens-shoes'||item.category ==='mens-watches');
  //       setProducts(productItems)
  //       // console.log(productItems);
  //     } else {
  //       console.log('Expected "products" key with array format not found:', data);
  //     }
  //   })
  //   .catch(error => console.error('Error fetching data:', error));
  


  // },[])

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  

    //  useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     console.log(token)
    //     if (!token) {
    //         navigate('/login');
    //         return;
    //     }

    //     axios.get('http://localhost:3002/home', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(response => {
    //         // Assume response includes success flag and new image
    //         // if (response.data.success) {
    //         //     const newImage = response.data.image;
    //         //     if (newImage && newImage !== userImage) {
    //         //         localStorage.setItem('userImage', newImage);
    //         //         setUserImage(newImage);
    //         //     }
    //         // }
    //     })
    //     .catch(error => {
    //         console.error('Authentication error:', error);
    //         navigate('/login');
    //     });
    // }, [navigate]);


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
    <div className='body'>

   
<img src="https://img.freepik.com/premium-vector/men-fashion-collection-social-media-banner-template-design_596383-181.jpg?w=1380" alt="" width={'100%'}/>

      <div id="products-grid" className='container'>
        
      {mens.map(product=>(
        <NavLink to={`/singleProduct/${product.id}`}>
            <div class="product-card">
              {/* Check if images are stored in an array */}
              {Array.isArray(product.images) && product.images.length > 0 && (
        <img className="product-image" src={product.images[0]} alt={product.title} />
      )}
      {/* Check if image is a property of an object */}
      {product.image && !Array.isArray(product.image) && (
        <img className="product-image" src={`http://localhost:3002/${product.image}`} alt={product.title} />
      )}            <div class="product-details">
              <div class="product-title trunketText">{product.title}</div>
              <div class="product-description trunketText">{product.brand} {product.category}</div>
             <div className='product_rating'> <StarComp stars={product.rating}/></div>
              <div class="product-price">Rs:&nbsp; {product.price*50}</div>
          
            </div>
          </div>
           </NavLink>
      ))}

{/* {mens.map(product=>(
        <NavLink to={`/singleProduct/${product._id}`}>
            <div class="product-card">
            <img class="product-image" src={`http://localhost:3002/${product.image}`} alt={product.title}/>
            <div class="product-details">
              <div class="product-title">{product.title}</div>
              <div class="product-description">{product.brand} </div>
             <div className='product_rating'> <StarComp stars={product.rating}/></div>
              <div class="product-price">Rs:&nbsp; {product.price}</div>
    
            </div>
          </div>
          </NavLink>  
      
      ))}  */}
   </div>

    </div>
  )
}

export default Mens
