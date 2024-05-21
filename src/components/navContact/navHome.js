import React,{useState,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './navHome.css'

let NavHome=()=>{
    const navigate = useNavigate();
    const [userImage, setUserImage] = useState(localStorage.getItem('userImage'));

    // useEffect(() => {
    //     axios.get('http://localhost:3002/', {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`  
    //         }
    //     })
    //     .then(response => {
    //         if (response.data.success) {
                
    //             const newImage = response.data.image;
    //             if (newImage && newImage !== userImage) {
    //                 localStorage.setItem('userImage', newImage);
    //                 setUserImage(newImage);
    //             }
    //         } else {
    //             navigate('/');
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Authentication error:', error);
    //         navigate('/login');
    //     });
    // }, [navigate, userImage]);
    // console.log(userImage)

    return(
        <>
        <div className="container shadow">
           <div className="row p-2 d-flex justify-content-between h-5">
          <div className="col-md  home_menue_card ">
          <NavLink to={'/electronics'}>
               <div className="home_menue_img shadow">
                   <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-1.jpg" alt="" width={'100%'}></img>
               </div>

              <div className="home_menue_content mt-3">
                    <h5 className="home_menue_title"> Electronics</h5>
               </div>
               </NavLink>
             </div>
          

               <div className="col-md  home_menue_card">
               <NavLink to={'/fashion'}>
                   <div className="home_menue_img shadow">
                        <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-2.jpg" alt="" width={'100%'}></img>
                   </div>
               <div className="home_menue_content ">
               <h5 className="home_menue_title"> Fashion</h5>
               </div>
               </NavLink>
               </div>


               <div className="col-md  home_menue_card">
                <NavLink to={'/beauty'}>
               <div className="home_menue_img shadow">
                    <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-3.jpg" alt="" width={'100%'}></img>
               </div>
               <div className="home_menue_content ">
               <h5 className="home_menue_title"> Beauty</h5>
               </div>
               </NavLink>
               </div>

               <div className="col-md  home_menue_card">
               <NavLink to={'/jewellery'}>
                   <div className="home_menue_img shadow">
                      <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-4.jpg" alt="" width={'100%'}></img>
                   </div>
               <div className="home_menue_content">
               <h5 className="home_menue_title"> Jewellery</h5>
               </div>
               </NavLink>
               </div>

               <div className="col-md  home_menue_card">
                <NavLink to={'/groceries'}>
                   <div className="home_menue_img shadow">
                   <img src="https://html.hixstudio.net/shofy-prv/shofy/assets/img/menu/menu-home-5.jpg" alt="" width={'100%'}></img>
                   </div>               
               <div className="home_menue_content">
               <h5 className="home_menue_title"> Others</h5>
               </div>
               </NavLink>
                {/* {userImage ? (
                    <img src={`http://localhost:3002/${userImage}`} alt="Profile" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                ) : (
                    <p>No profile image available</p>
                )} */}
               </div>
           </div>
        </div>
        </>
    )
}
export default NavHome