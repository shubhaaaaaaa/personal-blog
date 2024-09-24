import { useState } from "react"

import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { FaSearch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function SideNav() {
    const [isOpen, setisOpen] = useState(false);

    const toggleSideNav = () => {
        setisOpen(!isOpen)
    }

    return (
        <>  
            <div onClick={toggleSideNav} className="sidebar-icon">
                {isOpen? <IoMdClose/>:<RxHamburgerMenu/>}
            </div>
            
            {isOpen && (
            <div className={`sidebar ${isOpen? 'open':''}`}>            
                <div className='search-bar'>
                    <input type="text" placeholder='Search a topic...' className='search-input' />
                    <FaSearch className='search-icon' />
                </div>  

                <div className="sidebar-content">
                    <a href="">Home</a>
                    <a href="">Technology</a>
                    <a href="">Gadgets</a>
                    <a href="">Health & Wellness</a>
                    <a href="">Travel</a>
                    <a href="">Food & Recipes</a>
                    <a href="">Contact</a>
                    </div>  
                    <br /> <br /> <br /> <br />
                <p className='date'>Monday <span>23 September, 2024</span></p>    
                    <hr />

                <div className="social-group">
                    <FaGithub className='social_icon'/>
                    <FaLinkedin className='social_icon'/>
                    <AiFillInstagram className='social_icon'/>
                    </div>


            </div>
                    
                    
            )}
            
            {isOpen && <div className="overlay show" onClick={toggleSideNav}></div>    }                
        </>
    )
}

export default SideNav