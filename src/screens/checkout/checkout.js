import React, { useState, useEffect } from "react";
import './checkout.css';
import { useCartContext } from "../../components/context/cartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "../../components/Login&Register/login";
// import {loadStripe} from '@stripe/stripe-js';
import useRazorpay from "react-razorpay";
// import Razorpay from 'razorpay';

// import RazorpayCheckout from "../../components/razorPay";

const Checkout = () => {
  let navigate=useNavigate()

  const [Razorpay, isLoaded] = useRazorpay();

  const { cart } = useCartContext();
  const [totalAmount, setTotalAmount] = useState(0);
  const [userAddress, setUserAddress] = useState({
    firstName: '',
    lastName: '',
    countryRegion: '',
    inputAddress2: '',
    inputCity: '',
    inputState: '',
    inputZip: '',
    email: '',
    phonenum: ''
  });
console.log('totalAmount',totalAmount)
const [paymentData,setPaymentData]=useState({
  cardNumber:'',
      expiryDate:'',
      cvv:'',
      cardholderName:'',
      // billingAddress:'',
})

  // console.log(paymentData);
  useEffect(() => {
    if (cart.length > 0) {
      const totalPrice=cart.reduce((accum, cur) => accum + (cur.sum), 0);
      // const totalPrice = amount.reduce((accum, cur) => accum + (cur), 0);
      setTotalAmount(totalPrice);
    } else {
      setTotalAmount(0);
    }
  }, [cart]);
console.log(cart)

  useEffect(() => {
    // Fetch user's address details based on email
    const fetchAddress = async () => {
        const email = localStorage.getItem('email'); // Get the email from local storage
               
        try {
            const response = await axios.get(`http://localhost:3002/fetchAddress?email=${email}`);
            const addressData = response.data;
            console.log(addressData)
            setUserAddress({
                ...userAddress,
                ...addressData 
                
            });
        } catch (error) {
            console.error('Error fetching user address:', error);
        }
    };

    fetchAddress();
}, []); 

const updateUserAddress = async (addressData) => {
  const email = localStorage.getItem('email'); // assuming you store email in local storage
  try {
      const response = await axios.post('http://localhost:3002/updateAddress', {
          email: email,
          address: addressData
      });
      if (response.status === 200) {
          console.log('Address updated successfully:', response.data);
      }
  } catch (error) {
      console.error('Error updating address:', error);
  }
};


  const handleAddressChange = (e) => {
    const { id, value } = e.target;
    setUserAddress({
      ...userAddress,
      [id]: value
    });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
  
    // Validate address fields
    const { 
      firstName, 
      lastName, 
      countryRegion, 
      inputAddress2, 
      inputCity, 
      inputState, 
      inputZip, 
      email, 
      phonenum 
    } = userAddress;
  
    const isAddressValid = (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      countryRegion.trim() !== '' &&
      inputAddress2.trim() !== '' &&
      inputState !== 'Choose...' &&
      inputZip.trim() !== '' &&
      email.trim() !== '' &&
      phonenum.trim() !== ''
    );
  



    if (isAddressValid) {
      console.log('Address is valid. Submitting address...');
      const formData = new FormData();
      formData.append('firstName', userAddress.firstName);
      formData.append('lastName', userAddress.lastName);
      formData.append('countryRegion', userAddress.countryRegion);
      formData.append('inputAddress2', userAddress.inputAddress2);
      formData.append('inputCity', userAddress.inputCity);
      formData.append('inputState', userAddress.inputState);
      formData.append('inputZip', userAddress.inputZip);
      formData.append('email', userAddress.email);
      formData.append('phonenum', userAddress.phonenum);


      axios.post('http://localhost:3002/userAddress', formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    .then(response => {
        console.log('Server response:', response);
        console.log('Address added Successfully!:', response.data);
        alert('Address added Successfully!');
    })
    .catch(error => {
        console.error('Error adding product:', error);
    }) 
  
    
    } else {
      alert('Please fill out all address fields before submitting payment.');
    }
  };

  
  const handlePaymentChange = (e) => {
    const { id, value } = e.target;
    setPaymentData({
      ...paymentData,
      [id]: value
    });
  };
  
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
  
    const {
      cardNumber,
      expiryDate,
      cvv,
      cardholderName,
      // billingAddress,
    } = paymentData;

    // setPaymentData(paymentData)
    // Validate payment fields
    const isPaymentValid = (
      cardNumber !== '' &&
      expiryDate !== '' &&
      cvv !== '' &&
      cardholderName !== ''
 
    );
    console.log(paymentData)

    
 
    if (isPaymentValid) {
      console.log('Payment details are valid. Submitting payment...');
      alert('Payment Successful!');
      navigate('/success')
  

    } else {
      console.log('Payment details are not  valid. ');
      alert('Please fill out all payment fields before submitting.');
        
    }
  };

  const makePayment = async () => {
    const email = localStorage.getItem('email')
    console.log('email==>',email)
    try {
    
        // Make an HTTP POST request to the server-side endpointe
        const response = await axios.post('http://localhost:3002/send-email',{email});
        console.log('Server response:', response.data);
        // alert('Payment Successful! Email sent.');
        navigate('/success')
    } catch (error) {
        console.error('Error making payment:', error);
        // alert('Payment Successful! However, email sending failed.');
        navigate('/failed');
    }
  };


let handlePayment=async(event)=>{
       
  // let amount=5000; 
  let amount=Number(totalAmount*100)
  let currency="INR";
  let receipt_id='1234567890'

  let response = await fetch('http://localhost:3002/order', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        amount,
        currency,
        receipt: receipt_id
    })
});

