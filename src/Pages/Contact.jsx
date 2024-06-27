import React from 'react'
import oreg from '../../src/assets/oreg.jpg'
import contactPic from '../../src/assets/contactPic.jpg'

export const Contact = () => {
  return (
    <>
     <div className="container-fluid about-section ">
    <div className="container ">
      <h1 className=' text-9xl font-bold text-center py-20 text-white'>About Us</h1>
    </div>
   </div>
   {/* second section  */}
   <div className="container-fluid">
    <div className="container">
    <h1 className='text-4xl font-extrabold pt-4'>Send us a message.</h1>
      <div className="row mt-10 shadow-md">
        <div className="col-md-6">
          <form className='py-10'>
           <div className='py-3'>
           <input className='w-60 h-9 py-3 px-3 border-b-2 outline-none' type="text" name="name" placeholder='Your name*' /> <br />
           </div>
            <div className='py-3'>
            <input  className='w-60 h-9 py-3 px-3 border-b-2 outline-none' type="text" name="email" placeholder='Email*' /> <br />
            </div>

            <div className='py-3'>
            <input className='w-60 h-9 py-3 px-3 border-b-2 outline-none' type="number" name="phone" placeholder='Phone*' /><br />
            </div>

           <div className='py-3'>
           <input className='w-60 h-9 py-3 px-3 border-b-2 outline-none' type="" name="" placeholder='Website*' /> <br />
           </div>

            <div className='py-3'>
            <input className='w-60 h-9 py-3 px-3 border-b-2 outline-none' type="text" name="message" placeholder='Message*'/>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <img className='rounded-2xl' src={contactPic} alt="image" /> 
        </div>
      
      </div>
    </div>
   </div>
    </>
  )
}
