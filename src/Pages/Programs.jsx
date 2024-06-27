import React from 'react'
import { useLocation } from 'react-router-dom'
import prog1 from '../../src/assets/prog1.jpg'
import prog2 from '../../src/assets/prog2.jpg'

export const Programs = () => {
  // const Location = useLocation()
  // let path = Location.pathname.split("/")[1];

  return (
    // <div className='text-black'>This is a {path} </div>
    <>
    <div className="container-fluid pt-4">
      <div className="container">
        <div className="row ">
          <div className="col-md-6">
           <div className='pl-4'>
           <p className='text-[#667687] text-lg'>Programs</p>
            <h1 className='text-4xl font-extrabold py-3'>FF Fellows Program</h1>
            <p className='text-[#667687] text-lg '>A talented group of early career thought leaders, who are dedicating their  careers to supporting grassroots struggles and advancing the global <br /> movement for food sovereignty, have been selected for the 2022-2023 <br /> cohort of Food First Fellows.</p>

            <p className='text-[#667687] pt-4'>Please meet the <span className='text-black text-bold'> 2022-2023 cohort of Food First Fellows.</span> </p>
           </div>
          </div>
          <div className="col-md-6">
            <img src={prog1} alt="" />
          </div>
        </div>
      
      {/* section2 */}
      
      <div className="row pt-5 mb-5">
        <div className="col-md-6">
       <div className='pl-4'>
       <p className='text-[#667687] text-lg'>Programs</p>
            <h1 className='text-4xl font-extrabold py-3'>Seed + Grant Program​</h1>
            <p className='text-[#667687] text-lg '>Food First offers small seed grants to individuals and organizations to help plan, initiate, and pilot community-based food justice and sovereignty projects.</p>

            <p className='text-[#667687] pt-4'>Application period will open Spring 2023.</p>
            <p className='text-[#667687] pt-4'>Learn more about the <span className='text-black text-bold'> Seed + Grant Program.</span> </p>
       </div>
        </div>
        <div className="col-md-6">
          <img src={prog2} alt="" />
        </div>
      </div>
      </div>
    </div>
    </>
  )
}
