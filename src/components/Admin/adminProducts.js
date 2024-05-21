import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminMenue from './adminMenue';
import { NavLink } from 'react-router-dom';
import StarComp from '../starComp';

const AdminProducts = () => {
  const [adminProducts, setAdminProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editProductId, setEditProductId] = useState(null);  
  const [editedProduct, setEditedProduct] = useState({});    
  const [deleteProductId, setDeleteProductId] = useState(null);    

  useEffect(() => {
    const fetchAdminProducts = async () => {
      try {
        let response = await axios.get('http://localhost:3002/api/products');
        setAdminProducts(response.data);
        setLoading(false);
        console.log('adminProducts===<>', response.data);
      } catch (error) {
        console.log('Error in fetching AdminProducts', error);
      }
    };
    fetchAdminProducts();
  }, []);

  const handleEditClick = (product) => {
    setEditProductId(product._id);
    setEditedProduct(product);
  };

  const handleInputChange = (e, fieldName) => {
    setEditedProduct(prev => ({ ...prev, [fieldName]: e.target.value }));
  };

const handleSaveClick = async () => {
  try {

    await axios.put(`http://localhost:3002/api/products/${editedProduct._id}`, editedProduct);
    
    
    const updatedProducts = adminProducts.map(p =>
      p._id === editedProduct._id ? editedProduct : p
    );
    setAdminProducts(updatedProducts);
    setEditProductId(null);
  } catch (error) {
    console.error('Error updating product:', error);

  }
};

const handleDeleteClick = async (productId) => {
    try {
      // Send a DELETE request to the backend API to delete the product
      await axios.delete(`http://localhost:3002/api/products/${productId}`);
      

      const updatedProducts = adminProducts.filter(product => product._id !== productId);
      setAdminProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
  
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 align-self-start">
            <AdminMenue />
          </div>
          <div className="col-md-9 text-center">
            <h1>Admin Products</h1>
            <div className="row">
              {loading ? (<h1>Loading.......</h1>) : (
                <div id="products-grid" className='container'>
                  {adminProducts.map(product => (
                    <div className="product-card" key={product._id}>
                      {editProductId === product._id ? (
                        <div>
                      <img className="product-image" src={`http://localhost:3002/${product.image}`} alt={product.title} />
                        
                          <input type="text" value={editedProduct.title} onChange={(e) => handleInputChange(e, 'title')} />
                          <input type="text" value={editedProduct.brand} onChange={(e) => handleInputChange(e, 'brand')} />
                          <input type="text" value={editedProduct.price} onChange={(e) => handleInputChange(e, 'price')} />
                          <input type="text" value={editedProduct.rating} onChange={(e) => handleInputChange(e, 'rating')} /><br/>
                          <button onClick={handleSaveClick} className='btn btn-primary m-2'>Save</button>
              
                        </div>
                      ) : (
                        <div >
                          <img className="product-image" src={`http://localhost:3002/${product.image}`} alt={product.title} />
                          <div className="product-details">
                            <div className="product-title">{product.title}</div>
                            <div className="product-description">{product.brand}</div>
                            <div className='product_rating'><StarComp stars={product.rating} /></div>
                            <div className="product-price">$:&nbsp; {product.price}</div>
                            <div className="row mt-2    ">
                            <div className='col-5 btn btn-primary'onClick={() => handleEditClick(product)}>Edit product</div>
                            <div className='col-5 btn btn-warning'onClick={() => handleDeleteClick(product._id)}>Delete </div>
                            </div>

                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProducts;
