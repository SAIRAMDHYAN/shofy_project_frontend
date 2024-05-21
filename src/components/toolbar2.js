import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import './toolbar.css'

import Language from "../dropdowns/language";
import Setting from "../dropdowns/setting";
import Currency from '../dropdowns/currency'
let Toolbar2=()=>{

    return(
        <>
      <div className="container-fluid toolbar bg-light border d-flex justify-content-between py-3  px-5 " id="toolbar" > 
        <div className="">
        <div className="facebook  d-inline ">
            <FontAwesomeIcon icon={faFacebookF} color="blue"/>&nbsp; 7500k followers &nbsp;&nbsp; 
       </div>
       <div className="contact  d-inline"> 
       <FontAwesomeIcon icon={faPhone} color="blue"/>&nbsp; +91 89365 73567
       </div>
        </div>

      <div>
      <div className="d-inline" style={{paddingRight:'80px'}}>
            <Language/>
            <Currency/>
            <Setting/>
      </div>
      <div></div>
      </div>
    </div>
        </>
    )
}

export default Toolbar2