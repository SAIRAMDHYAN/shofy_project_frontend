const ProductReducer = (state, action) => {

    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "SET_API_DATA":
        let allProducts=action.payload
        let laptops = action.payload.filter((curElement) => {
            return curElement.category === "men's clothing";
        });
        let smartphones = action.payload.filter((curElement) => {
            return curElement.category === 'smartphones';
        });
        let electronics=action.payload.filter((currElement)=>{
            return currElement.category==='laptops'||currElement.category==='smartphones'||currElement.category==='electronics'
        })
        let mens=action.payload.filter((currElement)=>{
            return currElement.category==='mens-shirts'||currElement.category==='mens-shoes'||currElement.category==='mens-watches'||currElement.category==='mens'
        })
        let womens=action.payload.filter((currElement)=>{
            return currElement.category==='womens-dresses'||currElement.category==='womens-shoes'||currElement.category==='womens-watches'||currElement.category==='womens-watches'||currElement.category==='womens'
        })

        let fashion=action.payload.filter((currElement)=>{
            return currElement.category==='skincare'||currElement.category==='fragrances'||currElement.category==='sunglasses'||currElement.category==='womens-watches'
        })

        let groceries=action.payload.filter((currElement)=>{
            return currElement.category==='groceries'||currElement.category==='automotive'||currElement.category==='motorcycle'||currElement.category==='lighting'||currElement.category==='furniture'
        })
        let beauty=action.payload.filter((currElement)=>{
            return currElement.category==='fragrances'||currElement.category==='skincare'||currElement.category==='womens-watches'||currElement.category==='womens-watches'
        })
        let jewellery=action.payload.filter((currElement)=>{
            return currElement.category==='womens-jewellery'||currElement.category==='womens-watches'
        })
      
        console.log('allProducts==>',allProducts);
        //men's clothing
        // console.log('laptops', laptops);
        console.log('mens', mens);
        console.log('jewellery', jewellery);
        return {
            ...state,
            isError: 'false',
            isLoading: 'false',
            products: action.payload,
            laptops: laptops,
            smartphones: smartphones,
            electronics:electronics,
            womens:womens,
            mens:mens,
            fashion:fashion,
            groceries:groceries,
            beauty:beauty,
            jewellery:jewellery,
            productsMdb:action.payload
        };
        // const featureData = action.payload.filter((curElem) => {
        //   return curElem.featured === true;
        // });
        // return {
        //   ...state,
        //   isLoading: false,
        //   products: action.payload,
        //   featureProducts: featureData,
        // };
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
      case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
  
      case "SET_SINGLE_PRODUCT":
        console.log('singleProduct=>',action.payload)
        return {
          ...state,
          isSingleLoading: false,
          singleProduct: action.payload,
        };
  
      case "SET_SINGLE_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true,
        };
  
      default:
        return state;
    }
  };

  export default ProductReducer;