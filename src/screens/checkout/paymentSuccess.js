import React from 'react'
import { NavLink } from 'react-router-dom'
// import '../../AssetsSRC/successLogo'
const PaymentSuccess = () => {

    const divStyle = {
        backgroundImage: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(179,148,233,1) 100%)',
        // color:'white'
    };
  return (
    // <div style={{height:'80vh'}}>
     
<div className="container-fluid pt-4" style={divStyle}>
    <div className="row justify-content-center align-items-center" style={{ height: '60vh' }}>
        <div className="col-md-3 shadow p-3 mb-5 bg-white rounded d-flex flex-column justify-content-center align-items-center">
            <div className="text-center bg-light p-3" style={{width:'300px'}}>
                <img src='https://www.clipartmax.com/png/middle/301-3011314_pe-success-icon-task-done.png' height='90px' alt="" />
                <h2 className="m-3 danger" style={{color:'rgb(107, 158, 4)'}}><span>SUCCESS !</span></h2>
                <p className="m-3">You Order is placed Successfully Confirmation is sent to your registered email</p>
                <NavLink to={'/'}><div className="btn btn-success  m-1" style={{backgroundColor:'rgb(107, 158, 4)'}} ><strong>Continue</strong></div></NavLink>
            </div>
        </div>
    </div>
</div>


    // </div>
  )
}

export default PaymentSuccess
