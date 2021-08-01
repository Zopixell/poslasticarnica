import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import {
    FaFacebook,
    FaInstagram,
    FaYoutube
  } from 'react-icons/fa';
  import { GiCupcake } from 'react-icons/gi';
  
  function Footer() {
    return (
      <div className='footer-container'>
        
        <section className='social-media'>
          <div className='social-media-wrap'>
              <div className='footer-subscription'>
                  <p>Bulevar kralja Aleksandra 162</p>
              </div>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                <GiCupcake className='navbar-icon' />
                Zopixell © 2021
              </Link>
            </div>
           
            <div className='social-icons'>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </Link>
            </div>
           
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;