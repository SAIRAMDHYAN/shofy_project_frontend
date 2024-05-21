import React,{useState} from 'react'
import './corousel.css'

let data=['https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg','https://graphicsfamily.com/wp-content/uploads/edd/2022/12/Black-Friday-Sale-Ecommerce-Website-Banner-Design-scaled.jpg',
'https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg?w=996&t=st=1713829932~exp=1713830532~hmac=44dbe8638b49f3ab2ab00ac0a2834ea5df74324f6256b459db3a070af020c876']


function Corousel() {
    let [currentIndex,setCurrentIndex]=useState(0)

let handlePrevious=(event)=>{
    event.preventDefault()
    currentIndex===0?setCurrentIndex(data.length-1): setCurrentIndex(currentIndex-1) 
}

let handleNext=(event)=>{
    event.preventDefault()
    setCurrentIndex((currentIndex+1)%data.length)
}

// setInterval(()=>{setCurrentIndex((currentIndex+1)%data.length)},8000)

  return (
    <div className='corousel' style={{width:'100%'}}>
      <h1 onClick={handlePrevious}  className='previous ' ><i class="bi bi-arrow-left-circle-fill"></i></h1>
      <img src={data[currentIndex]}  style={{position:'relative'}} alt="corousel images" width={'100%'} height={'500px'} />
      <h1 onClick={handleNext}  className='next'><i class="bi bi-arrow-right-circle-fill"></i></h1>
    </div>
  )
}

export default Corousel

