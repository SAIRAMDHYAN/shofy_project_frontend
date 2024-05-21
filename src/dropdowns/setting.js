
import React, { useState ,useEffect} from "react";

import './toolbarDropdown.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown}  from '@fortawesome/free-solid-svg-icons';

let Setting=()=>{

    let[toggle,handleToggle]=useState(false)


    useEffect(() => {
        const handleClickOutside = (event) => {
        
            if (!event.target.closest('.setting')) {
                handleToggle(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
    <>
    <div className="dropdown setting" style={{display:'inline-block', zIndex: 1}}>
        <button onClick={()=>handleToggle(!toggle)}>Setting <FontAwesomeIcon icon={faChevronDown} /></button>

        <div className="content border setting_width" style={{display:toggle?'block':'none'}}>
            <ul>
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Cartlist</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    </div>
    </>)
}
export default Setting
