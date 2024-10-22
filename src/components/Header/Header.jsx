import React from 'react';
import './Header.css'; // Assuming you're using a separate CSS file for styling

const Header = () => {
  return (
    <header className="header">
      {/* Search Bar Section */}
      <div className="search-bar">
        <img
          src="https://s3-alpha-sig.figma.com/img/eebd/9688/ace63522134bd2b91cd3d5fa1d0270b2?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLrIRhMN1mdqidp9alCxTglzpBQscpbYS~fM5Bxoafssj3TlL-5e0nwC-XuctvnspAjsl0PuJnkEEKwQrm4lIsQ5UJdaDJs-cTbUPL8y2mWStlLBeDtwhpmorPyfoLGyOhi8O8A1WNjsyHpg0SXLgMyIBBiKToVDvLsbNDiSQxZifh~aKL-t-hlM0Oyiof9tr-9frE4vrH35kQneKfZ46E9iwMSb5MVs5O6BAePEAJTewJvMxUMCzc0y2SubxeKh1CWjRmpR5RSFgJNLb8Brjfwi4IkFldyk1BIR2kj2oiZgjQYJzcaX4os7f1d3MVDYJljBU3ZRBqkH4CYafWkepA__"
          alt="Search Icon"
          className="search-icon"
        />
        <input
          type="text"
          placeholder="Search Plant"
          className="search-input"
        />
        <img
          src="https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w__"
          alt="Leaf Icon"
          className="leaf-icon"
        />
      </div>

      {/* Profile and Cart Icons Section */}
      <div className="navbar-right">
        <div className="profile">
          <i className="fa-regular fa-user"></i>
          <span>My Profile</span>
        </div>
        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
