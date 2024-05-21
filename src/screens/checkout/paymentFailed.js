import React from 'react'
import { NavLink } from 'react-router-dom'

const PaymentFailed = () => {
    const divStyle = {
        backgroundImage: ' radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,153,233,1) 100%)',
        // color:'white'
    };
  return (
    <div className="container" style={divStyle}>
    <div className="row justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="col-md-3 shadow p-3 mb-5 bg-white rounded d-flex flex-column justify-content-center align-items-center">
            <div className="text-center bg-light p-3" style={{width:'300px'}}>
                <img src='https://e7.pngegg.com/pngimages/733/83/png-clipart-failure-miscellaneous-television.png' height='90px' alt="" />
                <h2 className="m-3 danger" style={{color:'red'}}>Failed !</h2>
                <p className="m-3">Failed to place order <br/> Please try again </p>
                <NavLink to={'/checkout'}><div className="btn btn-danger  m-1"  ><strong>Continue</strong></div></NavLink>
            </div>
         </div>
      </div>
     </div>
  )
}

export default PaymentFailed