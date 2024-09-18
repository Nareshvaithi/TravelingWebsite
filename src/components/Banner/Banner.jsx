import React from 'react';
import Travelbox from "../../assets/travelbox.png";
import {MdFlight,MdLocalHotel} from "react-icons/md";
import {IoIosWifi} from "react-icons/io"
import {IoFastFoodSharp} from "react-icons/io5"

export const Banner = () => {
  return (
    <div className='min-h-[550px] bg-gray-300 flex items-center'>
        <div className='min-h-[550] flex justify-center items-center backdrop-blur-xl py-12'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    {/* image section */}
                    <div>
                        <img data-aos="flip-up" src={Travelbox} alt="" className='max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,1)] object-cover'/>
                    </div>
                    {/* text-content-section */}
                    <div>
                        <h1 data-aos="fade-up" className='text-3xl font-bold sm:text-4xl'>Explore all corner  of the world with us</h1>
                        <p className='text-sm text-gray-500 tracking-wider leading-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, quis autem? Natus a perspiciatis odit tempore suscipit distinctio dicta quia repudiandae, id, officia rerum ab sint eius tenetur similique.</p>
                        <div data-aos="zoom-in">
                            <div className='space-y-4 grid grid-cols-2'>
                                <div className='flex items-center gap-4'>
                                    <MdFlight className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-300'/>
                                    <p>Flight</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <MdLocalHotel className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-300'/>
                                    <p>Hotel</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <IoIosWifi className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-300'/>
                                    <p>WiFi</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <IoFastFoodSharp className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-300'/>
                                    <p>food</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
