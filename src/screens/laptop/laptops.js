import React from 'react'


import LaptopDesc from './laptopDesc'
import './laptops.css'
import { useProductContext } from '../../components/context/productcontext2'
function Laptops() {

const{isLoading,laptops}=useProductContext()
console.log(isLoading)
console.log('laptops=>',laptops)

// if(isLoading){
//     return <h3>...Loading</h3>
// }

  return (
    <>

                <div className="container">
                    <div className="heading">
                    <span className='spanClass'>Shop By Category</span>
                        <h3>Customers favourite Style Products .</h3>
                    </div>

                    <div className="laptops">
                        {laptops.map((currElem)=>{
                            return <LaptopDesc key={currElem.id}  {...currElem}/>
                        })}
                    </div>
                    
                </div>
    </>
  )
}

export default Laptops
