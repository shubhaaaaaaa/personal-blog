import { useState, useEffect } from "react";
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { FaSearch, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function SideNav() {
  const [isOpen, setisOpen] = useState(false);

  // Toggle the sidebar
  const toggleSideNav = () => {
    setisOpen((prev) => !prev);
  };

  // Prevent scrolling when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    // Cleanup function to restore scrolling on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Sidebar toggle button */}
      <div onClick={toggleSideNav} className="sidebar-icon">
        {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>

      {/* Sidebar Content */}
      {isOpen && (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className='search-bar'>
            <input type="text" placeholder='Search a topic...' className='search-input' />
            <FaSearch className='search-icon' />
          </div>

          <div className="sidebar-content">
            <a href="#">Home</a>
            <a href="#">Technology</a>
            <a href="#">Gadgets</a>
            <a href="#">Health & Wellness</a>
            <a href="#">Travel</a>
            <a href="#">Food & Recipes</a>
            <a href="#">Contact</a>
          </div>

          <br /> <br /> <br /> <br />
          <p className='date'>Monday <span>23 September, 2024</span></p>
          <hr />

          {/* Social Media Icons */}
          <div className="social-group">
            <FaGithub className='social_icon' />
            <FaLinkedin className='social_icon' />
            <AiFillInstagram className='social_icon' />
          </div>
        </div>
      )}

      {/* Overlay to close the sidebar when clicking outside */}
      {isOpen && <div className="overlay show" onClick={toggleSideNav}></div>}
    </>
  );
}

export default SideNav;
