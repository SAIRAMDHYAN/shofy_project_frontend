
// import React, { useState ,useContext,useEffect} from 'react'
// import { Link,NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowsUpDown,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { GrLogin } from "react-icons/gr";
// import { BsCart4 } from "react-icons/bs";
// import 'bootstrap-icons/font/bootstrap-icons.css'
// import './navbar5.css'
// import { ShopContext } from '../context/shopContext';
// import ShopCategory from '../pages/shopCategory';
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';

// // import { useSearchContext } from "./context/searchContext";
// function Navbar5() {
//     // const {womens,mens,electronics} = useContext(ShopContext);

//     let [menue,setMenue]=useState('mens')
  
//   return (
    
//   <div className="navDiv bg-light sticky-top">
// <nav className="navbar navbar-expand-lg navbar-light bg-light border  px-5 py-0 " style={{position:'sticky',top:0}}>
// <div className="container-fluid">
//   <Link to={'#'}> <div classNameName="nav-brand">
//               <img src="https://shofy.botble.com/storage/main/general/logo.png" alt="logo" height={'30px'}/>
//               </div>
//   </Link>

//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse navbar ps-4" id="navbarSupportedContent">
//     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//       <li className="nav-item  px-2">
//       <div class="dropdown">
//   <div class="dropdown-btn">
//     <Link to='/'>Home</Link>
//   </div>
//   {/* <div class="dropdown-content">

//      <div className="row p-2 d-flex justify-content-between h-5">
//          <div className="col-md  home_menue_card ">
//          <div className="home_menue_img shadow">
//              <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-1.jpg" alt="" width={'100%'}></img>
//          </div>

//         <div className="home_menue_content mt-3">
//               <h5 className="home_menue_title"> Electronics</h5>
//          </div>
//          </div>

//          <div className="col-md  home_menue_card">
//              <div className="home_menue_img shadow">
//                   <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-2.jpg" alt="" width={'100%'}></img>
//              </div>
//          <div className="home_menue_content ">
//          <h5 className="home_menue_title"> Fashion</h5>
//          </div>
//          </div>


//          <div className="col-md  home_menue_card">
//          <div className="home_menue_img shadow">
//               <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-3.jpg" alt="" width={'100%'}></img>
//          </div>
//          <div className="home_menue_content ">
//          <h5 className="home_menue_title"> Beauty</h5>
//          </div>
//          </div>

//          <div className="col-md  home_menue_card">
//              <div className="home_menue_img shadow">
//                 <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-4.jpg" alt="" width={'100%'}></img>
//              </div>
//          <div className="home_menue_content">
//          <h5 className="home_menue_title"> Jewellery</h5>
//          </div>
//          </div>

//          <div className="col-md  home_menue_card">
//              <div className="home_menue_img shadow">
//              <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-5.jpg" alt="" width={'100%'}></img>
//              </div>               
//          <div className="home_menue_content">
//          <h5 className="home_menue_title"> Grocery</h5>
//          </div>
//          </div>
//      </div>
//    </div> */}

//   </div>
       
//       </li>
//       <li className="nav-item  px-2">
//       <div class="dropdown">
//   <div class="dropdown-btn">
//   </div>
//   </div>

     
//       </li>
//       <li className="nav-item  px-2" onClick={()=>setMenue('menue')}>
//       <Link to={'/mens'}>Mens</Link>
       
//       </li>
//       <li className="nav-item px-2"onClick={()=>setMenue('womens')}>
//         <Link to={'/womens'}>Womens</Link>
//       </li>
//       <li className="nav-item px-2" onClick={()=>setMenue('electronics')}>
//       <Link to='/electronics'>Electronics</Link>
//       </li>
//       <li className="nav-item px-2" >
//         <Link to={'/contact'}>Contact</Link>
        
//       </li>
     
//     </ul>
    
//     <div className="d-inline  me-5 search" >
//     <Link to={'/filteredComp'}>
//     <form className="d-flex ">          
//       <input 
//       type="text"
//       name='text'
//     //   value={searchTerm}
//     //   onChange={handleSearch}
//        placeholder="Search for products..." 
//        className=' form-control-lg border-0 pt-3' 
//        style={{width:'85%',height:'100%',outline:'none'}}/>
//       <button className="btn p-0 m-0 pt-2  border-0" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/></button>
//       </form>
   
//       </Link>
//       </div>
   
//    <Link to={'/register'}>
//    <div className='m-2' >
//     {/* <GrLogin/> */}
//     <button className="btn btn-outline-dark">Login</button>
//      </div>
//    </Link>


//     {/* <div  className='m-4'>
//       <img src="https://static.thenounproject.com/png/3565598-200.png" alt="favurite" height={'50px'}/>
//       </div> */}
                              
//     <div  className='m-2'>
//       <Link to={'/cart'}> 
//      <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png" alt="cart" height={'50px'}/>
//       </Link>

//     </div> 
//     {/* <div className="nav-cart-count">0</div> */}
   
//   </div>
// </div>
// </nav>
//   </div>
// )
// }

// export default Navbar5



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
// import './navbar5.css'; // Import your CSS file

const Navbar5 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userImage, setUserImage] = useState(localStorage.getItem('userImage'));

  useEffect(() => {
    const fetchUserImage = async () => {
      try {
        const response = await axios.get('http://localhost:3002/home', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.data.success) {
          const newImage = response.data.image;
          setUserImage(newImage);
          localStorage.setItem('userImage', newImage);
        } else {
          console.error('Authentication failed');
          // Redirect to login page if needed
        }
      } catch (error) {
        console.error('Error fetching user image:', error);
      }
    };

    fetchUserImage();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="navDiv bg-light sticky-top" style={{ top: '10px' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border px-5 py-0">
        <div className="container-fluid">
          <Link to={'#'} className="nav-brand">
            <img src="https://shofy.botble.com/storage/main/general/logo.png" alt="logo" height={'30px'} />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar ps-4" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Your menu items */}
            </ul>

            <div className="d-inline me-5 search">
              <form className="d-flex">
                <input
                  type="text"
                  name='text'
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search for products..."
                  className='form-control-lg border-0 pt-3'
                  style={{ width: '85%', height: '100%', outline: 'none' }} />
                <button className="btn p-0 m-0 pt-2 border-0" type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                </button>
              </form>
            </div>

            {/* Your user image and login button */}
            <div className="d-flex align-items-center">
              {userImage ? (
                <img src={`http://localhost:3002/${userImage}`} alt="Profile" className="profile-image" />
              ) : (
                <img src="https://static.vecteezy.com/system/resources/thumbnails/009/209/212/small/neon-glowing-profile-icon-3d-illustration-vector.jpg" alt="profile" className="profile-image" />
              )}

              <Link to={'/register'}>
                <div className='m-2'>
                  <button className="btn btn-outline-dark">Login</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar5;
