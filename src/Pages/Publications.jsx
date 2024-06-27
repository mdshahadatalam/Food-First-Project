import React from 'react'
import oreg from '../../src/assets/oreg.jpg'
import pub1 from '../../src/assets/pub1.png'
import pub2 from '../../src/assets/pub2.jpg'
import pub3 from '../../src/assets/pub3.jpg'

export const Publications = () => {
  return (
    <>
     <div className="container-fluid about-section ">
    <div className="container ">
      <h1 className=' text-9xl font-bold text-center py-20 text-white'>Publications</h1>
    </div>
   </div>
   {/* secondSection */}
   <div className="container-fluid pt-12">
    <div className="container">
     <p className='text-center py-5 text-xl text-[#667687] '>Here at Food First our rich history of producing publications that shape the academic and inform the political discourse regarding food sovereignty is very important to us. Please a take moment to review some of our recent publications and video featur</p>
    </div>
   </div>

   {/* 3rdSection  */}
   <div className="container-fluid">
    <div className="container">
      <h1 className='text-3xl font-extrabold'>News and Views</h1>
      <div className="row">
       <div className="col-md-6">
        <div className='FF-News w-[35rem]  h-[32rem] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250'>
         <h2 className='text-2xl text-white font-extrabold translate-y-96 translate-x-5'>FF News and Views – Nov 2023</h2>
        </div>
       </div>
       <div className="col-md-6 ">
          <div className="vies1-bg w-96 h-60 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250">
            <h2 className='text-md text-white font-extrabold translate-y-44 translate-x-5' >FF News and Views – Oct 2023</h2> 
            </div>
          <div className="vies2-bg w-96 h-60 rounded-lg mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250">
            <h2 className='text-md text-white font-extrabold translate-y-44 translate-x-5'>FF News and Views – Aug 2023</h2>
          </div>
         </div>
      </div>
    </div>
   </div>
   {/* 4th Section  */}
   <div className="container-fluid mt-16">
    <div className="container">
    <h1 className='text-4xl font-extrabold'>Featured Video</h1>
    <p className='text-[#667687] font-bold py-4'>May 26, 2022 – Rise Up, Scale Up Listening Lab, Part 4</p>
    <div className="w-full h-128">
   <iframe 
    width="100%" 
    height="100%" 
    src="https://www.youtube.com/embed/23F9kQdJldY?si=b1KNcC1fHidDoxHr" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
  </iframe>
  </div>
    <h1 className='py-4 text-lg'>Watch Food First’s latest videos.</h1>
    </div>
   </div>

   {/* 5th section  */}
   <div className="container-fluid mt-6">
    <div className="container">
    <h1 className='text-4xl font-extrabold pb-9'>Subscribe to the Food First News and Views Newsletter</h1>
    <form className='text-[#667687] text-lg'>
      <h1 className='py-4'>*First Name:</h1>
      <input className='px-4 outline-none' type=" text" name="first name" placeholder='Enter first name' />
      <hr />
      <h1 className='py-4'>*Last Name:</h1>
      <input className='px-4 outline-none' type="text" name=" last name" placeholder='Enter last name' />
      <hr />
      <h1 className='py-4'>*Email:</h1>
      <input className='px-4 outline-none' type="text" name=" Email" placeholder='Enter email' />
      <hr />
      <button className='bg-black text-white w-20 h-11 rounded-3xl text-sm font-bold mt-3 mb-16'>GO</button>
    </form>
    </div>
   </div>
    </>
  )
}
