

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
   alert('Item added to cart')
    const { title, description, price, rating, brand, category, images } = action.payload;

    // Create a unique ID for the product based on title and brand
    const productId = title + brand;
    // Check if the product already exists in the cart
    const existingProductIndex = state.cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
      let updatedCart = [...state.cart];
    const newCount = updatedCart[existingProductIndex].count + 1;  // Calculate the new count first
    updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        price:price*50,
        count: newCount,
        sum: updatedCart[existingProductIndex].price*newCount  // Use the new count for the sum
    };
      
        console.log(`Updated Count for ${title}: ${updatedCart[existingProductIndex].count}`);
        console.log(`Updated sum for ${title}: ${updatedCart[existingProductIndex].sum}`);
        console.log(`Updated price for ${title}: ${updatedCart[existingProductIndex].price*50}`);

        return {
            ...state,
            cart: updatedCart
        };
    } else {
        let newProduct = {
            id: productId,
            title: title,
            brand: brand,
            images: images[0],
            price: price*50,
            sum:price*50,
            rating: rating,
            count: 1  
         
        };
       

        return {
            ...state,
            cart: [...state.cart, newProduct]
        };
    }
}

  
if (action.type === "REMOVE_ITEM") {
    const productId = action.payload; // ID is passed as payload
  
    const existingProductIndex = state.cart.findIndex(item => item.id === productId);
  
    if (existingProductIndex !== -1) {
        let updatedCart = [...state.cart];
        const existingProduct = updatedCart[existingProductIndex];
  
        if (existingProduct.count > 1) {
            // Reduce the count and update the sum accordingly
            updatedCart[existingProductIndex] = {
                ...existingProduct,
                count: existingProduct.count - 1,
                sum: (existingProduct.count - 1) * (existingProduct.price) // Recalculate the sum
            };
            console.log(`Reduced Count for ${existingProduct.title}: ${existingProduct.count - 1}`);
            console.log(`Updated Sum for ${existingProduct.title}: ${(existingProduct.count - 1) * (existingProduct.price*84)}`);
        } else {
            // Remove the product completely if count is 1
            updatedCart.splice(existingProductIndex, 1);
            console.log(`Removed ${existingProduct.title} completely from cart.`);
        }
  
        return {
            ...state,
            cart: updatedCart
        };
    }
  }
  
  // Return the current state if no changes are made



    if (action.type === "CLEAR_CART") {
        return {
          ...state,
          cart:[]
        };
      }
  
    return state;
  };
  
  export default cartReducer;