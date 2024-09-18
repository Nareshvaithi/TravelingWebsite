import React from 'react'
import { BlogsCard } from './BlogsCard'
import img1 from "../../assets/places/boat.jpg";
import img2 from "../../assets/places/tajmahal.jpg";
import img3 from "../../assets/places/water.jpg";
import img4 from "../../assets/places/place4.jpg";
import img5 from "../../assets/places/place5.jpg";
import img6 from "../../assets/places/place6.jpg";
export const BlogsComp = () => {
    const blogsdetails = [
        {
            id:1,
            img:img1,
            title:"The Top best places to visit in india",
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Maiores repellat esse nemo cumque reiciendis perspiciatis natus voluptas! 
             Quos totam laborum sit cum aliquid unde dolorem, sapiente nisi, ipsum maiores 
             praesentium vero reprehenderit, atque illum inventore quibusdam repellendus 
             voluptatibus nulla minus ut consectetur animi asperiores ipsa! Ipsa minima 
             quisquam nesciunt suscipit ipsam modi eligendi, sint a quae illum dolore itaque, 
             possimus fugiat consectetur mollitia quam laudantium voluptate aut deserunt? Animi 
             quis officia provident aut illo cupiditate libero, nulla beatae, accusamus quidem deserunt 
             blanditiis sunt labore laborum molestias. Nemo voluptatem alias repellendus, repellat odio 
             consequuntur qui dolorem, eligendi vel animi consequatur aliquid! Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Obcaecati similique unde numquam facilis at maiores deserunt distinctio voluptas 
             nemo! Cum voluptas itaque accusamus consequatur quae, dolores, sed vitae voluptatum obcaecati assumenda
              repellendus quas ea consectetur voluptate labore excepturi voluptates amet est earum! Dolor odio quo doloremque, 
              nulla in illum ab repellat, temporibus modi quia quisquam ex ipsa tenetur beatae numquam, dignissimos vitae
              deserunt laborum voluptates. Error quas rerum asperiores nam debitis odio inventore eligendi cumque neque 
              dolorum libero, possimus consequuntur quo quibusdam numquam ipsum, dicta praesentium est incidunt voluptas mollitia,
              suscipit officiis. Laudantium voluptatem voluptates eius, illum quisquam illo pariatur!`,
              author:"John Doe",
              date:"April,2022"
        },
        {
            id:2,
            img:img2,
            title:"Top places to visit in US",
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Maiores repellat esse nemo cumque reiciendis perspiciatis natus voluptas! 
             Quos totam laborum sit cum aliquid unde dolorem, sapiente nisi, ipsum maiores 
             praesentium vero reprehenderit, atque illum inventore quibusdam repellendus 
             voluptatibus nulla minus ut consectetur animi asperiores ipsa! Ipsa minima 
             quisquam nesciunt suscipit ipsam modi eligendi, sint a quae illum dolore itaque, 
             possimus fugiat consectetur mollitia quam laudantium voluptate aut deserunt? Animi 
             quis officia provident aut illo cupiditate libero, nulla beatae, accusamus quidem deserunt 
             blanditiis sunt labore laborum molestias. Nemo voluptatem alias repellendus, repellat odio 
             consequuntur qui dolorem, eligendi vel animi consequatur aliquid! Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Obcaecati similique unde numquam facilis at maiores deserunt distinctio voluptas 
             nemo! Cum voluptas itaque accusamus consequatur quae, dolores, sed vitae voluptatum obcaecati assumenda
              repellendus quas ea consectetur voluptate labore excepturi voluptates amet est earum! Dolor odio quo doloremque, 
              nulla in illum ab repellat, temporibus modi quia quisquam ex ipsa tenetur beatae numquam, dignissimos vitae
              deserunt laborum voluptates. Error quas rerum asperiores nam debitis odio inventore eligendi cumque neque 
              dolorum libero, possimus consequuntur quo quibusdam numquam ipsum, dicta praesentium est incidunt voluptas mollitia,
              suscipit officiis. Laudantium voluptatem voluptates eius, illum quisquam illo pariatur!`,
              author:"John Doe",
              date:"April,2022"
        },
        {
            id:3,
            img:img3,
            title:"Top places to visit in Japan",
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Maiores repellat esse nemo cumque reiciendis perspiciatis natus voluptas! 
             Quos totam laborum sit cum aliquid unde dolorem, sapiente nisi, ipsum maiores 
             praesentium vero reprehenderit, atque illum inventore quibusdam repellendus 
             voluptatibus nulla minus ut consectetur animi asperiores ipsa! Ipsa minima 
             quisquam nesciunt suscipit ipsam modi eligendi, sint a quae illum dolore itaque, 
             possimus fugiat consectetur mollitia quam laudantium voluptate aut deserunt? Animi 
             quis officia provident aut illo cupiditate libero, nulla beatae, accusamus quidem deserunt 
             blanditiis sunt labore laborum molestias. Nemo voluptatem alias repellendus, repellat odio 
             consequuntur qui dolorem, eligendi vel animi consequatur aliquid! Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Obcaecati similique unde numquam facilis at maiores deserunt distinctio voluptas 
             nemo! Cum voluptas itaque accusamus consequatur quae, dolores, sed vitae voluptatum obcaecati assumenda
              repellendus quas ea consectetur voluptate labore excepturi voluptates amet est earum! Dolor odio quo doloremque, 
              nulla in illum ab repellat, temporibus modi quia quisquam ex ipsa tenetur beatae numquam, dignissimos vitae
              deserunt laborum voluptates. Error quas rerum asperiores nam debitis odio inventore eligendi cumque neque 
              dolorum libero, possimus consequuntur quo quibusdam numquam ipsum, dicta praesentium est incidunt voluptas mollitia,
              suscipit officiis. Laudantium voluptatem voluptates eius, illum quisquam illo pariatur!`,
              author:"John Doe",
              date:"April,2022"
        },
        {
            id:4,
            img:img4,
            title:"The Top best places to visit in china",
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Maiores repellat esse nemo cumque reiciendis perspiciatis natus voluptas! 
             Quos totam laborum sit cum aliquid unde dolorem, sapiente nisi, ipsum maiores 
             praesentium vero reprehenderit, atque illum inventore quibusdam repellendus 
             voluptatibus nulla minus ut consectetur animi asperiores ipsa! Ipsa minima 
             quisquam nesciunt suscipit ipsam modi eligendi, sint a quae illum dolore itaque, 
             possimus fugiat consectetur mollitia quam laudantium voluptate aut deserunt? Animi 
             quis officia provident aut illo cupiditate libero, nulla beatae, accusamus quidem deserunt 
             blanditiis sunt labore laborum molestias. Nemo voluptatem alias repellendus, repellat odio 
             consequuntur qui dolorem, eligendi vel animi consequatur aliquid! Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Obcaecati similique unde numquam facilis at maiores deserunt distinctio voluptas 
             nemo! Cum voluptas itaque accusamus consequatur quae, dolores, sed vitae voluptatum obcaecati assumenda
              repellendus quas ea consectetur voluptate labore excepturi voluptates amet est earum! Dolor odio quo doloremque, 
              nulla in illum ab repellat, temporibus modi quia quisquam ex ipsa tenetur beatae numquam, dignissimos vitae
              deserunt laborum voluptates. Error quas rerum asperiores nam debitis odio inventore eligendi cumque neque 
              dolorum libero, possimus consequuntur quo quibusdam numquam ipsum, dicta praesentium est incidunt voluptas mollitia,
              suscipit officiis. Laudantium voluptatem voluptates eius, illum quisquam illo pariatur!`,
              author:"John Doe",
              date:"April,2022"
        },
        {
            id:5,
            img:img5,
            title:"The Top best places to visit in dubai",
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Maiores repellat esse nemo cumque reiciendis perspiciatis natus voluptas! 
             Quos totam laborum sit cum aliquid unde dolorem, sapiente nisi, ipsum maiores 
             praesentium vero reprehenderit, atque illum inventore quibusdam repellendus 
             voluptatibus nulla minus ut consectetur animi asperiores ipsa! Ipsa minima 
             quisquam nesciunt suscipit ipsam modi eligendi, sint a quae illum dolore itaque, 
             possimus fugiat consectetur mollitia quam laudantium voluptate aut deserunt? Animi 
             quis officia provident aut illo cupiditate libero, nulla beatae, accusamus quidem deserunt 
             blanditiis sunt labore laborum molestias. Nemo voluptatem alias repellendus, repellat odio 
             consequuntur qui dolorem, eligendi vel animi consequatur aliquid! Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Obcaecati similique unde numquam facilis at maiores deserunt distinctio voluptas 
             nemo! Cum voluptas itaque accusamus consequatur quae, dolores, sed vitae voluptatum obcaecati assumenda
              repellendus quas ea consectetur voluptate labore excepturi voluptates amet est earum! Dolor odio quo doloremque, 
              nulla in illum ab repellat, temporibus modi quia quisquam ex ipsa tenetur beatae numquam, dignissimos vitae
              deserunt laborum voluptates. Error quas rerum asperiores nam debitis odio inventore eligendi cumque neque 
              dolorum libero, possimus consequuntur quo quibusdam numquam ipsum, dicta praesentium est incidunt voluptas mollitia,
              suscipit officiis. Laudantium voluptatem voluptates eius, illum quisquam illo pariatur!`,
              author:"John Doe",
              date:"April,2022"
        },
        {
            id:6,
            img:img6,
            title:"The Top best places to visit in russia",
            description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Maiores repellat esse nemo cumque reiciendis perspiciatis natus voluptas! 
             Quos totam laborum sit cum aliquid unde dolorem, sapiente nisi, ipsum maiores 
             praesentium vero reprehenderit, atque illum inventore quibusdam repellendus 
             voluptatibus nulla minus ut consectetur animi asperiores ipsa! Ipsa minima 
             quisquam nesciunt suscipit ipsam modi eligendi, sint a quae illum dolore itaque, 
             possimus fugiat consectetur mollitia quam laudantium voluptate aut deserunt? Animi 
             quis officia provident aut illo cupiditate libero, nulla beatae, accusamus quidem deserunt 
             blanditiis sunt labore laborum molestias. Nemo voluptatem alias repellendus, repellat odio 
             consequuntur qui dolorem, eligendi vel animi consequatur aliquid! Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Obcaecati similique unde numquam facilis at maiores deserunt distinctio voluptas 
             nemo! Cum voluptas itaque accusamus consequatur quae, dolores, sed vitae voluptatum obcaecati assumenda
              repellendus quas ea consectetur voluptate labore excepturi voluptates amet est earum! Dolor odio quo doloremque, 
              nulla in illum ab repellat, temporibus modi quia quisquam ex ipsa tenetur beatae numquam, dignissimos vitae
              deserunt laborum voluptates. Error quas rerum asperiores nam debitis odio inventore eligendi cumque neque 
              dolorum libero, possimus consequuntur quo quibusdam numquam ipsum, dicta praesentium est incidunt voluptas mollitia,
              suscipit officiis. Laudantium voluptatem voluptates eius, illum quisquam illo pariatur!`,
              author:"John Doe",
              date:"April,2022"
        }
    ]
  return (
    <div>
        <div data-aos="fade-up" className='container'>
            <h1 className="my-8 border-l-8 border-primary py-2 pl-2 text-2xl font-bold">Our latest Blogs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    blogsdetails.map((items,index)=>(
                        <BlogsCard key={index} {...items}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
