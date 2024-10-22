import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './ProductCard.css'; // Ensure this is correctly linked

// Custom styles for the modal
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background with transparency
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '90%', // Slightly wider for better mobile support
    maxWidth: '500px', // Maximum width to avoid stretching on larger screens
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '1px 2px #888888',
    padding: '20px',
  },
};

const ProductCard = ({ productImage, productName, productId }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to handle opening/closing the popup
  const togglePopup = () => {
    setIsPopupOpen(prev => !prev);
  };

  // Function to handle confirming "Add to Cart"
  const confirmAddToCart = () => {
    console.log(`Product added to cart: ${productName}`);
    setIsPopupOpen(false); // Close popup after confirmation
  };

  return (
    <div className="product-card">
      <div className="heart-icon">
        <i className="fa-regular fa-heart"></i>
      </div>
      <div className='plant-image'>
        <img 
          src={productImage} 
          alt="Indoor Plant" 
          className="product-image" 
        />
        <Link to="/thank-you" state={{ productName }}>
          <button className='view-product'>View Product</button>
        </Link>
      </div>
      <div className="product-info">
        <div className="product-title">
          <h1 className="p-name">{productName}</h1>
          <h2 className='s-name'>Indoor Plant, Low Maintenance</h2>
          <p className="p-rating">
            <img 
              src="https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7I38uSh53gNooHKdi~tXszgW~QvFg0E3L8uY3~XkbEpphgigcZdgAxV7LLN15X2c4VGwX5TtIO~4rzlVN0BZPpkFIE50DYZuMMjXqlvtA1TzriF5V8MrWyNFo82Qzz4-Sl7IUp19fci5G4g--3X9byXS4OBiTkvdT8fT9KrWrHR5ylkf5o0snp73iHvK2cyXZdfAGVe-XlzryrYx7yaIk~BtElhdQJDZazq49ajlQbafZvr9~d~WHVhgOFLUoFuk-bv26OYPgLZNTDxwp7fVM4joGh5k84Kdreh~~wwgxLVg9T6Xu0zUpzXE7dl~X5rj7IYL7C9ZL~lTT6EAgmBxg__" 
              alt="Rating Stars" 
              className="star-image" 
            />
            4.9
          </p>
        </div>
        <div className="price">
          <span className="strike-price">₹359</span>
          <span className="current-price">₹299</span>
        </div>
        <div className="buttons">
          {/* Toggle the popup when Add to Cart is clicked */}
          <button className="add-to-cart" onClick={togglePopup}>- Add to Cart +</button>
          <button className="buy-on-rent">Buy on Rent</button>
        </div>
      </div>

      {/* Popup Box */}
      <Modal
        isOpen={isPopupOpen}
        onRequestClose={togglePopup}
        style={customStyles}
        contentLabel="Confirm Add to Cart"
      >
        <div className="popup-header" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <h2 style={{ margin: '0', textAlign: 'center', flex: '1' }}>Confirm Add to Cart</h2>
          <span className="close-popup" onClick={togglePopup} style={{ cursor: 'pointer', fontSize: '24px', marginLeft: '10px' }}>&times;</span>
        </div>
        <div className="popup-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <p style={{ textAlign: 'center' }}>
            Confirm adding <strong>{productName}</strong> to the cart for ₹299?
          </p>
          <button className="confirm-button" onClick={confirmAddToCart}>
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
