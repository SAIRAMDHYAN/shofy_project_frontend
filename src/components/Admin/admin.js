import React,{useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import AdminMenue from './adminMenue'

function Admin() {
  const divStyle = {
    backgroundImage: 'linear-gradient(to right, #2f57ef, #b966e7, #b966e7d9)'
};
// let navigate=useNavigate()
    
// useEffect(() => {
//   const token = localStorage.getItem('token');
//   const userType = localStorage.getItem('userType');
//   console.log(token)
//   if (!userType=='Admin') {
//       navigate('/login');
//       return;
//   }

// }, [navigate]);

let navigate=useNavigate()
    
useEffect(() => {
  const token = localStorage.getItem('token');
  const userType = localStorage.getItem('userType');
  console.log(userType)
  
  if (!token || userType!=='Admin') {
      navigate('/');
      return;
  }

}, [navigate]);
  return (
    <div style={{height:'60vh'}} className='container text-center'>
      

     <div className="row ">
        <div className="col-md-3">
                  <AdminMenue/>
        </div>
        <div className="col-md-9" style={divStyle} >
        {/* <h1 style={{position:'absolute'}}>Hello weclome to admin page</h1> */}
        <img src="https://delphi.informat.org/survey/img/logo.png" alt="adminHome"  width={'80%'}/>
        </div>
     </div>

    </div>
  )
}

export default Admin
