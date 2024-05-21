import React from 'react'
// import './items.css'
function Items(props) {
  return (
    <div>
       <div className='body'>
{/* <img src="https://img.freepik.com/premium-vector/men-fashion-collection-social-media-banner-template-design_596383-181.jpg?w=1380" alt="" className='m-5'/> */}


      <div class="product-card">
      <img class="product-image" src={props.image} alt={props.name}/>
      <div class="product-details">
      <div class="product-title">{props.title}</div>

        <div class="product-description">{props.brand} {props.category}</div>
       {/* <div className='product_rating'> <StarComp stars={props.rating}/></div> */}
        <div class="product-price">Rs:&nbsp; {props.price*50}</div>
    
      </div>
    </div>
   

</div>

 </div>

    // </div>
  )
}

export default Items
