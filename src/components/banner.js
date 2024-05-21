import React from 'react'
import './banner.css'
import { NavLink } from 'react-router-dom'

function Banner() {
  return (
    <>

<div class="container">
  <div class="row outerRow g-2">
    <div class="col-md-6 col-sm-12">
      <div class="p-3 ">
      <div className='row bannerContent '>
                     <div className="col-md-6 col-sm-12  ">
                     <h3 className=' bannerTitle'>
                     <a href="shop.html">T-Shirt Tunic <br/> Tops Blouse</a>
                     </h3>
                     <div className='bannerBtn'>
                     <NavLink to={'/womens'}><button>Shop Now  <i class="bi bi-arrow-right"></i></button></NavLink>
                     </div>
                     </div>
                     <div className='col-md-6 col-sm-12 bannerImg'>
                     {/* <img src="https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-women-bag_74190-4900.jpg?t=st=1713445401~exp=1713449001~hmac=c4f0250c2c4f06d7d0dbff5a66bd8f76dd80803c211a878c2debfa0a0783ea86&w=826" alt="banner img 2" width={'300px'} /> */}
                     <img src="./assets/bannerImg1.png" alt="img1" width={'320px'} />                     </div>
                </div>
      </div>
    </div>
    <div class="col-md-6  col-sm-12">
      <div class="p-3  ">
      <div className='row bannerContent'>
                     <div className="col-md-6 col-sm-12">
                     <h3 className=' bannerTitle'>
                     <a href="shop.html"> Satchel Tote Crossbody Bags</a>
                     </h3>
                     <div className='bannerBtn'>
                     <NavLink to={'/womens'}><button>Shop Now  <i class="bi bi-arrow-right"></i></button></NavLink>
                     </div>
                     </div>
                     <div className='col-md-6 col-sm-12 bannerImg'>
                     {/* <img src="https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-women-bag_74190-4900.jpg?t=st=1713445401~exp=1713449001~hmac=c4f0250c2c4f06d7d0dbff5a66bd8f76dd80803c211a878c2debfa0a0783ea86&w=826" alt="banner img 2" width={'300px'} /> */}
                     <img src="./assets/bannerImg2.png" alt="img1" width={'170px'} />
                     </div>
                </div>

      </div>
    </div>
    </div>

    <div class="row g-2">
    <div class="col-md-6  col-sm-12">
      <div class="p-3  ">
        
      <div className='row bannerContent'>
                     <div className="col-md-6 col-sm-12 ">
                     <h3 className=' bannerTitle'>
                     <a href="shop.html"> Men's Tennis <br/> Walking Shoes</a>
                     </h3>
                     <div className='bannerBtn'>
                     <NavLink to={'/mens'}><button>Shop Now  <i class="bi bi-arrow-right"></i></button></NavLink>
                     </div>
                     </div>
                     <div className='col-md-6 col-sm-12 bannerImg'>
                     <img src="./assets/bannerImg3.png" alt="img3" width={'300px'} />
                     </div>
                </div>
      </div>
    </div>
   
  </div>
</div>

    </>
  )
}

export default  Banner