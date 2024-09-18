import React, { useState } from 'react'
import BGvideo from "../assets/video/main.mp4"
import { Hero } from '../components/Hero/Hero'
import bannerimg1 from "../assets/cover-women.jpg"
import bannerimg2 from "../assets/travel-cover2.jpg"
import { Places } from '../components/Places/Places';
import { BannerImg} from '../components/Bannerimg/BannerImg';
import { Blogs } from './Blogs';
import { Banner } from '../components/Banner/Banner';
import { Testimonials } from '../components/testimonial/Testimonials'
import { Popup } from '../components/Popup/Popup'

export const Home = () => {
  const [orderpopup, setorderpopup] = useState(false);
  function handleorderpopup(){
    setorderpopup(!orderpopup)
  } 
  return (
    <>
    <div>
      <div className='relative h-[700px]'>
        <video autoPlay loop muted className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
          <source src={BGvideo} type='video/mp4'/>
        </video>
        <Hero/>
      </div>
      <Places handleorderpopup={handleorderpopup}/>
      <BannerImg img={bannerimg1}/>
      <Blogs/>
      <Banner/>
      <BannerImg img={bannerimg2}/>
      <Testimonials/>
      <Popup orderpopup={orderpopup} setorderpopup={setorderpopup}/>
    </div>
    </>
  )
}
