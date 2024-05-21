import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { CiMail,CiLocationOn } from "react-icons/ci";

function Footer() {
  return (
    <>
         <div className="footer ">

           <div className="container" style={{backgroundColor:'rgb(239, 241, 245)'}}>
           <div className="footer_sec sec_padding row">
                <div className="col-md  footer_sec_links description ">   
                <Link to={'/'}> <div classNameName="nav-brand">
                    <img src="https://shofy.botble.com/storage/main/general/logo.png" alt="logo" height={'40px'}/>
                    </div>
                </Link>           

               <h5>We are a team of designers <br/>and developers that create <br/> high quality WordPress</h5>
               <div className="footer_social ">
                <div href="#"><i className="bi bi-facebook"></i></div>
                <div href="#"><i class="bi bi-twitter"></i></div>
                <div href="#"><i class="bi bi-instagram"></i></div>
                <div href="#"><i class="bi bi-vimeo"></i></div>
               </div>
                </div>

                <div className=" col-md footer_sec_links account  ">
                    
                    <ul>
                    <h3>My Account</h3>
                        <li><a href="#">Track Orders</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Order History</a></li>
                        <li><a href="#">Returns</a></li>
                    </ul>
                </div>

                <div className=" col-md footer_sec_links information">
                  
                    <ul>
                    <h3>Information</h3>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Latest News</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="col-md footer_sec_links contact">
                    
                    <h3>Talk To Us</h3>

                    <p>Got Questions? Call us</p>
                    <h4>+ 670 413 90 762</h4>
                        <a href="#"><CiMail/> &nbsp;shofyproject@gmail.com</a> <br />
                        <a href="#"><CiLocationOn/>&nbsp; 79 Sleepy Hollow St.Jamaica,<br /> New York 1432</a>
  
                </div>
            </div>
           </div>
         </div>
    </>
  )
}

export default Footer
