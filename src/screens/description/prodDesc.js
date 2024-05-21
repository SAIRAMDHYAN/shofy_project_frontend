import React,{useState} from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { RiHeart2Line } from "react-icons/ri";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { RiArrowRightCircleLine } from "react-icons/ri";

import './prodDesc.css'
import Toolbar2 from '../../components/toolbar2'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer/footer'

let images=["https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]


function ProdDesc() {
    let [imgIndex,setImgIndex]=useState(0)
    const[quantity,setQuantity]=useState(1)
  return (
    <>

  <div> 
   
          <div className="row border" >

        <div className=" col-img col-md-5 col-sm-12" >           
          <img className='big_img' src={images[imgIndex]} alt="mens-shirts" height={'100%'} width={'100%'} />
          <div className="row small_img">
          <div className="col-2 border p2" onClick={()=>setImgIndex(0)}><img src= {images[0]} alt="" /></div>
          <div className="col-2 border p2" onClick={()=>setImgIndex(1)}><img src= {images[1]}alt="" /></div>
          <div className="col-2 border p2" onClick={()=>setImgIndex(2)}><img src= {images[2]} alt="" /></div>
          <div className="col-2 border p2" onClick={()=>setImgIndex(3)}><img src= {images[3]}  alt="" /></div>
          <div className="col-2 border p2" onClick={()=>setImgIndex(4)}><img src= {images[4]} alt="" /></div>
         </div>
        </div>
        <div className="col-dsc col-md-4 col-sm-12" >
            <span className="category">Computer and Tablets</span>

          <h1>Peter Engalan Mens Shirt</h1>
          <span className="rating">Rating: &nbsp;4.5 (36 reviews)</span>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit.</p>
          
          <h3 className="price">Rs:&nbsp; 2,300</h3>
          <p className='title'>Quantity</p>
           <div className='quntCartDiv'>          
            <div className="quantityDiv">
            <button onClick={()=>{setQuantity(pre=>pre-1)}}><FaMinus/></button>
            <span className="quantity">{quantity}</span>
            <button onClick={()=>{setQuantity(pre=>pre+1)}}><FaPlus/></button>
          </div>
          <div className="addToCart  ">
            Add to cart
          </div></div>
          <div className="buyNow">
            Buy Now
          </div>

        <div className="interact">
          <a href="#"><HiOutlineArrowPathRoundedSquare/>&nbsp; Compare</a> <a href="#"><RiHeart2Line/>&nbsp;Add Wishlist</a> <a href="#"><RxQuestionMarkCircled/>&nbsp;Ask a question</a>
          </div>   

          <div className="prod_det_query">
            <div className="prod_det_query1">
                <span className='key'>SKU :</span> <span className='value'>SKU</span>

            </div>
            <div className="prod_det_query2">
            <span className='key'>Category:</span><span className='value'>Computer and Tablets</span>
              </div>
              <div className="prod_det_query3">
              <span className='key'>Tag:</span><span className='value'>Android</span>
              </div>

              <div className="prod_det_query4">
              <span className='key'>Android:</span>               
                  <div className="footer_social ">
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
      </div>

      {/* <div className="row">
               <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">Home</a></li>
               </ul>
            </div> */}
{/* 
      <div className="row">
            <div className="col-md-3 border p-3">hjsbdjhd</div>
            <div className="col-md-3 border p-3">hjsbdjhd</div>
            <div className="col-md-3 border p-3">hjsbdjhd</div>
            <div className="col-md-3 border p-3">hjsbdjhd</div>
          </div> */}
{/* 
    <div class="bg-primary">kjshfkjshdk</div>
    <div class="container">
        <div class="bg-secondary">kjshfkjshdk</div>
        <div class="row border">
            <div class="col-5">
                <img src="https://5.imimg.com/data5/XS/DT/MY-3747740/mens-shirts.jpg" alt="mens-shirts" />
            </div>
            <div class="col-5 d-grid">
                <h3>mahabdmzbv</h3>
                <p>befdsf</p>
                <p>akjefhk</p>
            </div>
        </div>
    </div>
    <div class="bg-secondary">kjshfkjshdk</div> */}

</>

  )
}

export default ProdDesc