if (response.ok) {
    const order = await response.json();
    console.log('order==>', order);

    let option={
      key:'rzp_test_ErqPwE61x7Xx5j',
      amount,
      currency,
      name:'Shofy Project',
      description:'Test payment in Shofy Project',
      image:'https://shofy.botble.com/storage/main/general/logo.png',
      order_id:order.id,
      handler:async function(response){
        // alert('Transaction Successful')
        makePayment()  //i called nodemailer here.

      },
      prefill:{
        name:userAddress.firstName+' '+userAddress.lastName,
        email:userAddress.email,
        contact:userAddress.phonenum
      },
      notes:{
        address:'Razorpay corporate office '
      }
    }
    let rzpl=new Razorpay(option)

    rzpl.on('Payment.failed',function(response){
      alert(response.error.code)
      alert(response.error.description)
      alert(response.error.source)
      alert(response.error.step)
      alert(response.error.reason)
      alert(response.error.metadata.order_id)
      alert(response.error.metadata.payment_id)
    })
    
    rzpl.open()
    event.preventDefault()
} else {
    console.error('Failed to fetch order:', response.statusText);
   
    // navigate('/checkout')

}

  // const order=await response.json()
  // console.log('order',order)

}



  return (
    <div className="container">
    
      <h1 className="text-center my-3 ">CHECKOUT</h1>
       
      

      <div className="row">
        <div className="col-md-6 d-flex justify-content-center shadow mb-4">
          <form className="row g-3 bg-light" onSubmit={handleAddressSubmit }>
            <h1>Billing Details</h1>
            <div className="col-6">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="First Name" value={userAddress.firstName} onChange={handleAddressChange} />
            </div>
            <div className="col-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Last Name"  value={userAddress.lastName} onChange={handleAddressChange} />
            </div>
            <div className="col-12">
              <label htmlFor="countryRegion" className="form-label">Country / Region</label>
              <input type="text" className="form-control" id="countryRegion" placeholder="Country / Region"  value={userAddress.countryRegion} onChange={handleAddressChange} />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Street Address</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Street Address"  value={userAddress.inputAddress2} onChange={handleAddressChange} />
            </div>
            <div className="col-12">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity"  value={userAddress.inputCity} onChange={handleAddressChange} />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select"  value={userAddress.inputState} onChange={handleAddressChange}>
                <option selected>Choose...</option>
                <option>Karnataka</option>
                <option>Andra Pradesh</option>
                <option>Telangana</option>
                <option>Kerala</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="inputZip" className="form-label">Pincode</label>
              <input type="text" className="form-control" id="inputZip"  value={userAddress.inputZip} onChange={handleAddressChange} />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="email"  value={userAddress.email} onChange={handleAddressChange} />
            </div>
            <div className="col-12">
              <label htmlFor="phonenum" className="form-label">Phone number</label>
              <input type="number" className="form-control" id="phonenum"  value={userAddress.phonenum} onChange={handleAddressChange} />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary"
              disabled={userAddress.phonenum==''||userAddress.email==''||userAddress.firstName==''||userAddress.inputCity==''}
              >Submit Address</button>
            </div>
          </form>
        </div>

        <div className="col-md-5 col-sm-10 shadow align-self-start">


        <div className="row">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                     
                     <div className="product">
                        <h3>Product</h3>
                     </div>
                     <div className="product">
                       <h3>Price</h3>
                     </div>

                    </div>
<hr/>

  {cart.map((curEle)=>{
    return(
           <>
                   <div className="col-12 mx-0 d-flex justify-content-between fw-5">
      
      <div className="product">
         <h6>{curEle.title}</h6>
      </div>
      <div className="product">
        <h5>{curEle.sum}</h5>
      </div>
  
     </div>
     <hr/>
           </>
       
    )
  })} 
                    <div className="col-12 d-flex justify-content-between">
                     
                     <div className="product">
                        <h3>Total</h3>
                     </div>
                     <div className="product">
                       <h3>{totalAmount}</h3>
                     </div>

                    </div>
  <hr/>
                    <div class="col-12">  
    <div class="form-check my-3">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
      I have read and agree to the website.
      </label>

      </div>

      <div className={`${cart.length !== 0?'addToCheckout':'disabled'}`} onClick={handlePayment} >Pay Now</div>                 

        </div>

                </div>
                </div>
           
                </div>
          
                {/* <div className="row justify-content-center">
          <h2 className="text-center mb-4">Payment Details</h2>
            <div className="col-md-12 d-flex justify-content-center ">
              
              <form action="#" method="post" onSubmit={handlePaymentSubmit}>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input type="text" className="form-control" id="cardNumber" name="cardNumber" placeholder="Enter card number" onChange={handlePaymentChange} required />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                    <input type="text" className="form-control" id="expiryDate" name="expiryDate" placeholder="MM/YY" onChange={handlePaymentChange} required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="cvv" name="cvv" placeholder="CVV" maxLength="3" pattern="[0-9]{3}" onChange={handlePaymentChange} required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="cardholderName" className="form-label">Cardholder Name</label>
                  <input type="text" className="form-control" id="cardholderName" name="cardholderName" placeholder="Enter cardholder name" onChange={handlePaymentChange} required />
                </div>
                // <div className="mb-3">
                //   <label htmlFor="billingAddress" className="form-label">Billing Address</label>
                //   <textarea className="form-control" id="billingAddress" name="billingAddress" rows="3" placeholder="Enter billing address" required></textarea>
                // </div> 
                    <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary m-3"
                            // onClick={makePayment}
                            disabled={cart.length===0}
                            >Submit Payment</button>
                    </div>              
                  </form>
            </div>
          </div>  */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState, useEffect } from "react";
// import './checkout.css';
// import { useCartContext } from "../../components/context/cartContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Login from "../../components/Login&Register/login";

// const Checkout = () => {
//   let navigate=useNavigate()
//   const { cart } = useCartContext();
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [userAddress, setUserAddress] = useState({
//     firstName: '',
//     lastName: '',
//     countryRegion: '',
//     inputAddress2: '',
//     inputCity: '',
//     inputState: '',
//     inputZip: '',
//     email: '',
//     phonenum: ''
//   });

// const [paymentData,setPaymentData]=useState({
//   cardNumber:'',
//       expiryDate:'',
//       cvv:'',
//       cardholderName:'',
//       // billingAddress:'',
// })

//   useEffect(() => {
//     if (cart.length > 0) {
//       const totalPrice = cart.reduce((accum, cur) => accum + cur.price, 0);
//       setTotalAmount(totalPrice);
//     } else {
//       setTotalAmount(0);
//     }
//   }, [cart]);


//   useEffect(() => {
//     // Fetch user's address details based on email
//     const fetchAddress = async () => {
//         const email = localStorage.getItem('email'); // Get the email from local storage
               
//         try {
//             const response = await axios.get(`http://localhost:3002/fetchAddress?email=${email}`);
//             const addressData = response.data;
//             console.log(addressData)
//             setUserAddress({
//                 ...userAddress,
//                 ...addressData 
                
//             });
//         } catch (error) {
//             console.error('Error fetching user address:', error);
//         }
//     };

//     fetchAddress();
// }, []); 

// const updateUserAddress = async (addressData) => {
//   const email = localStorage.getItem('email'); // Get the email from local storage
//   try {
//       const response = await axios.post(`http://localhost:3002/updateAddress/${email}`, {
//           address: addressData
//       });
//       if (response.status === 200) {
//           console.log('Address updated successfully:', response.data);
//       }
//   } catch (error) {
//       console.error('Error updating address:', error);
//   }
// };


//   const handleAddressChange = (e) => {
//     const { id, value } = e.target;
//     setUserAddress({
//       ...userAddress,
//       [id]: value
//     });
//   };

//   const handleAddressSubmit = (e) => {
//     e.preventDefault();
  
//     // Validate address fields
//     const { 
//       firstName, 
//       lastName, 
//       countryRegion, 
//       inputAddress2, 
//       inputCity, 
//       inputState, 
//       inputZip, 
//       email, 
//       phonenum 
//     } = userAddress;
  
//     const isAddressValid = (
//       firstName.trim() !== '' &&
//       lastName.trim() !== '' &&
//       countryRegion.trim() !== '' &&
//       inputAddress2.trim() !== '' &&
//       inputState !== 'Choose...' &&
//       inputZip.trim() !== '' &&
//       email.trim() !== '' &&
//       phonenum.trim() !== ''
//     );
  
//     if (isAddressValid) {
//       console.log('Address is valid. Submitting payment...');
//       updateUserAddress(userAddress);
//     } else {
//       alert('Please fill out all address fields before submitting payment.');
//     }
//   };
  
//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();
  
//     const {
//       cardNumber,
//       expiryDate,
//       cvv,
//       cardholderName,
//       // billingAddress,
//     } = paymentData;
  
//     // Validate payment fields
//     const isPaymentValid = (
//       cardNumber !== '' &&
//       expiryDate !== '' &&
//       cvv !== '' &&
//       cardholderName !== ''
 
//     );
 
//     if (isPaymentValid) {
//       console.log('Payment details are valid. Submitting payment...');
//       alert('Payment Successful!');
//       navigate('/');
//     } else {
//       console.log('Payment details are valid. Submitting payment...');
//       alert('Please fill out all payment fields before submitting.');    
//     }
//   };
  
//   return (
//     <div className="container">
//       <h1 className="text-center my-3 ">CHECKOUT</h1>
//       <div className="row">
//         <div className="col-6">
//           <form className="row g-3 bg-light" onSubmit={handleAddressSubmit}>
//             <h1>Billing Details</h1>
//             <div className="col-md-6">
//               <label htmlFor="firstName" className="form-label">First Name</label>
//               <input type="text" className="form-control" id="firstName" placeholder="First Name" value={userAddress.firstName} onChange={handleAddressChange} />
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="lastName" className="form-label">Last Name</label>
//               <input type="text" className="form-control" id="lastName" placeholder="Last Name"  value={userAddress.lastName} onChange={handleAddressChange} />
//             </div>
//             <div className="col-12">
//               <label htmlFor="countryRegion" className="form-label">Country / Region</label>
//               <input type="text" className="form-control" id="countryRegion" placeholder="Country / Region"  value={userAddress.countryRegion} onChange={handleAddressChange} />
//             </div>
//             <div className="col-12">
//               <label htmlFor="inputAddress2" className="form-label">Street Address</label>
//               <input type="text" className="form-control" id="inputAddress2" placeholder="Street Address"  value={userAddress.inputAddress2} onChange={handleAddressChange} />
//             </div>
//             <div className="col-12">
//               <label htmlFor="inputCity" className="form-label">City</label>
//               <input type="text" className="form-control" id="inputCity"  value={userAddress.inputCity} onChange={handleAddressChange} />
//             </div>
//             <div className="col-md-4">
//               <label htmlFor="inputState" className="form-label">State</label>
//               <select id="inputState" className="form-select"  value={userAddress.inputState} onChange={handleAddressChange}>
//                 <option selected>Choose...</option>
//                 <option>Karnataka</option>
//                 <option>Andra Pradesh</option>
//                 <option>Telangana</option>
//                 <option>Kerala</option>
//               </select>
//             </div>
//             <div className="col-md-2">
//               <label htmlFor="inputZip" className="form-label">Pincode</label>
//               <input type="text" className="form-control" id="inputZip"  value={userAddress.inputZip} onChange={handleAddressChange} />
//             </div>
//             <div className="col-12">
//               <label htmlFor="inputEmail4" className="form-label">Email</label>
//               <input type="email" className="form-control" id="email"  value={userAddress.email} onChange={handleAddressChange} />
//             </div>
//             <div className="col-12">
//               <label htmlFor="phonenum" className="form-label">Phone number</label>
//               <input type="number" className="form-control" id="phonenum"  value={userAddress.phonenum} onChange={handleAddressChange} />
//             </div>
//             <div className="col-12">
//               <button type="submit" className="btn btn-primary">Submit Address</button>
//             </div>
//           </form>
//         </div>

//         <div className="col-5 shadow align-self-start">
//           <div className="row">
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-12 d-flex justify-content-between">
//                   <div className="product">
//                     <h3>Product</h3>
//                   </div>
//                   <div className="product">
//                     <h3>Price</h3>
//                   </div>
//                 </div>
//                 <hr/>
//                 {cart.map((curEle)=>{
//                   return(
//                     <>
//                       <div className="col-12 mx-0 d-flex justify-content-between fw-5">
//                         <div className="product">
//                           <h6>{curEle.title}</h6>
//                         </div>
//                         <div className="product">
//                           <h5>{curEle.price}</h5>
//                         </div>
//                       </div>
//                       <hr/>
//                     </>
//                   )
//                 })}
//                 <div className="col-12 d-flex justify-content-between">
//                   <div className="product">
//                     <h3>Total</h3>
//                   </div>
//                   <div className="product">
//                     <h3>{totalAmount}</h3>
//                   </div>
//                 </div>
//                 <hr/>
//                 <div class="col-12">  
//                   <div class="form-check my-3">
//                     <input class="form-check-input" type="checkbox" id="gridCheck"/>
//                     <label class="form-check-label" for="gridCheck">
//                       I have read and agree to the website.
//                     </label>
//                   </div>
//                 </div>
//                 <hr/>
//                 <hr/>
//               </div>
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-md-12">
//               <h2 className="text-center mb-4">Payment Details</h2>
//               <form action="#" method="post" onSubmit={handlePaymentSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="cardNumber" className="form-label">Card Number</label>
//                   <input type="text" className="form-control" id="cardNumber" name="cardNumber" placeholder="Enter card number" required />
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
//                     <input type="text" className="form-control" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label htmlFor="cvv" className="form-label">CVV</label>
//                     <input type="text" className="form-control" id="cvv" name="cvv" placeholder="CVV" maxLength="3" pattern="[0-9]{3}" required />
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="cardholderName" className="form-label">Cardholder Name</label>
//                   <input type="text" className="form-control" id="cardholderName" name="cardholderName" placeholder="Enter cardholder name" required />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit Payment</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;




//////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React,{useState,useEffect} from "react";
// import './checkout.css'
// import { useCartContext } from "../../components/context/cartContext";


// let Checkout=()=>{
//     const { cart,clearCart } = useCartContext();
//  let [totalAmmount,setTotalAmmount]=useState(0)``

//     console.log('checkout cart',cart)
//     const [totalAmount, setTotalAmount] =useState(0);
//     useEffect(() => {
//         if (cart.length > 0) {
//             const totalPrice = cart.reduce((accum, cur) => accum + cur.price, 0);
//             setTotalAmount(totalPrice);
//         } else {
//             setTotalAmount(0); 
//         }
//     }, [cart]);
//     return(
//         <>
      

//         <div className="container">
//         <h1>Checkout..</h1>

//         <div className="row">
//             <div className="col-7">
                
//      <form className="row g-3 bg-light">
//         <h1> Billing Details</h1>
//    <div className="col-md-6 ">
//     <label for="firstName" className="form-label">First Name</label>
//     <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
//   </div>
//   <div className="col-md-6">
//     <label for="lastName" className="form-label">Last Name</label>
//     <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
//   </div>
//   <div className="col-12">
//     <label for="company" className="form-label">Company name (optional)</label>
//     <input type="text" className="form-control" id="company" placeholder="Example LTD"/>
//   </div>
//   <div className="col-12">
//     <label for="countryRegion" className="form-label">Country / Region</label>
//     <input type="text" className="form-control" id="countryRegion" placeholder="Apartment, studio, or floor"/>
//   </div>
//   <div className="col-12">
//     <label for="inputAddress2" className="form-label">Street address</label>
//     <input type="text" className="form-control" id="inputAddress2" placeholder="House number,street name"/>  </div>
//   <div className="col-12">
   
//     <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
//   </div>
//   <div className="col-md-6">
//     <label for="inputCity" className="form-label">City</label>
//     <input type="text" className="form-control" id="inputCity"/>
//   </div>
//   <div className="col-md-4">
//     <label for="inputState" className="form-label">State</label>
//     <select id="inputState" className="form-select">
//       <option selected>Choose...</option>
//       <option>Karnataka</option>
//       <option>Andra pradesh</option>
//       <option>Telengana</option>
//       <option>Kerala</option>
//     </select>
//   </div>
//   <div className="col-md-2">
//     <label for="inputZip" className="form-label">Pincode</label>
//     <input type="text" className="form-control" id="inputZip"/>
//   </div>

//   <div className="col-12">
//   <label for="inputEmail4" className="form-label">Email</label>
//     <input type="email" className="form-control" id="inputEmail4"/>
//      </div>
//   <div className="col-12">
//   <label for="phonenum" className="form-label">Phone number</label>
//     <input type="number" className="form-control" id="phonenum  "/>
//     </div>
//   <div className="col-12">  
//     <div className="form-check">
//       <input className="form-check-input" type="checkbox" id="gridCheck"/>
//       <label className="form-check-label" for="gridCheck">
//         Checked Address
//       </label>
//     </div>
//   </div>
 
// </form>
//             </div>

//             <div className="col-5 shadow align-self-start">

//               <div className="row">
//                 <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-12 d-flex justify-content-between">
                     
//                      <div className="product">
//                         <h3>Product</h3>
//                      </div>
//                      <div className="product">
//                        <h3>Price</h3>
//                      </div>

//                     </div>
// <hr/>

//   {cart.map((curEle)=>{
//     return(
//            <>
//                    <div className="col-12 mx-0 d-flex justify-content-between fw-5">
      
//       <div className="product">
//          <h6>{curEle.title}</h6>
//       </div>
//       <div className="product">
//         <h5>{curEle.price}</h5>
//       </div>
  
//      </div>
//      <hr/>
//            </>
       
//     )
//   })} 
//                     <div className="col-12 d-flex justify-content-between">
                     
//                      <div className="product">
//                         <h3>Total</h3>
//                      </div>
//                      <div className="product">
//                        <h3>{totalAmount}</h3>
//                      </div>

//                     </div>
//   <hr/>
//                     <div className="col-12">  
//     <div className="form-check my-3">
//       <input className="form-check-input" type="checkbox" id="gridCheck"/>
//       <label className="form-check-label" for="gridCheck">
//       I have read and agree to the website.
//       </label>
//     </div>
//   </div>

//   <div className="placeOrder btn" id="placeOrder">
//     Place Order
//     </div> 
//                 </div>
//                 </div>
           
//                 </div>
//                 <br/>


//                 <div className="row bg-secondary shadow">
//                 <div className="container mt-5">
//     <div className="row justify-content-center">
//         <div className="col-md-6">
//             <h2 className="text-center mb-4">Payment Details</h2>
            
//             {/* <!-- Payment Form --> */}
//             <form action="#" method="post">
//                 {/* <!-- Card Number --> */}
//                 <div className="mb-3">
//                     <label for="cardNumber" className="form-label">Card Number</label>
//                     <input type="text" className="form-control" id="cardNumber" name="cardNumber" placeholder="Enter card number" required/>
//                 </div>
                
//                 {/* <!-- Expiry Date and CVV --> */}
//                 <div className="row">
//                     <div className="col-md-6 mb-3">
//                         <label for="expiryDate" className="form-label">Expiry Date</label>
//                         <input type="text" className="form-control" id="expiryDate" name="expiryDate" placeholder="MM/YY"  required/>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <label for="cvv" className="form-label">CVV</label>
//                         <input type="text" className="form-control" id="cvv" name="cvv" placeholder="CVV"  maxlength="3"  pattern="[0-9]{3}" required/>
//                     </div>
//                 </div>
// {/*                 
//                 <!-- Cardholder Name --> */}
//                 <div className="mb-3">
//                     <label for="cardholderName" className="form-label">Cardholder Name</label>
//                     <input type="text" className="form-control" id="cardholderName" name="cardholderName" placeholder="Enter cardholder name" required/>
//                 </div>
                
//                 {/* <!-- Billing Address --> */}
//                 <div className="mb-3">
//                     <label for="billingAddress" className="form-label">Billing Address</label>
//                     <textarea className="form-control" id="billingAddress" name="billingAddress" rows="3" placeholder="Enter billing address" required></textarea>
//                 </div>
                
//                 {/* <!-- Submit Button --> */}
//                 <button type="submit" className="btn btn-primary">Submit Payment</button>
//             </form>
//         </div>
//     </div>
// </div>

//         </div>
       
       
//        </div>
//         </div>
//         </div>
        
//         </>
//     )

// }

// export default Checkout


// import React, { useState, useEffect } from "react";
// import './checkout.css'
// import { useCartContext } from "../../components/context/cartContext";

// let Checkout = () => {
//     const { cart, clearCart } = useCartContext();
//     const [totalAmount, setTotalAmount] = useState(0);

//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         countryRegion: '',
//         inputAddress2: '',
//         inputCity: '',
//         inputState: '',
//         inputZip: '',
//         email: '',
//         phonenum: ''
//     });

//     const [paymentData, setPaymentData] = useState({
//         cardNumber: '',
//         expiryDate: '',
//         cvv: '',
//         cardholderName: '',
//         billingAddress: ''
//     });

//     const [isAddressValid, setIsAddressValid] = useState(false);

//     useEffect(() => {
//         if (cart.length > 0) {
//             const totalPrice = cart.reduce((accum, cur) => accum + cur.price, 0);
//             setTotalAmount(totalPrice);
//         } else {
//             setTotalAmount(0);
//         }
//     }, [cart]);

//     const handleAddressChange = (e) => {
//         const { id, value } = e.target;
//         setFormData({
//             ...formData,
//             [id]: value
//         });
//     };

//     const handlePaymentChange = (e) => {
//         const { id, value } = e.target;
//         setPaymentData({
//             ...paymentData,
//             [id]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         // Validate address fields
//         const isAddressValid = Object.values(formData).every(val => val !== '');
//         setIsAddressValid(isAddressValid);

//         if (isAddressValid) {
//             // Handle payment submission logic here
//             console.log('Address is valid. Submitting payment...');
//         } else {
//             alert('Please fill out all address fields before submitting payment.');
//         }
//     };

//     return (
//         <>
//             <div className="container">
//                 <h1>Checkout..</h1>
//                 <div className="row">
//                     <div className="col-7">
//                         <form className="row g-3 bg-light" onSubmit={handleSubmit}>
//                         <div className="col-md-6 ">
//     <label for="firstName" className="form-label">First Name</label>
//     <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
//   </div>
//   <div className="col-md-6">
//     <label for="lastName" className="form-label">Last Name</label>
//     <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
//   </div>
//   <div className="col-12">
//     <label for="company" className="form-label">Company name (optional)</label>
//     <input type="text" className="form-control" id="company" placeholder="Example LTD"/>
//   </div>
//   <div className="col-12">
//     <label for="countryRegion" className="form-label">Country / Region</label>
//     <input type="text" className="form-control" id="countryRegion" placeholder="Apartment, studio, or floor"/>
//   </div>
//   <div className="col-12">
//     <label for="inputAddress2" className="form-label">Street address</label>
//     <input type="text" className="form-control" id="inputAddress2" placeholder="House number,street name"/>  </div>
//   <div className="col-12">
   
//     <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
//   </div>
//   <div className="col-md-6">
//     <label for="inputCity" className="form-label">City</label>
//     <input type="text" className="form-control" id="inputCity"/>
//   </div>
//   <div className="col-md-4">
//     <label for="inputState" className="form-label">State</label>
//     <select id="inputState" className="form-select">
//       <option selected>Choose...</option>
//       <option>Karnataka</option>
//       <option>Andra pradesh</option>
//       <option>Telengana</option>
//       <option>Kerala</option>
//     </select>
//   </div>
//   <div className="col-md-2">
//     <label for="inputZip" className="form-label">Pincode</label>
//     <input type="text" className="form-control" id="inputZip"/>
//   </div>

//   <div className="col-12">
//   <label for="inputEmail4" className="form-label">Email</label>
//     <input type="email" className="form-control" id="inputEmail4"/>
//      </div>
//   <div className="col-12">
//   <label for="phonenum" className="form-label">Phone number</label>
//     <input type="number" className="form-control" id="phonenum  "/>
//     </div>
//   <div className="col-12">  
//     <div className="form-check">
//       <input className="form-check-input" type="checkbox" id="gridCheck"/>
//       <label className="form-check-label" for="gridCheck">
//         Checked Address
//       </label>
//     </div>
//   </div>
//   <div className="col-12">
//                                 <button type="submit" className="btn btn-primary">Submit Payment</button>
//                             </div>
//                         </form>
//                     </div>

//                     <div className="col-5 shadow align-self-start">
//                         {/* Payment Details */}

//                         <div className="row">
//                 <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-12 d-flex justify-content-between">
                     
//                      <div className="product">
//                         <h3>Product</h3>
//                      </div>
//                      <div className="product">
//                        <h3>Price</h3>
//                      </div>

//                     </div>
// <hr/>

//   {cart.map((curEle)=>{
//     return(
//            <>
//                    <div className="col-12 mx-0 d-flex justify-content-between fw-5">
      
//       <div className="product">
//          <h6>{curEle.title}</h6>
//       </div>
//       <div className="product">
//         <h5>{curEle.price}</h5>
//       </div>
  
//      </div>
//      <hr/>
//            </>
       
//     )
//   })} 
//                     <div className="col-12 d-flex justify-content-between">
                     
//                      <div className="product">
//                         <h3>Total</h3>
//                      </div>
//                      <div className="product">
//                        <h3>{totalAmount}</h3>
//                      </div>

//                     </div>
//   <hr/>
//                     <div class="col-12">  
//     <div class="form-check my-3">
//       <input class="form-check-input" type="checkbox" id="gridCheck"/>
//       <label class="form-check-label" for="gridCheck">
//       I have read and agree to the website.
//       </label>
//     </div>
//   </div>

//   <div className="placeOrder btn" id="placeOrder">
//     Place Order
//     </div> 
//                 </div>
//                 </div>
           
//                 </div>

//                         <div className="row justify-content-center">
//                             <div className="col-md-12">
//                                 <h2 className="text-center mb-4">Payment Details</h2>
                                
//                                 {/* Payment Form */}
//    <form action="#" method="post">
//                   {/* <!-- Card Number --> */}
//                   <div className="mb-3">
//                       <label for="cardNumber" className="form-label">Card Number</label>
//                       <input type="text" className="form-control" id="cardNumber" name="cardNumber" placeholder="Enter card number" required/>
//                   </div>
                  
//                   {/* <!-- Expiry Date and CVV --> */}
//                   <div className="row">
//                       <div className="col-md-6 mb-3">
//                           <label for="expiryDate" className="form-label">Expiry Date</label>
//                           <input type="text" className="form-control" id="expiryDate" name="expiryDate" placeholder="MM/YY"  required/>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                           <label for="cvv" className="form-label">CVV</label>
//                           <input type="text" className="form-control" id="cvv" name="cvv" placeholder="CVV"  maxlength="3"  pattern="[0-9]{3}" required/>
//                       </div>
//                   </div>
//   {/*                 
//                   <!-- Cardholder Name --> */}
//                   <div className="mb-3">
//                       <label for="cardholderName" className="form-label">Cardholder Name</label>
//                       <input type="text" className="form-control" id="cardholderName" name="cardholderName" placeholder="Enter cardholder name" required/>
//                   </div>
                  
//                   {/* <!-- Billing Address --> */}
//                   <div className="mb-3">
//                       <label for="billingAddress" className="form-label">Billing Address</label>
//                       <textarea className="form-control" id="billingAddress" name="billingAddress" rows="3" placeholder="Enter billing address" required></textarea>
//                   </div>
                  
//                   {/* <!-- Submit Button --> */}
//                   <button type="submit" className="btn btn-primary">Submit Payment</button>
//               </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Checkout;
