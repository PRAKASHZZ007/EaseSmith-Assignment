import React, { useRef } from 'react';
import './Testimonial.css'; // Importing the CSS file for styling

const Testimonial = () => {
  const scrollRef = useRef(null); // Create a ref to access the flex row

  // Function to handle scroll left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };

  // Function to handle scroll right
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  return (
    <div className="testimonial-container">
      <h1 className="testimonial-title">Nursery</h1>
      
      {/* Scroll Left Button */}
      <button className="scroll-btn left" onClick={scrollLeft}>
        &#10094; {/* Left arrow symbol */}
      </button>

      <div className="testimonial-flex-row" ref={scrollRef}>
        {/* Testimonial item 1 */}
        <div className="testimonial-item">
          <img 
            src="https://img.freepik.com/free-photo/potted-plants-growing-greenhouse_23-2147918581.jpg?t=st=1729438872~exp=1729442472~hmac=e29d61b7ce559a4be30d24b4e9a88a689346064197622e9602ec0363cde7595c&w=996" 
            alt="Testimonial" 
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum."
          </p>
        </div>
        
        {/* Testimonial item 2 */}
        <div className="testimonial-item">
          <img 
            src="https://img.freepik.com/free-photo/cactus-plants-growing-greenhouse_23-2147918637.jpg?t=st=1729438885~exp=1729442485~hmac=284d5bf9315a42430c060db178108a5c0b9a9fd50957972ce7aeb81df09f32e5&w=996" 
            alt="Testimonial" 
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum."
          </p>
        </div>
        
        {/* Testimonial item 3 */}
        <div className="testimonial-item">
          <img 
            src="https://img.freepik.com/free-photo/greenhouse-still-life_23-2148127915.jpg?t=st=1729442408~exp=1729446008~hmac=092934999c69ce63d589a01abfc98a439252768fcb2ff019ccec6f701e90f651&w=996" 
            alt="Testimonial" 
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum."
          </p>
        </div>
        
        {/* Testimonial item 4 */}
        <div className="testimonial-item">
          <img 
            src="https://img.freepik.com/free-photo/row-fresh-green-plants-pot_23-2147918596.jpg?t=st=1729442438~exp=1729446038~hmac=75ea6c5cee3168b1415c220696f6bf61742c3b7ce1065a070f34d54b7461a406&w=996" 
            alt="Testimonial" 
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum."
          </p>
        </div>

        {/* Testimonial item 5 */}
        <div className="testimonial-item">
          <img 
            src="https://img.freepik.com/free-photo/high-angle-plants-black-pots_23-2148269590.jpg?t=st=1729442440~exp=1729446040~hmac=910c178bca93408c143cfbd86a5b5a0fbfa131da909cc475ec377d810fa0694a&w=996" 
            alt="Testimonial" 
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum."
          </p>
        </div>


         {/* Testimonial item 5 */}
          <div className="testimonial-item">
          <img 
            src="https://img.freepik.com/free-photo/high-angle-plants-black-pots_23-2148269590.jpg?t=st=1729442440~exp=1729446040~hmac=910c178bca93408c143cfbd86a5b5a0fbfa131da909cc475ec377d810fa0694a&w=996" 
            alt="Testimonial" 
            className="testimonial-image"
          />
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum."
          </p>
        </div>
      </div>

      {/* Scroll Right Button */}
      <button className="scroll-btn right" onClick={scrollRight}>
        &#10095; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

export default Testimonial;
