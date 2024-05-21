import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./components/context/productcontext2";
import StarComp from "./components/starComp";
import AddToCart from "./components/addToCart";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { RiHeart2Line } from "react-icons/ri";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { RiArrowRightCircleLine } from "react-icons/ri";

const API = 'https://dummyjson.com/products';

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();
  const { title, description, price, rating, brand, category, images } = singleProduct || {};

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  const [imgIndex, setImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {isSingleLoading ? (
        <div className="container text-center">
          <img src="https://png.pngtree.com/png-vector/20200224/ourmid/pngtree-colorful-loading-icon-png-image_2152960.jpg" alt="loading..." />
        </div>
      ) : (
        <div className="container-fluid">
          <div className="container">
            <div className="row border">
              <div className="col-img col-md-6 col-sm-12 shadow align-self-start mt-5">
                <div className="row">
                  <div className="col-md-3 col-sm-4 ">
                  <div className=" small_img">
                      {images && images.length > 0 && images.map((image, index) => (
                        <div key={index} className="col-md-12  border p2" onClick={() => setImgIndex(index)}>
                          <img src={image} alt={title} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-8">
                  {images && images.length > 0 && (
                  <>
                    <img src={images[imgIndex]} alt={title} height={'100%'} width={'100%'} />
                
                  </>
                )}
                  </div>
                </div>
            
              </div>
              <div className="col-dsc col-md-4 col-sm-12">
                <span className="category">{brand}</span>
                <h1>{title}</h1>
                <span className="rating">Rating: &nbsp;<span className="rating_star"> <StarComp stars={rating} /></span> (36 reviews)</span>
                <p>{description}</p>
                <h3 className="price">Rs:&nbsp;{price*50}</h3>
                <p className='title'>Quantity</p>
                  <div id="addToCart"  style={{ fontSize: '50px', color: 'white' }}>
                    <AddToCart product={singleProduct} />
                </div>
                <div className="interact">
                  <a href="#"><HiOutlineArrowPathRoundedSquare /> &nbsp; Compare</a>
                  <a href="#"><RiHeart2Line /> &nbsp; Add Wishlist</a>
                  <a href="#"><RxQuestionMarkCircled /> &nbsp; Ask a question</a>
                </div>
                <div className="prod_det_query">
                  <div className="prod_det_query1">
                    <span className='key'>Brand :</span> <span className='value'>{brand}</span>
                  </div>
                  <div className="prod_det_query2">
                    <span className='key'>Category:</span><span className='value'>{category}</span>
                  </div>
                  <div className="prod_det_query4">
                    <span className='key'>Android:</span>
                    <div className="footer_social ms-2" id='footer_social_Id'>
                      <div href="#"><i className="bi bi-facebook"></i></div>
                      <div href="#"><i className="bi bi-twitter"></i></div>
                      <div href="#"><i className="bi bi-instagram"></i></div>
                      <div href="#"><i className="bi bi-vimeo"></i></div>
                    </div>
                  </div>
                  <div className="info_query">
                    <p><RiArrowRightCircleLine /> &nbsp;30 days easy return</p>
                    <p> <RiArrowRightCircleLine /> &nbsp;Order before 2.30pm for same day dispatch</p>
                  </div>
                </div>
                <div className="creditCard">
                  <div className="creditCard_text">Guranteed safe <br /> & secure checkout</div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PayPal_logo_2008.svg/1280px-PayPal_logo_2008.svg.png" alt="paypal" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPkrXl2UNqKdOlijbtcwzD4LG5DgGiY25i6tqarWsbQ&s" alt="visa" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" alt="mastercard" />
                  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png" alt="stripe" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
