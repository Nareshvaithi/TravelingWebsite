import React from 'react'
import {Link} from "react-router-dom"
export const BlogsCard = ({img,title,date,author,description}) => {
  return (
    <Link to={`/blogs/${title}`} onClick={()=>window.scrollTo(0, 0)} state={{img,title,date,author,description}}>
    <div className='p-5 shadow-lg transition-all duration-500 hover:shadow-xl'>
        <div className='overflow-hidden'>
            <img src={img} alt={title} className='mx-auto h-[250px] w-full object-cover transition-all duration-700 hover:skew-x-2 hover:scale-110' />
        </div>
        <div className='flex items-center justify-between pt-2 text-slate-600'>
            <p>{date}</p>
            <p>by {author}</p>
        </div>
        <div className='py-3 space-y-2'>
            <h1 className='line-clamp-1 font-bold'>{title}</h1>
            <p className='line-clamp-2'>{description}</p>
        </div>
    </div>
    </Link>
  )
}
