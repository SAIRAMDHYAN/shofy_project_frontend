
import React, { useState ,useContext,useEffect} from 'react'
import { Link,NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsUpDown,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useSearchContext } from "./context/searchContext";
import NavHome from "./navContact/navHome";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "./navbar5.css";

 const Navbar3 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let {searchTerm, setSearchTerm}=useSearchContext()
const navigate = useNavigate();
const [userImage, setUserImage] = useState(localStorage.getItem('userImage'));


useEffect(() => {
  const fetchUserImage = async () => {
    try {
      const response = await axios.get('http://localhost:3002/', {
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

const handleLogout=()=>{
  localStorage.removeItem('token');
  localStorage.removeItem('userImage');
  localStorage.removeItem('email');
    localStorage.removeItem('rzp_device_id');
  localStorage.removeItem('userType');
  window.location.replace('/')
}

const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};

  return (
    <div className="" >
      <nav>
         <Link to={'/'}> <div className="nav-brand ms-5">
                    <img src="https://shofy.botble.com/storage/main/general/logo.png" alt="logo" height={'30px'}/>
                    </div>
        </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {/* <span></span>
        <span></span>
        <span></span> */}
        <img src="https://www.clipartmax.com/png/full/36-365828_navbar-toggle-icon-menu-hamburger-png-white.png" alt="" style={{margin:'0px'}}/>
      </div>
      <ul className={menuOpen ? "open" : ""}>

      <li>
      <div class="dropdown-btn">
          <Link to='/'>Home</Link>
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
      <li>
      
          <Link to={'/filteredComp'}>
          <form className="d-flex search me-3 ">          
            <input 
            type="text"
            name='text'
            value={searchTerm}
            onChange={handleSearch}
             placeholder="Search for products..." 
             className=' form-control-lg border-0 ' 
             style={{width:'100%',outline:'none'}}/>
            <button className="btn px-3  pt-2  border-0 text-end" type="submit" ><FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/></button>

            </form>
            </Link>
      </li>
   
    <li className='login_user'>
      
    {userImage ? (
                    <img src={`http://localhost:3002/${userImage}`} alt="Profile" style={{ width: '70px', height: '65px', borderRadius: '50%',border:'3px solid green',margin:'0px' }} />
                ) : (
                    <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-File.png" alt="profile"style={{ width: '70px', height: '65px', borderRadius: '50%',border:'3px solid green',margin:'0px' }}/>
                )}
        </li> 
        <li>
      
         <div className='m-2 ms-4' >
         {localStorage.getItem('token')?<button className=" login_logo" onClick={handleLogout}>Logout</button>:
         <Link to={'/login'}>  <button className="login_logo">Login</button>   </Link>
         }
         
           </div>
      
         </li>
{/* 
          <div  className='m-4'>
            <img src="https://static.thenounproject.com/png/3565598-200.png" alt="favurite" height={'50px'}/>
            </div> */}
           <li>                         
          <div  className='m-2 cart_logo'>
            <Link to={'/cart'}> 
           <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3045-thumb.png" alt="cart" height={'50px'}/>
            </Link>
         
          </div>
    </li>
      
            
      </ul>

      
    </nav>
    </div>
  );
};

export default Navbar3