

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {

    const[userType,setUserType]=useState('User')

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [secretKey,setSecretKey]=useState('')
    const navigate = useNavigate();

    const handleRegister = async (e) => {
    
    //   if (!name || !email || !password || !image) {
    //     alert('Please enter all fields');
    //     return;
    // }

     if(userType=='Admin'&& secretKey!=='ShofyAdmin'){
      e.preventDefault();
      alert('Invalid Admin')
     }
     else if (!name || !email || !password) {
      alert('Please enter all fields');
      return;
  }
     else{

      e.preventDefault();
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('image', image);
      formData.append('userType', userType);
      try {
          const response = await axios.post('http://localhost:3002/register', formData, {
              headers: { 'Content-Type': 'multipart/form-data' }
          });
          alert('Registration Success');
          navigate('/login');
      } catch (error) {
          console.error("Registration error: ", error);
          setError("Failed to register user: " + (error.response?.data?.error || "Unknown Error"));
      }
  }
     }


    const handleProfilePictureChange = (e) => {
        setImage(e.target.files[0]);
    }
    const divStyle = {
      backgroundImage: 'linear-gradient(to right,#7F7FD5, #91EAE4)'
  };

    return (
      <div style={divStyle}>
      
      <div className="col-md-12  d-flex justify-content-center align-item-center shadow py-5 ">
            <div className="bg-light rounded p-3 m-auto col-md-6 col-lg-4">
                <h1 className="text-center">Register</h1>
                {error && <p className="text-danger">{error}</p>}
                <div className="d-flex justify-content-center">
                <form onSubmit={handleRegister}>
                     
                     <div className="mb-3 text-center">
                     <span style={{fontWeight:'bold'}}>Register As</span> &nbsp;
                     <input type="radio" 
                                 value={'User'}
                                 name="userType"
                                 checked={userType === 'User'}
                                 onChange={(e)=>setUserType(e.target.value)}
                                 
                         />User&nbsp;  &nbsp;
                       <input type="radio" 
                                 value={'Admin'}
                                 name="userType"
                                 checked={userType === 'Admin'}
                                 onChange={(e)=>setUserType(e.target.value)}
                         /> Admin
                             
                         </div>
                         
                         {userType=='Admin'?(
                         <div className="mb-3">
                             {/* <label htmlFor="secretKey" className="form-label"><strong>Secret Key</strong></label> */}
                             <input type="text"
                                 id="secretKey"
                                 className="form-control"
                                 placeholder='Enter Admin secretKey'
                                 value={secretKey}
                                 
                                 onChange={(e) => setSecretKey(e.target.value)}
                             />
                         </div>):null}
      
     
                         <div className="mb-3">
                             {/* <label htmlFor="nameId" className="form-label"><strong>Name</strong></label> */}
                             <input type="text"
                                 id="nameId"
                                 className="form-control"
                                 placeholder='Enter your name'
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                             />
                         </div>
     
                         <div className="mb-3">
                             {/* <label htmlFor="emailId" className="form-label"><strong>Email</strong></label> */}
                             <input type="email"
                                 id="emailId"
                                 className="form-control"
                                 placeholder='Enter your email'
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                             />
                         </div>
     
                         <div className="mb-3">
                             {/* <label htmlFor="passwordId" className="form-label"><strong>Password</strong></label> */}
                             <input type="password"
                                 id="passwordId"
                                 className="form-control"
                                 placeholder='Enter your password'
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                             />
                             <div className="form-text">Your password will be kept secret</div>
                         </div>
     
                         <div className="mb-3">
                             {/* <label htmlFor="profilePicture" className="form-label"><strong>Profile Picture</strong></label> */}
                             <input
                                 type="file"
                                 id="profilePicture"
                                 className="form-control"
                                 onChange={handleProfilePictureChange}
                             />
                         </div>
     
                         <div className="mb-3 d-flex justify-content-center">
                             <button className="btn btn-info px-5" type="submit" ><strong>Register</strong></button>
                         </div>
                     </form>
     
                </div>
                <div className="mb-3 d-flex flex-column align-items-center">
                    <h5>Already have an Account?</h5>
                    <Link to='/login'>
                        <button className="btn btn-info px-5" style={divStyle}><strong>Login</strong></button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Register;



////////////////////////////////////////////////

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';

// const Register = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [image, setImage] = useState(null);
//     const [error, setError] = useState('');

//     const navigate = useNavigate();

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('email', email);
//         formData.append('password', password);
//         formData.append('image', image);

//         try {
//             const response = await axios.post('http://localhost:3002/register', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' }
//             });
//             navigate('/login');
//         } catch (error) {
//             console.error("Registration error: ", error);
//             setError("Failed to register user: " + (error.response?.data?.error || "Unknown Error"));
//         }
//     }

//     const handleProfilePictureChange = (e) => {
//         setImage(e.target.files[0]);
//     }
//     const divStyle = {
//       backgroundImage: 'linear-gradient(to right, #2f57ef, #b966e7, #b966e7d9)'
//   };

//     return (
//       <div style={{backgroundColor:{divStyle}}}>
      
//       <div className="col-md-12  d-flex justify-content-center align-item-center shadow py-5 ">
//             <div className="bg-light rounded p-3 m-auto col-md-6 col-lg-4">
//                 <h1>Register</h1>
//                 {error && <p className="text-danger">{error}</p>}
//                 <form onSubmit={handleRegister}>
//                     <div className="mb-3">
//                         <label htmlFor="nameId" className="form-label"><strong>Name</strong></label>
//                         <input type="text"
//                             id="nameId"
//                             className="form-control"
//                             placeholder='Enter your name'
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="emailId" className="form-label"><strong>Email</strong></label>
//                         <input type="email"
//                             id="emailId"
//                             className="form-control"
//                             placeholder='Enter your email'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="passwordId" className="form-label"><strong>Password</strong></label>
//                         <input type="password"
//                             id="passwordId"
//                             className="form-control"
//                             placeholder='Enter your password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <div className="form-text">Your password will be kept secret</div>
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="profilePicture" className="form-label"><strong>Profile Picture</strong></label>
//                         <input
//                             type="file"
//                             id="profilePicture"
//                             className="form-control"
//                             onChange={handleProfilePictureChange}
//                         />
//                     </div>

//                     <div className="mb-3 d-flex justify-content-center">
//                         <button className="btn btn-success" type="submit"><strong>Register</strong></button>
//                     </div>
//                 </form>

//                 <div className="mb-3 d-flex flex-column align-items-center">
//                     <h5>Already have an Account?</h5>
//                     <Link to='/login'>
//                         <button className="btn btn-info">Login</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//       </div>
//     );
// }

// export default Register;
