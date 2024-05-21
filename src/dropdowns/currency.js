import React,{useEffect, useState} from "react";

import './toolbarDropdown.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown}  from '@fortawesome/free-solid-svg-icons';

let Currency=()=>{

    let[currency,setCurrency]=useState('USD')
    let [toggle,setToggle]=useState(false)
  

    let handleCurrencyChange=(currency)=>{
        setCurrency(currency)
        setToggle(false)
    }
    
  useEffect(()=>{
    let handleClickOutside=(event)=>{
        if(!event.target.closest('.currency')){
            setToggle(false)
        }

    }
        document.addEventListener('mousedown',handleClickOutside)

        return()=>{
            document.removeEventListener('mousedown',handleClickOutside)  
  }
  
},[])
    return(
    <>
    <div className="dropdown currency" style={{display:'inline-block'}}>
        <button onClick={()=>{setToggle(!toggle)}}>{currency }&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronDown} /> </button>

        <div className="content border" style={{display:toggle?'block':'none'}}>
            <ul >
            <li onClick={()=>handleCurrencyChange('USD')}><a href="#">USD</a></li>
            <li onClick={()=>handleCurrencyChange('EUR')}><a href="#">EUR</a></li>
            <li onClick={()=>handleCurrencyChange('CHF')}><a href="#">CHF</a></li>
            <li onClick={()=>handleCurrencyChange('GBP')}><a href="#">GBP</a></li>
            </ul>
        </div>
    </div>
    </>)
}
export default Currency
