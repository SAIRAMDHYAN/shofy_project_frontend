import React, { useEffect, useState } from 'react';
import './categoryArea.css';
import StarComp from './starComp';
function CategoryArea() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="categoryArea">
        
      <div className="row">
          <div className="col-md-12 categoryAreadiv">
            <span className='spanClass'>Shop By Category</span>
            <h3 className='categoryAreaHeading'>Popular on the Shofy store.</h3>
          </div>
        </div>

        <div className="row innerRow justify-content-center">
          {products.map(product => (
            <div className="col-md-2 col-sm-4 border m-2 category_item" key={product.id}>
              <img src={product.image} alt={product.title} height={'80%'} />
              <div className="category_item_details bg-light border trunketText">
                <h3>{product.title}</h3>
                <h5>${product.price}</h5>
                <h5 style={{color:'gold'}}><StarComp stars={product.rating.rate}/></h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default CategoryArea;
