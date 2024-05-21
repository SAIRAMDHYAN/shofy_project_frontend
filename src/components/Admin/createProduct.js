import React,{useState} from 'react'
import AdminMenue from './adminMenue'
import axios from 'axios';
import './createProduct.css'
    const CreateProduct = () => {

    const [product, setProduct] = useState({
        id:'',
        title: '',
        description: '',
        price: '',
        rating: '',
        brand: '',
        category: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', product.id);
    formData.append('title', product.title);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('rating', product.rating);
    formData.append('brand', product.brand);
    formData.append('category', product.category);
    formData.append('image', product.image);

    for (let [key, value] of formData.entries()) {
        console.log(`From Form data =>${key}: ${value}`);
      }

      console.log('id:', product.id);
    console.log('Title:', product.title);
    console.log('Description:', product.description);
    console.log('Price:', product.price);
    console.log('Rating:', product.rating);
    console.log('Brand:', product.brand);
    console.log('Category:', product.category);

    console.log('FormData:', formData);

    console.log(product.title)
    console.log(formData)

    axios.post('http://localhost:3002/products', formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    .then(response => {
        console.log('Server response:', response);
        console.log('Product added successfully:', response.data);
        alert('Product added successfully')
    })
    .catch(error => {
        console.error('Error adding product:', error);
    })

    };

    return (
        <>
        <div className="container my-3">
            <div className="row" >
                <div className="col-md-3 align-self-start shadow">
                   
                   <AdminMenue/>    
                
                </div>
                <div className="col-md-7 text-center shadow prodCol ">
                <h1>CreateProduct</h1>

                <div className='d-flex justify-content-center my-5'>
                <form onSubmit={handleSubmit} encType='multipart/form-data' >
                <input
                    type="text"
                    name="id"
                    value={product.id}
                    onChange={handleChange}
                    placeholder="ID"
                    className="form-control"
                    required
                /><br/>
                <input
                    type="text"
                    name="title"
                    value={product.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="form-control"
                    required
                /><br/>
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="form-control"
                    required
                /><br/>
                <input
                    type="text"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="form-control"
                    required
                /><br/>
                <input
                    type="text"
                    name="rating"
                    value={product.rating}
                    onChange={handleChange}
                    placeholder="Rating"
                    className="form-control"
                    required
                /><br/>
                <input
                    type="text"
                    name="brand"
                    value={product.brand}
                    onChange={handleChange}
                    placeholder="Brand"
                    className="form-control"
                    required
                /><br/>
                <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    placeholder="Category"
                    className="form-control"
                    required
                /><br/>
                <input
                    type="file"
                    name="image"
                    className="form-control"
                    onChange={(e) => {
                        setProduct(prevState => ({
                            ...prevState,
                            image: e.target.files[0]
                        }));
                    }}
                    required
                /><br/>
                <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
    }

    export default CreateProduct
