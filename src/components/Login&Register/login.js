import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3002/login', { email, password })
            .then(res => {
                const { token, userType, image, message,email} = res.data;
                
                if (token) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('userImage', image);
                    localStorage.setItem('userType', userType); 
                    localStorage.setItem('email', email); 
                    
                    if (userType === 'Admin') {
                        navigate('/admin');
                    } else {
                        navigate('/'); 
                    }

                    alert(message);
                } else {
                    alert(res.data.error || 'Error logging in');
                }
            })
            .catch(err => {
                console.error(err);
                alert('Failed to login: ' + (err.response?.data?.error || "Server error"));
            });
           
    }

    const divStyle = {
        backgroundImage: 'linear-gradient(to right, #2f57ef, #b966e7, #b966e7d9)',
        color:'white'
    };
 

    return (
        <>
            <div className="col-md-12 d-flex justify-content-center align-item-center bg-secondary shadow py-5 " style={divStyle}>
                <div className="bg-light rounded p-3 m-auto col-md-6 col-lg-4">
                    <h1 className="text-center" style={{color:'purple'}}>Login</h1>
             <div className="d-flex justify-content-center my-4">
             <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            {/* <label htmlFor="emailId" className="form-label"><strong>Email</strong></label> */}
                            <input type="email" id="emailId" className="form-control" placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            {/* <label htmlFor="passwordId" className="form-label"><strong>Password</strong></label> */}
                            <input type="password" id="passwordId" className="form-control" placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="form-text">Your password will be kept secret</div>
                        </div>

                        <div className="mb-3 d-flex justify-content-center light mt-4" >
                            <button className="btn px-3  " style={divStyle}  type="submit"><h5>Login</h5></button>
                        </div>

                        <div className="mb-3 d-flex flex-column align-items-center">
                    <h5 style={{color:'black'}}>Do not have an Account?</h5>
                    <Link to='/register'>
                        <button className="btn btn-info px-5" style={divStyle}><strong>Register</strong></button>
                    </Link>
                </div>
                    </form>
             </div>
                </div>
            </div>
        </>
    )
}

export default Login;
