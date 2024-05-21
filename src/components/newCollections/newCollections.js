import React,{useEffect, useState} from 'react'
import './newCollections.css'
import StarComp from '../starComp';
import data_products from '../../AssetsSRC/dummyProducts';
// import { useProductContext } from './context/productContext';
import { NavLink,Link } from 'react-router-dom';
import { useProductContext } from '../context/productcontext2';
import Pagination from '../pagination';
function NewCollections() {

  const{products,mens,grocery,productsMdb,isLoading}=useProductContext()
  const[currPage,setCurrPage]=useState(1)
  // const [displayedProducts, setDisplayedProducts] = useState([]);

  const productsPerPage=12
  const lastProductInPage=currPage*productsPerPage
  const firstProductInPage=lastProductInPage-productsPerPage
  const disProducts=products.slice(firstProductInPage,lastProductInPage)
  const nOfpage=Math.ceil(products.length/productsPerPage)
  const pageNumber=[...Array(nOfpage+1).keys()].slice(1)
  const numberOfPages = Math.ceil(products.length / productsPerPage);

  console.log('products.length',products.length)

  console.log('nOfpage',)
  pageNumber.map((n,i)=>console.log(n))
  // const{products}=useProductContext()

  // const {isLoading,products}=useProductContext()

 
  //   const [products, setProducts] = useState([]);
  //   console.log('Logging from products area',products)
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(json => setProducts(json))
  //     .catch(err => console.log(err));
  //     console.log( products)
  // }, []);

  // const [items, setItems] = useState([]);

  // Fetch data from the API

  // let fakestoeApi='https://fakestoreapi.com/products'
  // let dummyjsonApi='https://dummyjson.com/products'
  // useEffect(() => {
  //     const fetchData = async () => {
  //         const response = await fetch(dummyjsonApi);
  //         const data = await response.json();
  //         setItems(data.products);
  //     };
  //     fetchData();
  // }, []);

  
  const getPageNumbers = () => {
    const pageNumbers = [];
    let leftSide = currPage;
    let rightSide = currPage;
    if (leftSide < 1) {
      rightSide += 1 - leftSide;
      leftSide = 1;
    }
    if (rightSide > numberOfPages) {
      leftSide -= rightSide - numberOfPages;
      rightSide = numberOfPages;
      if (leftSide < 1) leftSide = 1;
    }

    for (let i = leftSide; i <= rightSide; i++) {
      pageNumbers.push(i);
    }

    if (leftSide > 1) {
      pageNumbers.unshift("...");
      pageNumbers.unshift(1);
    }
    if (rightSide < numberOfPages) {
      pageNumbers.push("...");
      pageNumbers.push(numberOfPages);
    }

    return pageNumbers;
  };

  const prevPage=()=>{
    if(currPage!==1){
     setCurrPage(currPage-1)
    }
 }

 const nextPage=()=>{
  if(currPage!==nOfpage){
   setCurrPage(currPage+1)
  }
 }

 const changePage=(n)=>{
  setCurrPage(n)
 }

  return (
    <>
      <div className=' text-center'>
        
          <div className="row ">
            <div className="col-md-12 productsAreadiv ">
                      <span className='spanClass '>All Products Shop</span>
               <h3 className='productsAreaHeading '>Customers favourite Style Products .</h3>
            </div>
          </div>
          <div className='d-flex justify-content-end me-4'>
        <div className="  bg-light ">
          <ul className="pagination  ">
            <li className="page-item">
              <div className="page-link"
              onClick={prevPage} style={{cursor:'pointer'}}
              >Prev Page</div>
            </li>
 
            {getPageNumbers().map((n,i)=>(
                  <li key={i} className={`page-item ${currPage===n?'active':''}`}>
                      <button className="page-link " onClick={()=>changePage(n)}>{n}</button>
                  </li>)
              )}


          <li className="page-item">
              <div className="page-link"
              onClick={nextPage}
              style={{cursor:'pointer'}}
              >Next Page</div>
            </li>
          </ul>
        </div>
      </div>
          <div className=" products m-3 ">
          <div id="products-grid" className='container'>
      {disProducts  .map(product=>(
        <NavLink to={`/singleProduct/${product.id}`}>
            <div class="product-card">
              {/* Check if images are stored in an array */}
              {Array.isArray(product.images) && product.images.length > 0 && (
        <img className="product-image" src={product.images[0]} alt={product.title} />
      )}
      {/* Check if image is a property of an object */}
      {disProducts.image && !Array.isArray(product.image) && (
        <img className="product-image" src={`http://localhost:3002/${product.image}`} alt={product.title} />
      )}            <div class="product-details">
              <div class="product-title ">{product.title}</div>
              <div class="product-description">{product.brand} {product.category}</div>
             <div className='product_rating'> <StarComp stars={product.rating}/></div>
              <div class="product-price">Rs:&nbsp; {product.price*50}</div>
          
            </div>
          </div>
           </NavLink>
      ))}
      </div>

    
        </div>
          </div>

          <div>
           
          
        </div>
      
      {/* <Pagination products={products} setDisplayedProducts={setDisplayedProducts} /> */}
    </>
  )


}

export default NewCollections
