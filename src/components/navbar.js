import React, { useState ,useContext,useEffect} from 'react'
import { Link,NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpDown,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { GrLogin } from "react-icons/gr";
import { BsCart4 } from "react-icons/bs";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './navbar.css'
import { useSearchContext } from "./context/searchContext";
import NavHome from "./navContact/navHome";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

let Navbar=()=>{
let {searchTerm, setSearchTerm}=useSearchContext()
const navigate = useNavigate();
const [userImage, setUserImage] = useState(localStorage.getItem('userImage'));

const divStyle = {
  backgroundImage: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(179,148,233,1) 100%)',
  // color:'white'
};

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
        // Update the image only if it's different from the current one
        if (newImage !== userImage) {
          setUserImage(newImage);
          localStorage.setItem('userImage', newImage);
        }
      } 
      // else {
      //   console.error('Authentication failed');
      //   // Redirect to login page
      //   navigate('/register');
      // }
    } catch (error) {
      console.error('Error fetching user image:', error);
    }
  };

  fetchUserImage();
}, [userImage, navigate]); // Refresh when userImage changes or component mounts

const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};
    return(

        <div className="navDiv bg-light sticky-top" style={{position:'sticky'}} >
    <nav className="navbar navbar-expand-lg navbar-light bg-light border  px-5 py-0 "  >
      <div className="container-fluid">
        <Link to={'#'}> <div className="nav-brand">
                    <img src="https://shofy.botble.com/storage/main/general/logo.png" alt="logo" height={'30px'}/>
                    </div>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar ps-4" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item  px-2">
            <div className="dropdown">
        <div class="dropdown-btn">
          <Link to='/'>Home</Link>
        </div>
        <div class="dropdown-content">
      
           <div className="row p-2 d-flex justify-content-between h-5">
               <div className="col-md  home_menue_card ">
               <div className="home_menue_img shadow">
                   <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-1.jpg" alt="" width={'100%'}></img>
               </div>

              <div className="home_menue_content mt-3">
                    <h5 className="home_menue_title"> Electronics</h5>
               </div>
               </div>

               <div className="col-md  home_menue_card">
                   <div className="home_menue_img shadow">
                        <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-2.jpg" alt="" width={'100%'}></img>
                   </div>
               <div className="home_menue_content ">
               <h5 className="home_menue_title"> Fashion</h5>
               </div>
               </div>


               <div className="col-md  home_menue_card">
               <div className="home_menue_img shadow">
                    <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-3.jpg" alt="" width={'100%'}></img>
               </div>
               <div className="home_menue_content ">
               <h5 className="home_menue_title"> Beauty</h5>
               </div>
               </div>

               <div className="col-md  home_menue_card">
                   <div className="home_menue_img shadow">
                      <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-4.jpg" alt="" width={'100%'}></img>
                   </div>
               <div className="home_menue_content">
               <h5 className="home_menue_title"> Jewellery</h5>
               </div>
               </div>

               <div className="col-md  home_menue_card">
                   <div className="home_menue_img shadow">
                   <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-5.jpg" alt="" width={'100%'}></img>
                   </div>               
               <div className="home_menue_content">
               <h5 className="home_menue_title"> Grocery</h5>
               </div>
               </div>
           </div>
         </div>
        </div>
             
            </li>
            <li className="nav-item  px-2">
            <div className="dropdown">
        <div className="dropdown-btn">
          {/* <Link to={'/proddesc'}>ProdDesc</Link> */}
        </div>
        {/* <div class="dropdown-content">
      
           <div className="row p-2 d-flex justify-content-between h-5">
               <div className="col-md  home_menue_card ">
               <div className="home_menue_img shadow">
                   <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-1.jpg" alt="" width={'100%'}></img>
               </div>

              <div className="home_menue_content mt-3">
                    <h5 className="home_menue_title"> Electronics</h5>
               </div>
               </div>

               <div className="col-md  home_menue_card">
                   <div className="home_menue_img shadow">
                        <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-2.jpg" alt="" width={'100%'}></img>
                   </div>
               <div className="home_menue_content ">
               <h5 className="home_menue_title"> Fashion</h5>
               </div>
               </div>


               <div className="col-md  home_menue_card">
               <div className="home_menue_img shadow">
                    <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-3.jpg" alt="" width={'100%'}></img>
               </div>
               <div className="home_menue_content ">
               <h5 className="home_menue_title"> Beauty</h5>
               </div>
               </div>

               <div className="col-md  home_menue_card">
                   <div className="home_menue_img shadow">
                      <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-4.jpg" alt="" width={'100%'}></img>
                   </div>
               <div className="home_menue_content">
               <h5 className="home_menue_title"> Jewellery</h5>
               </div>
               </div>

               <div className="col-md  home_menue_card">
                   <div className="home_menue_img shadow">
                   <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-5.jpg" alt="" width={'100%'}></img>
                   </div>               
               <div className="home_menue_content">
               <h5 className="home_menue_title"> Grocery</h5>
               </div>
               </div>
           </div>
                  </div> */}
        </div>
  
           
            </li>
            <li className="nav-item  px-2">
             <Link to='/mens'>Mens</Link>
            </li>
            <li className="nav-item px-2">
              <Link to={'/womens'}>Womens</Link>
            </li>
            <li className="nav-item px-2">
            <Link to='/electronics'>Electronics</Link>
            </li>
            <li className="nav-item px-2">
              <Link to={'/contact'}>Contact</Link>
              
            </li>
           
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
           
          </ul>
          
          <div className="d-inline  me-5 search" >
          <Link to={'/filteredComp'}>
          <form className="d-flex ">          
            <input 
            type="text"
            name='text'
            value={searchTerm}
            onChange={handleSearch}
             placeholder="Search for products..." 
             className=' form-control-lg border-0 pt-3' 
             style={{width:'85%',height:'100%',outline:'none'}}/>
            <button className="btn p-0 m-0 pt-2  border-0" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/></button>
            </form>
         
            </Link>
            </div>

            {userImage ? (
                    <img src={`http://localhost:3002/${userImage}`} alt="Profile" style={{ width: '70px', height: '65px', borderRadius: '50%',border:'3px solid green',margin:'0px' }} />
                ) : (
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/209/212/small/neon-glowing-profile-icon-3d-illustration-vector.jpg" alt="rofile"style={{ width: '70px', height: '65px', borderRadius: '50%',border:'3px solid green',margin:'0px' }}/>
                )}
         
         <Link to={'/register'}>
         <div className='m-2 ms-4' >
          {/* <GrLogin/> */}
          <button className="btn btn-outline-dark">Login</button>
           </div>
         </Link>

{/* 
          <div  className='m-4'>
            <img src="https://static.thenounproject.com/png/3565598-200.png" alt="favurite" height={'50px'}/>
            </div> */}
                                    
          <div  className='m-2'>
            <Link to={'/cart'}> 
           <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png" alt="cart" height={'50px'}/>
            </Link>
         
          </div>
        </div>
      </div>
    </nav>
        </div>
    )
}

