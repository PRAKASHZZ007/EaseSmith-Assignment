import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Left side */}
            <div className="navbar-left">
                <img
                    src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__"
                    alt="Chaperone Icon"
                    className="navbar-icon"
                />
                <span className="navbar-text">Chaperone</span>
            </div>

            {/* Center navigation items */}
            <ul className="navbar-center">
                <li><a href="#">Home</a></li>
                <li><a href="#" className='active-link'>Plants & Pots</a></li>
                <li><a href="#">Tools</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
