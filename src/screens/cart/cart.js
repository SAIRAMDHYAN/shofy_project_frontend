import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import './cart.css'

function Carte() {

  const[quantity,setQuantity]=useState(1)

  return (
    <>
   

  <div className="cart-body">

<div className="container shadow ">
           < div className="row border ">
               <div className="col-lg-8 col-sm-12 border ">         
               
                <div className="row tableHeader">
            <div className="col-7 border">Product</div>
            <div className="col-2 border">Price</div>
            <div className="col-2 border">Quantity</div>
            <div className="col-1 border">remove</div>
          </div>
          <div className="row tableContent border">
            <div className="col-md-7 col-sm-9">
              <div className="row">
                <div className="col-md-3"><img src="https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6e2/-473Wx593H-461119105-blue-MODEL.jpg" alt="" height={'150px'} weight={'100px'} /></div>
                <div className="col-md-9">
                  <h3>The title of the Item</h3>
                  <p>Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                  <h5>Rating: 5.6</h5>
                </div>
              </div>
            </div>
            <div className="col-md-2 "><h5>Rs. 790</h5></div>
            <div className="col-md-2 col-sm-0">
              <div className="cartQuantityDiv">
                 <button onClick={()=>{setQuantity(pre=>pre-1)}}><FaMinus/></button>
                 <span className="cartQuantity">{quantity}</span>
                 <button onClick={()=>{setQuantity(pre=>pre+1)}}><FaPlus/></button>
              </div>
            </div>
            <div className="col-md-1 col-sm-0 "> <a href="#">remove</a></div>
           </div>
{/* 
           <div className="row tableContent border">
            <div className="col-7 ">
              <div className="row">
                <div className="col-3"><img src="https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6e2/-473Wx593H-461119105-blue-MODEL.jpg" alt="" height={'150px'} weight={'100px'} /></div>
                <div className="col-9">jdcbhvvhgacdhbsahBCnbn</div>
              </div>
            </div>
            <div className="col-2 "><h5>Rs. 790</h5></div>
            <div className="col-2 ">
              <div className="cartQuantityDiv">
                 <button onClick={()=>{setQuantity(pre=>pre-1)}}><FaMinus/></button>
                 <span className="cartQuantity">{quantity}</span>
                 <button onClick={()=>{setQuantity(pre=>pre+1)}}><FaPlus/></button>
              </div>
            </div>
            <div className="col-1 "> <a href="#">remove</a></div>
           </div>

           <div className="row tableContent border">
            <div className="col-7 ">
              <div className="row">
                <div className="col-3"><img src="https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6e2/-473Wx593H-461119105-blue-MODEL.jpg" alt="" height={'150px'} weight={'100px'} /></div>
                <div className="col-9">jdcbhvvhgacdhbsahBCnbn</div>
              </div>
            </div>
            <div className="col-2 "><h5>Rs. 790</h5></div>
            <div className="col-2 ">
              <div className="cartQuantityDiv">
                 <button onClick={()=>{setQuantity(pre=>pre-1)}}><FaMinus/></button>
                 <span className="cartQuantity">{quantity}</span>
                 <button onClick={()=>{setQuantity(pre=>pre+1)}}><FaPlus/></button>
              </div>
            </div>
            <div className="col-1 "> <a href="#">remove</a></div>
           </div>

           <div className="row tableContent border">
            <div className="col-7 ">
              <div className="row">
                <div className="col-3"><img src="https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6e2/-473Wx593H-461119105-blue-MODEL.jpg" alt="" height={'150px'} weight={'100px'} /></div>
                <div className="col-9">jdcbhvvhgacdhbsahBCnbn</div>
              </div>
            </div>
            <div className="col-2 "><h5>Rs. 790</h5></div>
            <div className="col-2 ">
              <div className="cartQuantityDiv">
                 <button onClick={()=>{setQuantity(pre=>pre-1)}}><FaMinus/></button>
                 <span className="cartQuantity">{quantity}</span>
                 <button onClick={()=>{setQuantity(pre=>pre+1)}}><FaPlus/></button>
              </div>
            </div>
            <div className="col-1 "> <a href="#">remove</a></div>
           </div> */}

           <div className="row tableContent border">
            <div className="col-7 ">
              <div className="row">
                <div className="col-3"><img src="https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6e2/-473Wx593H-461119105-blue-MODEL.jpg" alt="" height={'150px'} weight={'100px'} /></div>
                <div className="col-9">jdcbhvvhgacdhbsahBCnbn</div>
              </div>
            </div>
            <div className="col-2 "><h5>Rs. 790</h5></div>
            <div className="col-2 ">
              <div className="cartQuantityDiv">
                 <button onClick={()=>{setQuantity(pre=>pre-1)}}><FaMinus/></button>
                 <span className="cartQuantity">{quantity}</span>
                 <button onClick={()=>{setQuantity(pre=>pre+1)}}><FaPlus/></button>
              </div>
            </div>
            <div className="col-1 "> <a href="#">remove</a></div>
           </div>




          
          </div>
           
               <div className="col-lg-4 col-sm-12 contact-sidebar">
                   

         <div className="aside">
          <span className='asideHeader'>PRICE DETAILS</span>
          
           <div className="asideRow asidePrice">
             <div className="key">Price</div>
             <div className="value">Rs: 7,196</div>
           </div>
           <div className="asideRow asideDiscounts">
             <div className="key">Discounts</div>
             <div className="value">Rs: 196</div>
           </div>
           <div className="asideRow asideDeleCharg">
             <div className="key">Delivary Charge</div>
             <div className="value">Free</div>
           </div>

           <div className="asideRow asideTotal ">
             <div className="key">Total </div>
             <div className="value">Rs: 7000</div>
           </div>
           <span className='savingInfo'>You will save Rs.196 on this order</span>

           <div className="addToCheckout">
            Add to Checkout
          </div>
         </div>
      
               </div>
           </div>
      </div>
  </div>

      
    </>
  )
}

export default Carte
