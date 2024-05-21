import React, { createContext, useReducer,useEffect ,useState} from 'react';
import ShopReducer from '../reducer/shopReducer';
import data_products from '../../AssetsSRC/dummyProducts';
import ShopCategory from '../pages/shopCategory';
const ShopContext = createContext();
// console.log('data_products====>', data_products);

const initialState = {  
    products: [],
    laptops: [],
    smartphones: [],
    electronics:[],
    womens:[],
    mens:[],

       fashion:[],
       groceries:[],
       beauty:[],
       jewellery:[],
    singleProduct: {},
  };



const ShopContextProvider = ({ children }) => {
    let [state,dispatch]=useReducer(ShopReducer,initialState)
    const [menue, setMenue] = useState('mens'); // Define and manage the menue state

    useEffect(() => {
        // Dispatch action based on the selected category
        switch (menue) {
          case 'mens':
            dispatch({ type: 'FILTER_DATA', payload: state.mens });
            break;
          case 'womens':
            dispatch({ type: 'FILTER_DATA', payload: state.womens });
            break;
          case 'electronics':
            dispatch({ type: 'FILTER_DATA', payload: state.electronics });
            break;
          // Add cases for other categories as needed
          default:
            dispatch({ type: 'FILTER_DATA', payload: [] });
        }
      }, [menue]); // Dependency array with menue variable

    console.log(state.mens)
    return (
        <ShopContext.Provider value={{...state}}>
            {children}
        </ShopContext.Provider>
    );
};

export { ShopContextProvider, ShopContext };

