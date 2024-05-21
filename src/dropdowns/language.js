
import React,{useEffect, useState} from "react";

// import './language.css'

import './toolbarDropdown.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown}  from '@fortawesome/free-solid-svg-icons';
let Language=()=>{

    let [language,setLanguage]=useState('English')
    let [toggle,setToggle]=useState(false)

    let handleLanguageChange=(language)=>{
        setLanguage(language)
        setToggle(false)
    }
    let handleToggle=()=>{
        setToggle(!toggle)
    }


useEffect(()=>{
    let handleClickOutside=(event)=>{
    
        if(!event.target.closest('.language')){
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

<div className="dropdown language" style={{display:'inline-block'}}>
        <button onClick={handleToggle}>{language} &nbsp;<FontAwesomeIcon icon={faChevronDown} /></button>

        <div className="content border" style={{display:toggle?'block':'none'}}>
            <ul>
                <li onClick={()=>{handleLanguageChange("English")}}><a href="#">English</a></li>
                <li onClick={()=>{handleLanguageChange("Spanish")}}><a href="#">Spanish</a></li>
                <li onClick={()=>{handleLanguageChange("Portugal")}}><a href="#">Portugal</a></li>
            </ul>
        </div>
    </div>

{/* <div className="dropdown" style={{display:'inline-block'}}>
        <button>{language} &nbsp;<FontAwesomeIcon icon={faChevronDown} /></button>

        <div className="content border">
            <ul>
                <li onClick={()=>{setLanguage('English')}}><a href="#">English</a></li>
                <li onClick={()=>{setLanguage('Spanish')}}><a href="#">Spanish</a></li>
                <li onClick={()=>{setLanguage('Portugal')}}><a href="#">Portugal</a></li>
            </ul>
        </div>
    </div> */}
    {/* <div className="select-container">
        <select className="select-box">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="portigal">Portugal</option>
        </select>
    </div> */}
    </>)
}
export default Language