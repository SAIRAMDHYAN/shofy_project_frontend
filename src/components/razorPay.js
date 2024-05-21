import React from 'react';
import Razorpay from 'razorpay';

const RazorpayCheckout = ({ amount }) => {
  const handleClick = async () => {
    try {
      // Fetch order details from the server
      const response = await fetch('http://localhost:3002/create-razorpay-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount })
      });
      const order = await response.json();

      // Initialize Razorpay
      const options = {
        key: 'YOUR_KEY_ID',
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: 'Your Company Name',
        description: 'Product description',
        prefill: {
          name: 'John Doe',
          email: 'john@example.com'
        },
        handler: function(response) {
          // Handle success
          alert('Payment successful!');
        },
        theme: {
          color: '#F37254'
        }
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleClick}>Pay with Razorpay</button>
  );
};

export default RazorpayCheckout;
