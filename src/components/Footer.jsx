import React from 'react'
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">

        <div className="footer-container flex justify-between ">
          <div className="footer-box">
            <h3>Coffee Cafe</h3>
            <p className='coffee-des'>Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape</p>
            <p className='coffee-des'>join our team</p>
          </div>
          <div className="footer-box">
            <h3>Footer Links</h3>
            <ul className='flex flex-col gap10'>
              <li>
                <Link to={'/'} >Home</Link>
              </li>
              <li>
                <Link to={'/about'} >About</Link>
              </li>
              <li>
                <Link to={'/contact'} >Contact</Link>
              </li>
              <li>
                <Link to={'/coffee'} >Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h3>Quick Links</h3>
            <ul className='flex flex-col gap10' >
              <li>
                <Link to={'/'} >Home</Link>
              </li>
              <li>
                <Link to={'/about'} >About</Link>
              </li>
              <li>
                <Link to={'/contact'} >Contact</Link>
              </li>
              <li>
                <Link to={'/coffee'} >Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h3 className='addres-text'>Address</h3>
            <p className='address-text'>Skardu Baltistan</p>
            <p className='address-text'>033333999999</p>
            <ul className='flex gap10 footer-icons'>
              <li>
                <Link>
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link>
                  <FaWhatsapp />
                </Link>
              </li>
              <li>
                <Link>
                  <FaTwitter />
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
