import React from 'react'
import { useLocation } from 'react-router-dom';
import { BlogsComp } from '../components/Blogs/BlogsComp';

export const BlogsDetails = () => {
  const location = useLocation();
  console.log(location,"useLocation Hook")
  const {img,title,date,author,description} = location.state;
  return (
    <div className='pt-20 min-h-[550px]'>
      <div className='h-[400px] overflow-hidden'>
        <img src={img} alt={title} className='mx-auto h-[400px] w-full object-cover transition duration-700 hover:scale-110'/>       
      </div>
      <div className='container pb-14'>
        <p className='text-slate-600 text-sm py-3'>
          {" "}
          written by {author} on data {date}
        </p>
        <h1 className='text-2xl font-semibold mb-10'>
            {title}
        </h1>
        <p className=''>
          {description}
        </p>

      </div>
      <BlogsComp/>
    </div>
  )
}
