import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { GiCupcake, GiStairsCake } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
         <div className='navbar'>
            <div className='navbar-container container'>
                <Link to= '/' className="navbar-logo">
                    <GiCupcake className='navbar-icon'/>
                    Zopixell
                </Link> 
                <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to= '/' className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/menu' className='nav-links'>
                            Meni
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/gallery' className='nav-links'>
                            Galerija
                        </Link>
                    </li>
                    <li className='nav-btn'>
                        {button ? (
                            <Link to='/contact-us' className='btn-link'>
                                <Button buttonStyle='btn--outline'>Piši nam</Button>
                            </Link>
                        ): (
                            <Link to='/contact-us' className='btn-link'>
                                <Button buttonStyle='btn--outline'>Piši nam</Button>
                            </Link>
                        )}
                    </li>
                </ul> 
            </div>
        </div>   
        </>
    );
}
export default Navbar;