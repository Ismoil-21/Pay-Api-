import React from 'react'
import api from '../assets/api.png'
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';


import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#1B262F] py-[30px] mt-[100px]'>
      <div className="container max-w-[1200px] m-auto sm:flex justify-between px-10"> 
        <nav className='text-center sm:flex gap-10 items-center'>
          <NavLink className={"flex justify-center"} to={"/"}> <img src={api} alt=""/></NavLink>
          <div className="flex flex-col sm:flex-row gap-4 items-center my-3.5">
            <NavLink className={"text-[#c6c6c6] transform transition-transform hover:scale-110 hover:text-[#FBFCFE] duration-300 "} to={"/pricing"}>Pricing</NavLink>
            <NavLink className={"text-[#c6c6c6] transform transition-transform hover:scale-110 hover:text-[#FBFCFE] duration-300 "} to={"/about"}>About</NavLink>
            <NavLink className={"text-[#c6c6c6] transform transition-transform hover:scale-110 hover:text-[#FBFCFE] duration-300 "} to={"/contact"}>Contact</NavLink>
          </div>
        </nav>

        <div className='flex gap-5 items-center my-4 justify-center'>
          <a href="https://www.facebook.com/" target='blank'> <img src={facebook} alt="facebook" /> </a>
          <a href="https://twitter.com/" target='blank'> <img src={twitter} alt="twitter" /> </a>
          <a href="https://www.linkedin.com/" target='blank'> <img src={linkedin} alt="linkedin" /> </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
