import React from 'react'
import { Link } from 'react-router-dom'
const AdminMenue = () => {
  return (
    <div>
      <h2 className='text-center  '>Menu</h2>
            <ul className="list-group my-4 text-center">
 
          {/* <Link to="/admin/create-category" className="list-group-item "><h4>Create Category</h4></Link> */}
          <Link to="/admin/create-product" className="list-group-item "><h4>Create Product</h4></Link>
          <Link to="/admin/adminProducts" className="list-group-item "><h4>Products</h4></Link>
          <Link to="/admin/users" className="list-group-item "><h4>Users</h4></Link>
        </ul>

    </div>
  )
}

export default AdminMenue
