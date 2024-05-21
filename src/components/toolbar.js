
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import './toolbar.css'

let Toolbar=()=>{

    return(
        <>
        <div className="container-fluid border  d-flex justify-content-between py-2 px-4 mx-5" > 
        <div><FontAwesomeIcon icon={faFacebook}/>&nbsp; <strong>50,000 followers</strong> &nbsp;&nbsp; 
        <FontAwesomeIcon icon={faPhone}/>&nbsp; <strong>+91 89365 73567</strong> </div>
                  
         <div>
            
         <div style={{display:'inline-block'}} className='mx-2 '>   
         <select name="language" id="languageID" >
            <option value="english"> English</option>
            <option value="kannada">Kannada</option>
            <option value="hindi">Hindi</option>
            <option value="telghu">Telghu</option>
         </select>
      </div>

      <div style={{display:'inline-block'}} className='mx-2'>   
         <select name="currency" id="currencyID">
            <option value="usd"> USD</option>
            <option value="eur">EUR</option>
            <option value="vnd">VND</option>
            <option value="ngn">NGN</option>
         </select>
      </div>

      <div style={{display:'inline-block'}} className='mx-2'>   
         <select name="Setting" id="SettingID">
            <option value="setting"> Setting</option>
            <option value="kannada">Kannada</option>
            <option value="hindi">Hindi</option>
            <option value="telghu">Telghu</option>
         </select>
      </div>
         </div>
      
        </div>
        </>
    )
}

export default Toolbar