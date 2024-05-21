import React from 'react'
import AdminMenue from './adminMenue'

const CreateCategory = () => {
  return (
    <>
       <div className="container">
         <div className="row">
            <div className="col-md-3">
                <AdminMenue/>
            </div>
            <div className="col-md-9 text-center">
            <h1>CreateCategory</h1>
            </div>
         </div>
       </div>

    </>
  )
}

export default CreateCategory
