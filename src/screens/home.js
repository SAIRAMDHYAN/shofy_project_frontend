import React,{useEffect} from "react";
import './home.css'
// import Toolbar from "../components/toolbar";
import Navbar from '../components/navbar';
import Toolbar2 from "../components/toolbar2";
import Corousel from "../components/corousel";
import Banner from "../components/banner";
import CategoryArea from "../components/categoryArea";
import NewCollections from "../components/newCollections/newCollections";
import WeaklyCatagory from "../components/weaklyCatagory";
import Footer from "../components/footer/footer";
import ShopCategory from "../components/pages/shopCategory";
import NavHome from "../components/navContact/navHome";
import { useNavigate } from "react-router-dom";
import axios  from "axios";
let Home=()=>{
    let navigate=useNavigate()
    axios.defaults.withCredentials=true
  // useEffect(()=>{
  //   axios.get('http://localhost:3002/home')
  //   .then(result=>{
  //     console.log('result===>',result)
  //   if(result.data ==='Success'){
  //       navigate('/')
  //   }
  //   else{
  //       navigate('/login')
  //   }
  //   })
  //   .catch((err)=>console.log(err))
  // },[navigate])


    //   useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     console.log(token)
    //     if (!token) {
    //         navigate('/login');
    //         return;
    //     }

    //     axios.get('http://localhost:3002/home', {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //     .then(response => {
    //         // Assume response includes success flag and new image
    //         if (response.data.success) {
    //             const newImage = response.data.image;
    //             if (newImage && newImage !== userImage) {
    //                 localStorage.setItem('userImage', newImage);
    //                 setUserImage(newImage);
    //             }
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Authentication error:', error);
    //         navigate('/login');
    //     });
    // }, [navigate, userImage]);
    return(
        <div style={{width:'100%'}}>
        <NavHome/>
        <Corousel/>
        <Banner/>
        <ShopCategory/>
        {/* <CategoryArea/> */}
        <NewCollections/>
        <WeaklyCatagory/>
       
        </div>
    )
}

export default Home