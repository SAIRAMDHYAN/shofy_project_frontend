
import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Toolbar2 from './components/toolbar2';
import Footer from './components/footer/footer';

import Navbar3 from './components/navbar3';
import Navbar from './components/navbar';
import Home from './screens/home';
import Mens from './screens/mens/mens';
import Electronics from './screens/electronics/electronics';
import ProdDesc from './screens/description/prodDesc';
import ProdDesc2 from './screens/description/prodDesc2';
import Contact from './screens/contact/contact';
import Carte from './screens/cart/cart';
import Womens from './screens/womens/womens';
import Laptops from './screens/laptop/laptops';
import Jewellery from './screens/jewellery';
import Grocery from './screens/groceries';
import Fashion from './screens/fashion';
import Beauty from './screens/beauty';
// import SingleProduct from './screens/laptop/singleProduct';
import SingleProduct from './singleProduct';

import Register from './components/Login&Register/register';
import Login from './components/Login&Register/login';

// import Cart from './screens/cart/newCart';
import Cart from './cart';
import Product from './screens/cart/newProduct';
import Checkout from './screens/checkout/checkout';
import FilteredComp from './screens/filteredProduct/filteredProduct';
import ShopCategory from './components/pages/shopCategory';
import Product5 from './components/pages/product';


import Admin from './components/Admin/admin';
import CreateCategory from './components/Admin/createCategory';
import CreateProduct from './components/Admin/createProduct';
import Users from './components/Admin/users';
import ProductsMdb from './screens/productsMdb/productsMdb';
import AdminProducts from './components/Admin/adminProducts';
import PaymentSuccess from './screens/checkout/paymentSuccess';
import PaymentFailed from './screens/checkout/paymentFailed';
function App() {
  return (
    <> 


     <Router>
    
     <Toolbar2/>
     <Navbar3/>

    <Routes>
      <Route path='/navbar3' element={<Navbar3/>}></Route>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/filteredComp' element={<FilteredComp/>}> </Route>

      <Route path='/mens' element={<Mens/>}> </Route>
      <Route path='/electronics' element={<Electronics category='electronics'/>}></Route>
     <Route path='/proddesc' element={<ProdDesc/>} ></Route>
     <Route path='/contact' element={<Contact/>} ></Route>
     <Route path='/product' element={<Product/>} ></Route>
     <Route path='/jewellery' element={<Jewellery/>} ></Route>
     <Route path='/groceries' element={<Grocery/>} ></Route>
     <Route path='/fashion' element={<Fashion/>} ></Route>
     <Route path='/beauty' element={<Beauty/>} ></Route>
     <Route path='/womens' element={<Womens/>} ></Route>
     <Route path='/lap' element={<Laptops/>} ></Route>
     <Route path='/proddesc/:id' element={<ProdDesc/>} ></Route>
     <Route path='/singleProduct/:id' element={<SingleProduct/>} ></Route>

     <Route path='/cart' element={<Cart/>} ></Route>
     <Route path='/checkout' element={<Checkout/>} ></Route>
     <Route path='/success' element={<PaymentSuccess/>} ></Route>
     <Route path='/failed' element={<PaymentFailed/>} ></Route>
     <Route path='/single' element={<SingleProduct/>} ></Route>
     <Route path='/register' element={<Register/>} ></Route>
     <Route path='/login' element={<Login/>} ></Route>

     <Route path='/admin' element={<Admin/>} ></Route>
     <Route path='/admin/create-category' element={<CreateCategory/>} ></Route>
     <Route path='/admin/create-product' element={<CreateProduct/>} ></Route>
     <Route path='/admin/users' element={<Users/>} ></Route>
     <Route path='/productsMdb' element={<ProductsMdb/>} ></Route>
     <Route path='/admin/adminProducts' element={<AdminProducts/>} ></Route>
    </Routes>
    <Footer/>
  </Router>

    </>
  );
}

export default App;
