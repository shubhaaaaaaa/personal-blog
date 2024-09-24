import React from 'react'

// Icons 
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SideNav from './SideNav';

const Header = () => {
  return (     
      <header>

      {/* top layer of header  */}
      <div className='header-top-layer'>
        <p className='date'>Monday <span>23 September, 2024</span></p>
        <p className="logo">Blogs by Shubha</p>
        <div>
          <FaGithub className='social_icon'/>
          <FaLinkedin className='social_icon'/>
          <AiFillInstagram className='social_icon'/>
        </div>
      </div>

      <SideNav/>  

      {/* second section of header - for large devices */}
      <div className='header-bottom-layer large-devices'>
        <FaSearch className='search-icon'/>
        
        <nav className='nav-menu'>
          <a href="">Home</a>
          <a href="">Technology</a>
          <a href="">Gadgets</a>
          <a href="">Health & Wellness</a>
          <a href="">Travel</a>
          <a href="">Food & Recipes</a>
          <a href="">Contact</a>
        </nav>   
        
        <button className='signup-button'>
          <IoIosMail className='icon'/>
          Sign Up
        </button>
      </div>

      </header>
  )
}

export default Header