import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonaldata = [
  {
    id:1,
    name:"Samuel",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit id, earum sunt totam nam tempora nesciunt placeat repellat?",
    img:"https://picsum.photos/101/101",
  },
  {
    id:2,
    name:"John Doe",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit id, earum sunt totam nam tempora nesciunt placeat repellat?",
    img:"https://picsum.photos/102/102",
  },
  {
    id:3,
    name:"Smith",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit id, earum sunt totam nam tempora nesciunt placeat repellat?",
    img:"https://picsum.photos/103/103",
  },
  {
    id:4,
    name:"Thomas Shelby",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit id, earum sunt totam nam tempora nesciunt placeat repellat?",
    img:"https://picsum.photos/104/104",
  },
]

export const Testimonials = () => {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive:[
      {
        breakpoint: 1000,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        },
      },
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='py-10'>
        <div className='container'>
        {/* header-section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
            testimonal
          </p>
          <h1 className='text-3xl font-bold'>
            Testmonial
          </h1>
          <p className='text-xs text-gray-400'>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit id, earum sunt totam nam tempora nesciunt placeat repellat?
          </p>
        </div>
        {/* testimonial-section */}
       <Slider {...settings}>
        {
          testimonaldata.map((items)=>(
            <div key={items.id} className='my-6'>
              <div className='relative flex flex-col justify-center items-center text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/20'>
                <img src={items.img} className='rounded-full block mx-auto' alt={items.name} />
                <h1 className='font-bold text-xl'>{items.name}</h1>
                <p className='text-gray-500 text-sm'>{items.text}</p>
                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
              </div>
            </div>
          ))
        }
       </Slider>
        </div>
    </div>
  )
}
