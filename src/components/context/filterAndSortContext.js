
import React,{useState,useCallback,useContext,createContext} from "react";

let FiltSortContext=createContext()

let FiltSortProvider=({children})=>{

    const [sortType, setSortType] = useState('default'); 

    const sortProducts = (products) => {
      switch (sortType) {
        case 'priceAsc':
          return products.sort((a, b) => a.price - b.price);
        case 'priceDesc':
          return products.sort((a, b) => b.price - a.price);
        default:
          return products;
      }
    };
  
return(
    <FiltSortContext.Provider value={{sortType, setSortType,sortProducts}}>
        {children}
    </FiltSortContext.Provider>
)
}

let useFiltSortContext=()=>{
  return  useContext(FiltSortContext)
}
export {useFiltSortContext,FiltSortProvider}
