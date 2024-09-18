import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoImg from '../../assets/logo.png'
import {FaCaretDown} from "react-icons/fa"
import {HiMenuAlt1, HiMenuAlt3} from "react-icons/hi"
import { ResponsiveNav } from './ResponsiveNav'
export const Navbarlinks = [
    {lable:"HOME",to:"/"},
    {lable:"BLOGS",to:"/blogs"},
    {lable:"BEST PLACES",to:"/places"},
    {lable:"ABOUT",to:"/about"},
]
export const Navbar = ({handleorderpopup}) => {
    
    const DropdownLinks = [
        {
            name:"Our Services",
            link:"/#services",
        },
        {
            name:"Top Brands",
            link:"/#mobile_brands",
        },
        {
            name:"Location",
            link:"/#location",
        },
    ]
    const [togglemenu,settogglemenu] = useState(false) 
  return (
    <>
    <div className='fixed text-black top-0 right-0 w-full bg-white shadow-md z-[99999]'>
            <div className='bg-gradient-to-r from-primary to-secondary text-white'>
                <div className='container py-[2px] hidden sm:block'>
                    <div className='flex justify-between'>
                        <p>20% off on next booking</p>
                        <p>Mobile No. +91 1234567890</p>                    
                    </div>
                </div>
            </div>
            <div className='container py-3 sm:py-0'>
                <div className='flex justify-between items-center'>
                    {/* logo section */}
                    <div>
                        <Link to='/' onClick={()=> window.scrollTo(0,0)}>
                        <img src={LogoImg} alt='logo' className='h-16' />
                        </Link>
                    </div>
                    {/* desktop navlink section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6'>
                            {Navbarlinks.map((items,index)=>(
                                <li key={index}>
                                    <NavLink to={items.to} activeClassName='active' onClick={()=>window.scrollTo(0,0)}>
                                        {items.lable}
                                    </NavLink>
                                </li>
                            ))}
                            <li className='py-4 relative group'>
                                <div className='dropdown flex items-center'>
                                    <span>QUICK LINKS</span>
                                    <span><FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/></span>
                                </div>
                                <div className='absolute -left-2 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white'>
                                    <ul>
                                        {DropdownLinks.map((data,index)=>(
                                            <li key={index}>
                                                <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-5'>
                        <button onClick={()=>handleorderpopup(true)} className='bg-gradient-to-r from-primary hover:from-secondary to-secondary hover:to-primary px-3 py-2 rounded-full transition-all duration-500 text-white'>Book Now</button>
                        <div className='md:hidden' onClick={()=>settogglemenu(!togglemenu)}>
                            {
                                togglemenu ? (<HiMenuAlt3 className='cursor-pointer transition-all' size={30}/>):(<HiMenuAlt1 className='cursor-pointer transition-all' size={30}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <ResponsiveNav togglemenu = {togglemenu} settogglemenu={settogglemenu}/>
    </div>
    </>
  )
}
