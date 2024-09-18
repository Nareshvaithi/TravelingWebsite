import React from 'react'
import { Location } from '../components/location/Location'
export const About = () => {
  return (
    <div className='container pt-14'>
      <div className='py-10'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
        About Us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum at eveniet placeat quo cum ducimus sunt quod modi? Iure officia magnam dolore, iste cupiditate ut ipsum in repellat necessitatibus suscipit animi ullam praesentium ipsa tenetur illum. Beatae voluptate ab, aut reprehenderit quas corrupti, quasi vitae obcaecati soluta ratione dolores itaque et nobis eligendi commodi magnam incidunt, laboriosam nulla illo modi.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nobis libero aut ipsum reiciendis ab impedit? Dicta consequatur temporibus, totam velit sint amet odio ipsam ducimus quam! Ex nulla recusandae tempora hic animi, explicabo laboriosam, amet, voluptate vel quaerat exercitationem.
        </p>
      </div>
      <Location/>
    </div>
  )
}
