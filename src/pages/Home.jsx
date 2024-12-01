import React from 'react'
import HomeSlider from '../components/Slider'
import { FaCoffee, FaLock } from 'react-icons/fa'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <HomeSlider/>
      {/* --------best-coffee-section---- */}
      <div className="container">
        <div className="best-coffee-section">
          <h3 className='text-center tittle'>Best Coffee For You</h3>
          <div className="best-coffies flex justify-center gap30">
            <div className="best-coffee">
               <div className="best-coffee-img">
                <img src="images/coffee2.png" alt="" />
               </div>
                <div className="best-coffee-description">
                <h4 className='text-center'>Coffee 1</h4>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="best-coffee">
              <div className="best-coffee-img">
                <img src="images/coffee2.png" alt="" />
              </div>
              <div className="best-coffee-description">
                <h4 className='text-center'>Coffee 2</h4>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="best-coffee">
              <div className="best-coffee-img">
                <img src="images/coffee2.png" alt="" />
              </div>
              <div className="best-coffee-description">
                <h4 className='text-center'>Coffee 3</h4>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      {/* -----------Premium-Blen-Coffee-section"------- */}
      <div className="Premium-Blen-Coffee-section">
         <div className="container">
          <div className="premium-blen-coffee-content flex justify-center items-center gap30">
            <div className="premium-img">
              <img src="images/coffee2.png" alt="premium-img" />
            </div>
            <div className="premium-text">
              <h3 className='heading text-center coffee'>premium-img</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quas harum recusandae. At ipsa dicta laborum aut, </p>
              <div className="premium-list flex gap30 items-center">
                <div className="premium-boxs ">
                  <div className="premium-box flex items-center gap10"> <FaLock  className='cofee-icons'/>
                    <p>Premium Coffee</p></div>
                  <div className="premium-box flex items-center gap10"> <FaCoffee className='cofee-icons' />
                    <p>Hot Coffee </p></div>
                  <div className="premium-box flex items-center gap10"> <FaCoffee className='cofee-icons' />
                    <p>Cold Coffee</p></div>
                </div>
                <div>
                  <h3 className='tittle'>Tea Lover</h3>
                  <p>Much like writing code, brewing the perfect cup of  <br />tea requires patience, precision, and a dash of  <br />passion to create a comforting blend of flavors.</p>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
      {/* --------contact-section--- */}
      <Contact/>
    </>
  )
}

export default Home
