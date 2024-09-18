import React from 'react'
import {Navbarlinks} from "./Navbar"
import {FaUserCircle} from "react-icons/fa"
import { Link } from 'react-router-dom'
export const ResponsiveNav = ({togglemenu,settogglemenu}) => {
    console.log(togglemenu)
  return (
    <div className={`${togglemenu ? "left-0":"-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 px-8 pb-6 pt-16 text-black dark:text-white transition-all duration-500 md:hidden rounded-r-xl shadow-md`}>
        <div className='Navbar__card'>
            {/* top section */}
            <div>
            <div className='flex items-center gap-3'>
                <FaUserCircle size={50}/>
                <div>
                    <h1>Hello, User</h1>
                    <h1 className='text-sm text-slate-500'>Premium user</h1>
                </div>
            </div>
            </div>
            {/* navbarlink section  */}
            <div className='mt-12'>
                <ul className='space-y-5 text-xl'>
                    {Navbarlinks.map((items,index)=>(
                        <li key={index}>
                            <Link to={items.to} 
                            onClick={()=>settogglemenu(false)}
                            className='font-semibold inline-block'>
                                {items.lable}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
