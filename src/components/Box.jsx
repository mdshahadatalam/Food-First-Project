import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/logo.jpg'


export const Box = () => {
  return (
    <div className="navbar">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/About"}>About</Link></li>
        <li><Link to={"/Programs"}>Programs</Link></li>
        <li><Link to={"/Publications"}>Publications</Link></li>
        <li><Link to={"/Contact"}>Contact</Link></li>
        </ul>
      </div>
      <a className=" text-xl"><img className='w-22 h-10' src={logo} alt="logo" /></a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 font-bold ">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/About"}>About</Link></li>
        <li><Link to={"/Programs"}>Programs</Link></li>
        <li><Link to={"/Publications"}>Publications</Link></li>
        <li><Link to={"/Contact"}>Contact</Link></li>
         
      </ul>
    </div>
     <button className='bg-black text-white rounded-md text-sm font-bold py-2 px-6 '> Donate</button>
     
  </div>
  )
}
