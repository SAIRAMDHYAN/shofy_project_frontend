
import React,{useContext,createContext,useReducer,useState} from "react";

const SearchContext=createContext()


let SearchProvider=({children})=>{
  const[searchTerm,setSearchTerm]=useState('')
  
  return(
    <SearchContext.Provider value={{searchTerm,setSearchTerm}}>
    {children}
 </SearchContext.Provider>
  )
}

let useSearchContext=()=>{
   return useContext(SearchContext)
}

export {SearchProvider,useSearchContext}

