import React,{useState,useEffect} from 'react'

import Shop from '../screens/womens/womens'
function Products() {
let [products,setProducts]=useState([])

useEffect(()=>{
    fetch('https://dummyjson.com/products?limit=5')
    .then(res=>res.json())
    .then(data=>{setProducts(data.products)
      // console.log(data.products)
      //  data.products.map((el)=>console.log(el.title))
    }
      
  )
  
},[])
  return (
    <div>
      <Shop PRODUCTS={products}/> 
    </div>
  )
}

export default Products
