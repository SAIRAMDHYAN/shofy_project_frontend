

import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSearchContext } from '../../components/context/searchContext';
import { useProductContext } from '../../components/context/productcontext2';
import StarComp from '../../components/starComp';
import { useFiltSortContext } from '../../components/context/filterAndSortContext';
import './filterProduct.css'

function FilteredComp() {
  const { searchTerm } = useSearchContext();
  const{products,womens,mens,fashion,groceries,jewellery,electronics,beauty}=useProductContext()
  const[category,setCategory]=useState(products)
const { setSortType, sortProducts}=useFiltSortContext()

// console.log('====>>',typeof mens)
//   const products = [
//     { name: 'Product1', brand: 'Brand1', price: 100, img: 'img1.jpg' },
//     { name: 'Product2', brand: 'Brand2', price: 200, img: 'img2.jpg' },
//     // more products...
//   ];

  const filteredProducts =category.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = sortProducts(filteredProducts)

//   const sortedProducts = filteredProducts.sort((b, a) => a.title.localeCompare(b.title));


  return (
    <>
       <div class="container">
        <div className="row">

        <div class="col-md-3 shadow align-self-start ">
                <h3>Filters</h3>
                <hr></hr>
                <div className="category">
                <p>CATEGORIES</p>
                <hr></hr>
                <div class="form-check">
                   <input class="form-check-input" onChange={(e)=>{setCategory(products)}} type="radio" name="category" id="flexRadioDefault1" defaultChecked/>
                   <label class="form-check-label" for="flexRadioDefault1">
                    All
                   </label>
                 </div>
               <div class="form-check">
                   <input class="form-check-input" onChange={(e)=>{setCategory(mens)}} type="radio" name="category" id="flexRadioDefault1"/>
                   <label class="form-check-label" for="flexRadioDefault1">
                    Mens
                   </label>
                 </div>
                 
                 <div class="form-check">
                   <input  onChange={(e)=>{setCategory(womens)}} class="form-check-input" type="radio" name="category" id="flexRadioDefault2" />
                   <label class="form-check-label" for="flexRadioDefault2">
                    womens
                   </label>
                 </div>
                 
                 <div class="form-check">
                   <input  onChange={(e)=>{setCategory(electronics)}} class="form-check-input" type="radio" name="category" id="flexRadioDefault2" />
                   <label class="form-check-label" for="flexRadioDefault2">
                   Electronics
                   </label>
                 </div>
                 <div class="form-check">
                   <input  onChange={(e)=>{setCategory(jewellery)}} class="form-check-input" type="radio" name="category" id="flexRadioDefault2" />
                   <label class="form-check-label" for="flexRadioDefault2">
                   Jewellery
                   </label>
                 </div>
                 <div class="form-check">
                   <input  onChange={(e)=>{setCategory(fashion)}} class="form-check-input" type="radio" name="category" id="flexRadioDefault2" />
                   <label class="form-check-label" for="flexRadioDefault2">
                   Fashion
                   </label>
                 </div>
                 <div class="form-check">
                   <input  onChange={(e)=>{setCategory(groceries)}} class="form-check-input" type="radio" name="category" id="flexRadioDefault2" />
                   <label class="form-check-label" for="flexRadioDefault2">
                   Other
                   </label>
                 </div>

<hr/>
           <div className="sort" >
            <p>SORT BY</p><hr/>
            <div class="form-check">
                   <input  onChange={(e)=>{setSortType('priceAsc')}} class="form-check-input" type="radio" name="sortby" id="flexRadioDefault2" />
                   <label class="form-check-label" for="flexRadioDefault2">
                   Low to heigh
                   </label>
                 </div>
                 <div class="form-check">
                   <input  onChange={(e)=>{setSortType('priceDesc')}} class="form-check-input" type="radio" name="sortby" id="flexRadioDefault2" />
                   <label class="form-check-label" for="flexRadioDefault2">
                   Heigh to low
                   </label>
                 </div>
            </div>  
                </div>  
                <br/>                          
                      
            </div>

          {/*  */}

            <div class="col-md-8  m-2 col-sm-12  shadow d-flex text-center">
            <div class="filtered-comp">
      {sortedProducts.map((product, index) => (
        <NavLink to={`/singleProduct/${product.id}`}>
            <div class=" row d-flex">
           <div class="col 5">
              {/* Check if images are stored in an array */}
              {Array.isArray(product.images) && product.images.length > 0 && (
        <img className="product-image" src={product.images[0]} alt={product.title} width={'50%'}/>
      )}
      {/* Check if image is a property of an object */}
      {product.image && !Array.isArray(product.image) && (
        <img className="product-image" src={`http://localhost:3002/${product.image}`} alt={product.title} width={'50%'}/>
      )}           </div>
            <div class="col 7">
            <div class="product-details">
                          <div class="product-title">{product.title}</div>
                          <div class="product-description">{product.brand} {product.category}</div>
                          <div class="product-description">{product.description} {product.category}</div>
                         <div class='product_rating'> <StarComp stars={product.rating}/></div>
                          <div class="product-price">Rs:&nbsp; {product.price*50}</div>
                      
                        </div>
            </div>
        
          </div>
          <hr/>
           </NavLink>
          
      ))}
     
    </div>

            </div>

            {/*  */}

      

        </div>
       </div>
    
    </>
  );
}

export default FilteredComp;

// export default FilterdProduct