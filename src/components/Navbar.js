import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { GiCupcake, GiStairsCake } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import './gallery/Gallery';
import './ContactUs';


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
    useEffect(() =>{
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
         <div className='navbar'>
            <div className='navbar-container container'>
                <Link to= '/' className='navbar-logo' onClick={closeMobileMenu}>
                    <GiCupcake className='navbar-icon'/>
                    Zopixell
                </Link> 
                <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/menu' className='nav-links' onClick={closeMobileMenu}>
                            Meni
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/gallery' className='nav-links'onClick={closeMobileMenu}>
                            Galerija
                        </Link>
                    </li>
                    <li className='nav-btn'>
                        {button ? (
                            <Link to='/Contactus' className='btn-link' >
                                <Button buttonStyle='btn--outline'>Piši nam</Button>
                            </Link>
                        ): (
                            <Link to='/ContactUs' className='btn-link' onClick={closeMobileMenu}>
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