import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import Items from '../Items/items'
// import '../../screens/mens/mens.css'
import '../Items/items.css'

function ShopCategory(props) {
    const {womens,mens,electronics} = useContext(ShopContext);
    console.log('mens from shop category',props.category)
    // let{mens}=data_products
    // console.log('data_products in ShopCategory====>', data_products);
    // console.log('mens in ShopCategory====>', mens);
    let categoryData = []; // Initialize an empty array to hold the filtered items

    switch (props.category) {
      case 'men':
        categoryData = mens;
        break;
      case 'womens':
        categoryData = womens;
        break;
      case 'electronics':
        categoryData = electronics;
        break;
      // Add cases for other categories as needed
      default:
        break;
    }
    if (!categoryData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div id="products-grid" className='container'> 

            {mens.map((item, i) => (
                <Items key={i} id={item.id} title={item.title} image={item.images[0]} price={item.price}/>
            ))}
            </div>
        </div>
    );
}

export default ShopCategory