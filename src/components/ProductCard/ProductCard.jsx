import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Import the CSS file

const ProductCard = ({ productImage, productName }) => {
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
        {/* Use Link for navigation to Thank You page with state */}
        <Link to="/thank-you" state={{ productName }}>
          <button className='view-product'>View Product</button>
        </Link>
      </div>
      <div className="product-info">
        <div className="product-title">
          <h1 className="p-name">{productName}</h1>
          <h2 className='s-name'>Indoor Plant, Low Maintenance</h2>
          <p className="p-rating">
            <img src="https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7I38uSh53gNooHKdi~tXszgW~QvFg0E3L8uY3~XkbEpphgigcZdgAxV7LLN15X2c4VGwX5TtIO~4rzlVN0BZPpkFIE50DYZuMMjXqlvtA1TzriF5V8MrWyNFo82Qzz4-Sl7IUp19fci5G4g--3X9byXS4OBiTkvdT8fT9KrWrHR5ylkf5o0snp73iHvK2cyXZdfAGVe-XlzryrYx7yaIk~BtElhdQJDZazq49ajlQbafZvr9~d~WHVhgOFLUoFuk-bv26OYPgLZNTDxwp7fVM4joGh5k84Kdreh~~wwgxLVg9T6Xu0zUpzXE7dl~X5rj7IYL7C9ZL~lTT6EAgmBxg__" alt="Rating Stars" className="star-image" />
            4.9
          </p>
        </div>
        <div className="price">
          <span className="strike-price">₹359</span>
          <span className="current-price">₹299</span>
        </div>
        <div className="buttons">
          <button className="add-to-cart">- Add to Cart +</button>
          <button className="buy-on-rent">Buy on Rent</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
