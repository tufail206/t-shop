import React, { useState } from 'react'
import { BsCupHotFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useCart } from '../context/CartContext';
const Navbar = () => {
  const {cart}=useCart()
  const [isActive,setIsActive]=useState(false)
  return (
    <header>
      <div className="container">
        <div className="nav-bar flex justify-between items-center">
                  <NavLink to={"/"} ><div className="logo">
                      <BsCupHotFill />Coffee Shop
                  </div></NavLink>
                  <div className="bars ">
                    <FaBars onClick={()=>setIsActive(true)}/>
                  </div>
            <ul className="desktop-ul flex gap30">
                <li>
                    <NavLink to={'/about'} >About</NavLink>
                </li>
                      <li>
                          <NavLink to={'/products'} >Products</NavLink>
                      </li>
                <li>
                    <NavLink to={'/services'} >Services</NavLink>
                </li>
                      <li>
                          <NavLink to={'/contact'} >Contact</NavLink>
                      </li>
                      <li>
              <NavLink to={'/cart'} className='cart-icons' ><FaCartShopping />{cart.length > 0 && <span className='quantity'>{cart.length}</span>}  </NavLink>
                      </li>
                   
            </ul>
          {isActive && <ul className="mobile-ul flex flex-col gap30">
            <NavLink to={"/"} ><div className="logo">
              <BsCupHotFill />Coffee Shop
            </div></NavLink>
            <div className="cross" >
              <IoMdClose onClick={() => setIsActive(false)} />
            </div>
            <li >
              <NavLink to={'/about'} onClick={() => setIsActive(false)} >About</NavLink>
            </li>
            <li>
              <NavLink to={'/products'} onClick={() => setIsActive(false)} >Products</NavLink>
            </li>
            <li>
              <NavLink to={'/services'}  onClick={() => setIsActive(false)}>Services</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}  onClick={() => setIsActive(false)}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={'/cart'} className='cart-icons' ><FaCartShopping  onClick={() => setIsActive(false)}/>{cart.length > 0 && <span className='quantity'>{cart.length}</span>}  </NavLink>
            </li>

          </ul>}  
        </div>
      </div>
    </header>
  )
}

export default Navbar
