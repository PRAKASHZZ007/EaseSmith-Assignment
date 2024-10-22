import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productName = location.state?.productName; // Retrieve product name from state

  const handleContinueShopping = () => {
    navigate('/EaseSmith-Assignment'); // Navigate to the products page
  };

  return (
    <div className="thank-you-container">
      <i className="fa-solid fa-xmark close-icon"></i>
      <h1 className="cart-title">Your Cart</h1>
      <hr className="divider" />
      <h2 className="congrats-text">
        Congratulations
        <br />
        Order Placed!
      </h2>
      <div className="image-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5pgI9-LPTeyxTAX7Tx4rPMOzg1OIqYmQXrG0HvjoQ5Bzp6MgBC9H2tCXXcDHh36n4rJRXiPF8KIUZ8D9ylzp7G1PXdlx5ZHXP0NgziR0E0RgqEFMhJs56aGzQompLAckBXYbj5hNT9biJmmRUxbVUqamJMOAbJrrbkIsunoLgGQCxCv1uVQZR3zAhBLfRfQccMwyuVA72PQCs2m3trjygjTMtlqTuff7MdWXldWG9waw5FpNeKNklaO5QxaALVQgsurI5Gq1cMIDYnNtD-7kPyfdTgblRmyE0zT096mERgd6FYjzM~MemDnSTIMZf5X20BvZEPgD2mqkjjyPxK2Dg__"
          alt="Thank you illustration"
        />
      </div>
      <p className="thank-you-message">
        Thank you for choosing {productName} services.<br />
        We will soon get in touch with you!
      </p>
      <button 
        className="continue-shopping-btn" 
        onClick={handleContinueShopping} // Trigger navigation on click
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default ThankYou;
