import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProvider } from './components/context/productcontext2';
import { CartProvider } from './components/context/cartContext';
import { SearchProvider } from './components/context/searchContext';
import { FiltSortProvider } from './components/context/filterAndSortContext';

import { ShopContextProvider } from './components/context/shopContext';
import { AuthProvider } from './components/context/authContext';
import ErrorBoundary from './components/errorBoundries';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App/>
  <>
  {/* <AuthProvider> */}
  <AppProvider> 
  <ShopContextProvider>
 <SearchProvider>
     <FiltSortProvider>
  
    <CartProvider>
      {/* <ErrorBoundary> */}
   <App/>
   {/* </ErrorBoundary> */}
   </CartProvider>
   
   </FiltSortProvider>
   </SearchProvider> 
  </ShopContextProvider>
  </AppProvider>
  {/* </AuthProvider> */}
</>   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
