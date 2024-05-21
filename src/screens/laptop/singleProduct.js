import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useProductContext } from '../../components/context/productContext';
import { useProductContext } from '../../components/context/productcontext2';
import { useCartContext } from '../../components/context/cartContext';
import StarComp from '../../components/starComp';

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { RiHeart2Line } from "react-icons/ri";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { RiArrowRightCircleLine } from "react-icons/ri";


import '../description/prodDesc.css'

import AddToCart from '../cart/newProduct';

function SingleProduct() {
    let [imgIndex,setImgIndex]=useState(0)
    let[quantity,setQuantity]=useState(1)
     let [add_to_cart,set_add_to_cart]=useState(false)

    let { id } = useParams();
    let { getSingleProduct, singleProduct, isSingleLoading, isSingleError } = useProductContext();
    const{getCartProduct,cartProduct}=useCartContext()
    const [prevId, setPrevId] = useState(null);

    const { title, description, price, rating, brand, category, images } = singleProduct;
    console.log('singleProduct =>', singleProduct);

 if(add_to_cart){

  const { title: cartTitle, description: cartDescription, price: cartPrice, rating: cartRating, brand: cartBrand, category: cartCategory, images: cartImages } = cartProduct;
  console.log('cartProduct =>', cartProduct);
 }


    useEffect(() => {

      getCartProduct(`https://dummyjson.com/products/${id}`)

        getSingleProduct(`https://dummyjson.com/products/${id}`);
      
       

        // if (id !== prevId) { // Check if the id has changed
        //     const API = `http://localhost:3000/singleProduct`;
        //     getSingleProduct('https://dummyjson.com/products/3');
        //     setPrevId(id); // Update the previous id
        // }
    }, []); // Include getSingleProduct, id, and prevId in the dependency array

    // if (isSingleLoading) {
    //     return <h3>Loading...</h3>;
    // }

    // if (isSingleError) {
    //     return <h3>Error fetching product.</h3>;
    // }

    return (
        // <div>
        //     <div class="product-card">
        //     <img class="product-image" src={images[0]} alt={title} height={'800px'} width={'400px'} />
        //     <div class="product-details">
        //       <div class="product-title">{title} id:{id}</div>
        //       <div class="product-description">{brand} {category}</div>
        //       <div class="product-price">Rs:&nbsp; {price}</div>
        //       <div className='btn btn-info'>Buy Now</div>
        //     </div>
        // </div>
        // </div>

        <>


         <div className="row border" >
        {/* <h1>prod Desc2</h1> */}
      <div className=" col-img col-md-5 col-sm-12" >           
        {/* <img src={images[imgIndex]} alt={title} height={'100%'} width={'100%'} />
        <div className="row small_img">
        <div className="col-2 border p2"  onClick={()=>setImgIndex(0)}><img src= {images[0]} alt={title} /></div>
        <div className="col-2 border p2"  onClick={()=>setImgIndex(1)}><img src= {images[1]}alt={title} /></div>
        <div className="col-2 border p2"  onClick={()=>setImgIndex(2)}><img src= {images[2]} alt={title} /></div>
        <div className="col-2 border p2"  onClick={()=>setImgIndex(3)}><img src= {images[3]}  alt={title} /></div>
        <div className="col-2 border p2"  onClick={()=>setImgIndex(4)}><img src= {images[4]} alt={title} /></div>
       </div> */}
      </div>  
      <div className="col-dsc col-md-4 col-sm-12" >
          <span className="category">{brand}</span>

        <h1>{title}</h1>
        <span className="rating">Rating: &nbsp;<span className="rating_star"> <StarComp stars={rating}/></span> (36 reviews)</span>
          <p>{description}</p>        
        <h3 className="price">Rs:&nbsp;{price*50} </h3>
        <p className='title'>Quantity</p>
         <div className='quntCartDiv'>          
          <div className="quantityDiv">
          <button onClick={()=>{setQuantity(pre=>pre-1)}}><FaMinus/></button>
          <span className="quantity">{quantity}</span>
          <button onClick={()=>{setQuantity(pre=>pre+1)}}><FaPlus/></button>
        </div>

        <div className="addToCart"  onClick={()=>{set_add_to_cart(true)}}>
          Add to cart 
        </div>
        
        </div>
        <div className="buyNow">
          Buy Now
        </div>

      <div className="interact">
        <a href="#"><HiOutlineArrowPathRoundedSquare/>&nbsp; Compare</a> <a href="#"><RiHeart2Line/>&nbsp;Add Wishlist</a> <a href="#"><RxQuestionMarkCircled/>&nbsp;Ask a question</a>
        </div>   

        <div className="prod_det_query">
          <div className="prod_det_query1">
              <span className='key'>Brand :</span> <span className='value'>{brand}</span>

          </div>
          <div className="prod_det_query2">
          <span className='key'>Category:</span><span className='value'>{category}</span>
            </div>
            <div className="prod_det_query3">
            <span className='key'>Tag:</span><span className='value'>Android</span>
            </div>

            <div className="prod_det_query4">
            <span className='key'>Android:</span>               
                <div className="footer_social " id='footer_social_Id'>
                  <a href="#"><i class="bi bi-facebook"></i></a>
                  <a href="#"><i class="bi bi-twitter"></i></a>
                  <a href="#"><i class="bi bi-instagram"></i></a>
                  <a href="#"><i class="bi bi-vimeo"></i></a>
                 </div>
            </div>

            <div className="info_query">
              <p><RiArrowRightCircleLine/>&nbsp;30 days easy return</p>
              <p> <RiArrowRightCircleLine/>&nbsp;Order before 2.30pm for same day dispatch</p>
            </div>
        </div>

        {/* <div className="creditCard">
       <div className="creditCard_text">Guranteed safe <br/> & secure checkout</div> 
          <div className="row">
            <div className="col-2 shadow"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PayPal_logo_2008.svg/1280px-PayPal_logo_2008.svg.png" alt="paypal" /></div>
            <div className="col-2 shadow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPkrXl2UNqKdOlijbtcwzD4LG5DgGiY25i6tqarWsbQ&s" alt="visa" /></div>
            <div className="col-2 shadow"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="mastercard" /></div>
            <div className="col-2 shadow"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png" alt="stripe" /></div>

          </div>
        </div> */}

<div className="creditCard">
       <div className="creditCard_text">Guranteed safe <br/> & secure checkout</div> 
        
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PayPal_logo_2008.svg/1280px-PayPal_logo_2008.svg.png" alt="paypal" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPkrXl2UNqKdOlijbtcwzD4LG5DgGiY25i6tqarWsbQ&s" alt="visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="mastercard" />
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png" alt="stripe" /> */}
            </div>

      

      </div>
    </div>
        
        </>
           );
}

export default SingleProduct;


// let SingleProduct=()=>{
//     let {id}=useParams()
//     console.log('id=>',id)

//     let API='https://dummyjson.com/products/1'
//     useEffect(()=>{
      
//         fetch(API)
//         .then(res=>res.json())
//         .then(data=>console.log('products=>',data))
//     },[])

//     return(
//         <>
        
//         </>
//     )
// }

// export default SingleProduct