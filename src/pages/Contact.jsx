import React from 'react'
import Location from '../components/Location'

const Contact = () => {
  return (
    <section className='contact-section'>
      <div className="container">
        <div className="contect-container">
          <h3 className='text-center tittle'>Contact us</h3>
          <form action="" className="contact-form">
             <input type="text" placeholder='enter name' />
             <input type="number" placeholder='enter phone' />
             <input type="email" placeholder='example@gamil.com' />
             <textarea name="" id="" rows={8} placeholder='message'></textarea>
             <button>Submit</button>
          </form>
        </div>
      </div>
      <Location/>
    
    </section>
  )
}

export default Contact
