import React, { useState } from 'react'
import  './weaklyCatagory.css'
import StarComp from './starComp'

function WeaklyCatagory() {
let [currentIndex,setCurrentIndex]=useState(0)
let data=[ {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  }, {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  }, {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
      "rate": 2.6,
      "count": 235
    }
  }, {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
      "rate": 2.9,
      "count": 340
    }
  },
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
      "rate": 3.8,
      "count": 679
    }
  }]


  data.map(el=>console.log(el))

  let handlePrevious=(e)=>{
    if(currentIndex===0){
        setCurrentIndex(data.length-1)
    }
    else{
        setCurrentIndex(currentIndex-1)
    }
    
  }

  let handleNext=(e)=>{
        setCurrentIndex((currentIndex+1)%data.length)
     
  }

  return (
    <>
      <div className='outer-container'>
      <div className="row">
          <div className="col-md-12 categoryAreadiv">
            <span className='spanClass'>Shop By Category</span>
            <h3 className='categoryAreaHeading'>This Week's Featured</h3>
          </div>
        </div>

\        <div className="weaklyCollectionDiv ">
            <div className="weaklyCollectionCard ">
                <div className="details ">
                <h4>Clothing Collection 2023</h4>
                <h5> $ 29.95</h5>
                <h6><StarComp stars={3.5}/></h6>
                <div className='shopBtn'>
                  <button>Shop Now <i class="bi bi-arrow-right"></i></button>
                  </div>
                </div>
                <div className='images'>
                 <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Jacket" />
                </div>

           </div>
       </div>


          <div className="weaklyCollectionDiv">
               <div className="weaklyCollectionCard">
                   <div className="details" style={{ paddingLeft: '10px'}}>
                   <h4>Non Marking Tennis Shoes</h4>
                   <h5> $ 45</h5>
                   <h6><StarComp stars={4.3}/></h6>
                   <div className='shopBtn'>
                     <button>Shop Now <i class="bi bi-arrow-right"></i></button>
                     </div>
                   </div>
                   <div className='images'>
                    <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/46ee341ec71a49abb9a5283b47dc9fd7_9366/gamecourt-2.0-tennis-shoes.jpg" alt="shoe" />
                   </div>
              </div>
          </div>
         
      </div>
    </>
  )
}

export default WeaklyCatagory
