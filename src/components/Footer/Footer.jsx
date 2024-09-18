import React from 'react';
import Footerlogo from "../../assets/logo.png"
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt
} from "react-icons/fa";
import Footervideo from "../../assets/video/footer.mp4";
import {Link} from "react-router-dom";
import { Navbarlinks } from '../Navbar/Navbar';
export const Footer = () => {
  return (
    <div className='py-10 relative overflow-hidden'>
       <video autoPlay loop muted className='absolute right-0 top-0 h-full w-full object-cover z-[-1]'>
          <source src={Footervideo} type='video/mp4'/>
        </video>
        <div className='container'>
          <div className='grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl'>
          <div className='py-8 px-4'>
            <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
              <img src={Footerlogo} alt="" className='max-h-[60px]'/>
            </h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus inventore recusandae modi rerum et dolore facere voluptatibus placeat quia!</p> <br />
            <div className='flex items-center gap-3 mt-3'>
              <FaLocationArrow/>
              <p>Puducherry-Puducherry-INDIA</p>
            </div>
            <div className='flex items-center gap-3 mt-3'>
              <FaMobileAlt/>
              <p>+91 12345-12345</p>
            </div>
            {/* social-media */}
            <div>
              <div className='flex items-center gap-3 mt-6'>
                <a href="#">
                  <FaInstagram size={30}/>
                </a>
                <a href="#">
                  <FaFacebook size={30}/>
                </a>
                <a href="#">
                  <FaLinkedin size={30}/>
                </a>
              </div>
            </div>
          </div>
          {/* footer-links */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            {/* footer-links first-col */}
            <div>
              <div className='py-8 px-4'>
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                  Important Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {
                    Navbarlinks.map((items,index)=>(
                     <li key={index} className='cursor-pointer hover:translate-x-2 duration-300 hover:!text-primary space-x-1 text-gray-700'>
                       <Link to={items.to}>
                        <span>&#11162;</span>
                        <span>{items.lable}</span>
                      </Link>
                     </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            {/* footer-links second-col */}
            <div>
              <div className='py-8 px-4'>
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                  Important Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {
                    Navbarlinks.map((items,index)=>(
                     <li key={index} className='cursor-pointer hover:translate-x-2 duration-300 hover:!text-primary space-x-1 text-gray-700'>
                       <Link to={items.to}>
                        <span>&#11162;</span>
                        <span>{items.lable}</span>
                      </Link>
                     </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div>
              {/* footer-links third-col */}
              <div className='py-8 px-4'>
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>
                  Important Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {
                    Navbarlinks.map((items,index)=>(
                     <li key={index} className='cursor-pointer hover:translate-x-2 duration-300 hover:!text-primary space-x-1 text-gray-700'>
                       <Link to={items.to} onClick={()=>window.scrollTo(0,0)}>
                        <span>&#11162;</span>
                        <span>{items.lable}</span>
                      </Link>
                     </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          </div>
          {/* footer-copy-right-section */}
          <div>
            <div className='text-center py-5 border-t-2 border-red-500/50 bg-primary text-white'>
              @copyright 2024 All rights reserved || made with ❤️ by Naresh vaithi
            </div>
          </div>
        </div>
    </div>
  )
}
