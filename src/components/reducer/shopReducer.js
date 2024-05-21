const ShopReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'FILTER_DATA':
            return {
                ...state,
                products: action.payload,
                laptops: action.payload.filter((item) =>{return item.category === "men's clothing"}),
                smartphones: action.payload.filter((item) => item.category === 'smartphones'),
                electronics: action.payload.filter((item) => ['laptops', 'smartphones'].includes(item.category)),
                mens: action.payload.filter((item) => ['mens-shirts', 'mens-shoes', 'mens-watches'].includes(item.category)),
                womens: action.payload.filter((item) => ['womens-dresses', 'womens-shoes', 'womens-watches'].includes(item.category)),
                fashion: action.payload.filter((item) => ['skincare', 'fragrances', 'sunglasses'].includes(item.category)),
                groceries: action.payload.filter((item) => ['groceries', 'automotive', 'motorcycle', 'lighting', 'furniture'].includes(item.category)),
                beauty: action.payload.filter((item) => ['fragrances', 'skincare', 'womens-watches'].includes(item.category)),
                jewellery: action.payload.filter((item) => ['womens-jewellery', 'womens-watches'].includes(item.category)),
            };
        // ... other cases
        default:
            return state;
    }
};


  export default ShopReducer;