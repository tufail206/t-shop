import { useState } from 'react'
import './App.css'
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import CartPage from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
function App() {


  return (
<>
      <BrowserRouter>
       <Navbar/>

       <Routes>
         <Route exact path="/"  element={<Home/>} />
         <Route exact path="/about" element={<About/>} />
         <Route exact path="/contact" element={<Contact/>} />
         <Route exact path="/products"element={<Products/>} />
         <Route exact path="/services"element={<Services/>} />
         <Route exact path="/cart"element={<CartPage/>} />
       </Routes>

       <Footer/>

      </BrowserRouter>
</>
  )
}

export default App
