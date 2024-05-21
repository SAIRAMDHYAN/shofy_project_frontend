import React from 'react'



import { CiMail,CiLocationOn } from "react-icons/ci";


import './contact.css'
function Contact() {
  return (
    <>

    <div className="contact-outer-div">
        
      <div className='heading'>
      <h1>Keep In Touch with Us</h1>
      <a href="http://localhost:3000/">Home</a>
      </div>

        <div className="container shadow">
           <  div className="row">
               <div className="col-md-8 col-sm-12">
               <form action="" className='contact-form'>
                    <h1>Send A Message</h1>
           
                   <label htmlFor="nameId" className='form-label'>Your Name</label>
                   <input type="text" className='form-control' id='nameId' />
           
                   <label htmlFor="emailId" className='form-label'>Your Email</label>
                   <input type="email" className='form-control' id='emailId' />
           
                   <label htmlFor="subjId" className='form-label'>Subject</label>
                   <input type="text" className='form-control' id='subjId' />
           
                   <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
             <textarea class="form-control" id="exampleFormControlTextarea1" style={{height:'200px'}}></textarea>
           
             <div className="sendMessage  ">
                      Send Message
                     </div>
                  </form>
               </div>
           
               <div className="col-md-4 col-sm-12 contact-sidebar">
                   
                   <div className="footer_sec_links contact">
                  
                  <div>
                  <img src="./assets/contactEmailImg.png" alt="" />
                   <br/>
                   <a href="#"><CiMail/> &nbsp;shofyproject@gmail.com</a> <br />
                               <h4>+ 670 413 90 762</h4>
                  </div>
           
                  <div>
                  <img src="./assets/locationImg.png" alt="" />
                      <br/>
                   <a href="#"><CiLocationOn/>&nbsp; 79 Sleepy Hollow St.Jamaica,<br /> New York 1432</a>
                  </div>
             
                  <div>
                  <img src="./assets/socialMediaimg.png" alt="" />
                    
                    <h5>Find on Social media</h5>
                          <div className="footer_social d-flex justify-content-center">
                           <div href="#"><i class="bi bi-facebook"></i></div>
                           <div href="#"><i class="bi bi-twitter"></i></div>
                           <div href="#"><i class="bi bi-instagram"></i></div>
                           <div href="#"><i class="bi bi-vimeo"></i></div>
                          </div>
                  </div>
           
                           </div>
               </div>
           </div>
      </div>
  
<div className="map container mt-5">

<iframe width={'100%'} height={'500px'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-74.11976383964465!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1678114595329!5m2!1sen!2sbd" data-dashlane-frameid="594"></iframe>
</div>
</div>

    </>
  )
}

export default Contact
