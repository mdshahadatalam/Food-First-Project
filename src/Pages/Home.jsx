import React from 'react'
import AboutPic from '../../src/assets/AboutPic.jpg'
import donation from '../../src/assets/donation.png'
import donation2 from '../../src/assets/donation2.png'
import support_icons_4 from '../../src/assets/support_icons_4.png'
import support_icons_5 from '../../src/assets/support_icons_5.png'
import support_icons_6 from '../../src/assets/support_icons_6.png'
import logo from '../../src/assets/logo.jpg'


export const Home = () => {
  return (
   <div className="container-fluid bg-{#ffffff } ">
    <h1 className='text-8xl font-bold py-6 pl-2'>Support</h1>
    <div className="container">
      <div className="row">
      <div className="col-md-6">
     <img className='img-fluid pl-6 '  src={AboutPic} alt="image" />
      </div>
      <div className="col-md-6">
        <p className='head-text'> Ways to Help Us</p>
        <h2 className='text-3xl font-bold my-3'>Support Food First</h2>
        <p className='text-start head-text mx-3' >Food First’s work is made possible by a vast network of donors, supporters, and partners based in the US and globally. This support has allowed us to maintain the strong, critical, and independent voice Food First is known for. There are numerous ways to support Food First and we hope you will consider doing so! <br /> <br />

        Your contributions support our organization’s efforts to combat the root causes of unnecessary hunger and poverty         by delivering critical analysis and education along with community-level food-oriented initiatives. Together, we         are a powerful movement fighting for fairness, access, and affordability of nutritious food for everyone! </p>

        <p className='pt-4'>Choose a way to support us below!</p>
      </div>
      </div>

      {/* second-section  */}

      <h3 className='text-3xl font-bold ml-5 my-4'>Choose a Way to Support Food First</h3>

     <div className="container">
     <div className="row ml-8">
     <div className="col-md-4 hover:bg-slate-100 shadow-md">
        <img className='img-fluid' src={ donation} alt="image" />
        <h1 className='text-1xl font-bold py-2'>One-Time Gift</h1>
        <p className='head-text text-start'>We'll put your tax deductible gift to work right <br /> away to support grassroots movements and <br /> organizers.</p>
      </div>
      <div className="col-md-4  hover:bg-slate-100 shadow-md">
       <img className='img-fluid' src={ donation2} alt="image" />
       <h1  className='text-1xl font-bold py-2'>Monthly Donation</h1>
       <p className='head-text text-start'>For as little as $3 a month you can join our <br /> Sustainer's Circle. This helps Food First plan <br /> ahead and accomplish even more.</p>
      </div>
      <div className="col-md-4 hover:bg-slate-100 shadow-md">
        <img className='img-fluid' src={support_icons_5} alt="image" />
        <h1  className='text-1xl font-bold py-2'>Living Legacy</h1>
        <p className='head-text text-start'>With a legacy donation you can make a much <br /> larger donation than you could afford to give <br /> during your lifetime.</p>
      </div>
    {/* 3rd section  */}
    <div className="col-md-4  hover:bg-slate-100 shadow-md py-1">
      <img src={support_icons_4} alt="image" />
      <h1  className='text-1xl font-bold py-2'>Donating Stock</h1>
      <p className='head-text text-start'>Donating highly appreciated stock allows you to avoid capital gains tax on it.</p>
    </div>
    <div className="col-md-4"></div>
    <div className="col-md-4  hover:bg-slate-100 shadow-md py-1">
      <img src={support_icons_6} alt="image" />
      <h1  className='text-1xl font-bold py-2'>In Honor Of</h1>
      <p className='head-text text-start'>Who do you admire for standing up for what they believe in? Here's your chance to tell them and/or their family members.</p>
    </div>



     </div>
     </div>
    </div>
   </div>
  )
}
