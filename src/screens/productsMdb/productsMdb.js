import React,{useEffect,useState} from 'react'
import axios from 'axios'
import StarComp from '../../components/starComp'
import { NavLink } from 'react-router-dom'

const ProductsMdb = () => {
    let [productsMdb,setProductsMdb]=useState()

     useEffect(()=>{
        let fetchProductsMdb=async()=>{
            try{
                let response=await axios.get('http://localhost:3002/api/products')
                setProductsMdb(response.data)
            }catch(error){
                 console.log('Error in fetching ProductsMdb',error)
            }
        }
        fetchProductsMdb()
     },[])
 console.log(productsMdb)
//  productsMdb.map((ele)=>console.log('mapped elements',ele))
 console.log(typeof productsMdb)
  return (
    <>
      <h1>productsMdb</h1>
      <div className='body'>
  

      <div id="product-grid" className='container'>
      {productsMdb.map(product=>(
        <NavLink to={`/singleProduct/${product._id}`}>
            <div class="product-card">
            <img class="product-image" src={`http://localhost:3002/${product.image}`} alt={product.title}/>
            <div class="product-details">
              <div class="product-title">{product.title}</div>
              <div class="product-description">{product.brand} </div>
             <div className='product_rating'> <StarComp stars={product.rating}/></div>
              <div class="product-price">Rs:&nbsp; {product.price*50}</div>
    
            </div>
          </div>
          </NavLink>  
      
      ))} 
        
        {/* { productsMdb.map((ele)=><li>{ele.title}</li>)} */}

   </div>

 
    </div>

    </>
  )
}

export default ProductsMdb