export default Navbar

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// const Navbar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [userImage, setUserImage] = useState(localStorage.getItem('userImage'));
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserImage = async () => {
//       try {
//         const response = await axios.get('http://localhost:3002/home', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`
//           }
//         });
//         if (response.data.success) {
//           const newImage = response.data.image;
//           // Update the image only if it's different from the current one
//           if (newImage !== userImage) {
//             setUserImage(newImage);
//             localStorage.setItem('userImage', newImage);
//           }
//         } 
//         // else {
//         //   console.error('Authentication failed');
//         //   // Redirect to login page
//         //   navigate('/register');
//         // }
//       } catch (error) {
//         console.error('Error fetching user image:', error);
//       }
//     };

//     fetchUserImage();
//   }, [userImage, navigate]); // Refresh when userImage changes or component mounts

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div className="navDiv bg-light sticky-top">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light border px-5 py-0" style={{ position: 'sticky', top: 0 }}>
//         <div className="container-fluid">
//           <Link to={'#'}>
//             <div className="nav-brand">
//               <img src="https://shofy.botble.com/storage/main/general/logo.png" alt="logo" height={'30px'} />
//             </div>
//           </Link>

//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse navbar ps-4" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               {/* Your menu items */}
//             </ul>

//             <div className="d-inline me-5 search">
//               <form className="d-flex">
//                 <input
//                   type="text"
//                   name='text'
//                   value={searchTerm}
//                   onChange={handleSearch}
//                   placeholder="Search for products..."
//                   className=' form-control-lg border-0 pt-3'
//                   style={{ width: '85%', height: '100%', outline: 'none' }} />
//                 <button className="btn p-0 m-0 pt-2 border-0" type="submit">
//                   <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
//                 </button>
//               </form>
//             </div>

//             <Link to={'/register'}>
//               <div className='m-2'>
//                 <button className="btn btn-outline-dark">Login</button>
//               </div>
//             </Link>

//             {userImage ? (
//               <img src={`http://localhost:3002/${userImage}`} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
//             ) : (
//               <p>No profile image available</p>
//             )}

//             <div className='m-2'>
//               <Link to={'/cart'}>
//                 <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png" alt="cart" height={'50px'} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
