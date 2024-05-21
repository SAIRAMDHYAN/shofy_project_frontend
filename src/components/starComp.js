import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function StarComp({stars}) {
    let totalStar=5
    
    let starsArray=[]

    for(let i=1;i<=totalStar;i++){
        if(i<=Math.floor(stars)){
            starsArray.push(<FaStar/>)
        }
        else if(i!=Math.ceil(stars)){
            starsArray.push(<FaRegStar/>)
        }
        else{
            starsArray.push(<FaStarHalfAlt/>)
        }
    }
    // console.log(starsArray)
  return (
    <div>


      {starsArray}
    </div>
  )
}

export default StarComp
