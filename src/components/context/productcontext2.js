import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import ProductReducer from "../reducer/productreducer2";
import data_products from "../../AssetsSRC/dummyProducts";
const AppContext = createContext();
 const API = 'https://dummyjson.com/products?limit=100';

let api=data_products
const initialState = {
  isLoading: false,
  isError: false,
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
     productsMdb:[],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const [allProducts, setAllProduct] = useState([]);

  console.log('allProducts<==>', allProducts);

  const fetchAllProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      // Fetch external API
      const resExternal = await axios.get('https://dummyjson.com/products?limit=100');
      const productsExternal = await resExternal.data.products.map(item => ({ mdb: false, ...item }));
      console.log('productsExternal =>', productsExternal);

      // Fetch data from local  API
      const resLocal = await axios.get('http://localhost:3002/api/products');
      const productsMdb = await resLocal.data.map(item => ({ mdb: true, ...item }));
      console.log('productsMdb===>', productsMdb);

      // Combine data from both APIs
      const allProductsData = [...productsExternal, ...productsMdb];
      console.log('allProductsData =>', allProductsData);

      // Update  dispatch action
      setAllProduct(allProductsData);
      dispatch({ type: "SET_API_DATA", payload: allProductsData });

    } catch (error) {
      console.log('Error in fetching data', error);
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    fetchAllProducts();
  },[]);

   // my 2nd api call for single product

   const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      console.log('singleProduct',singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  return (
    <>
      {/* <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider> */}
      <AppContext.Provider value={{ ...state,getSingleProduct}}>
        {children}
      </AppContext.Provider>
    </>
  );
};




// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };


// import { createContext, useContext, useEffect, useReducer } from "react";
// import axios from "axios";
// import ProductReducer from "../reducer/productreducer2";

// const AppContext = createContext();
// const API_DUMMY = 'https://dummyjson.com/products?limit=100';
// const API_LOCAL = 'http://localhost:3002/api/products';

// const initialState = {
//   isLoading: true,
//   isError: false,
//   products: [],
//   productsMdb: [],
//   // Add other state variables as needed
// };

// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(ProductReducer, initialState);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch data from the dummy JSON API
//         const responseDummy = await axios.get(API_DUMMY);
//         const dataDummy = responseDummy.data;

//         // Fetch data from your local server API
//         const responseLocal = await axios.get(API_LOCAL);
//         const dataLocal = responseLocal.data;

//         // Combine the fetched data into a single payload
//         const payload = {
//           products: dataDummy.products,
//           productsMdb: dataLocal,
//           // Add other data as needed
//         };

//         // Dispatch the combined data to the reducer
//         dispatch({ type: "FETCH_SUCCESS", payload });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         dispatch({ type: "FETCH_ERROR" });
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <AppContext.Provider value={{ ...state }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // Custom hook to consume the context
// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider, useProductContext };
