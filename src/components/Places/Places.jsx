import img1 from "../../assets/places/boat.jpg";
import img2 from "../../assets/places/tajmahal.jpg";
import img3 from "../../assets/places/water.jpg";
import img4 from "../../assets/places/place4.jpg";
import img5 from "../../assets/places/place5.jpg";
import img6 from "../../assets/places/place6.jpg";
import { PlacesCard } from "./PlacesCard";

export const Places = ({handleorderpopup}) => {
    const PlacesData = [
        {
            img:img1,
            title:"Boat tour",
            location:"USA",
            description:"lorem ipusm dolor sit amet consectetur adipisiction elite.",
            price:100,
            type:"Cultural Relax"
        },
        {
            img:img2,
            title:"Taj Mahal",
            location:"INDIA",
            description:"lorem ipusm dolor sit amet consectetur adipisiction elite.",
            price:6700,
            type:"Cultural Relax"
        },
        {
            img:img3,
            title:"Underwater",
            location:"USA",
            description:"lorem ipusm dolor sit amet consectetur adipisiction elite.",
            price:100,
            type:"Cultural Relax"
        },
        {
            img:img4,
            title:"Boat tour",
            location:"USA",
            description:"lorem ipusm dolor sit amet consectetur adipisiction elite.",
            price:100,
            type:"Cultural Relax"
        },
        {
            img:img5,
            title:"Boat tour",
            location:"USA",
            description:"lorem ipusm dolor sit amet consectetur adipisiction elite.",
            price:100,
            type:"Cultural Relax"
        },
        {
            img:img6,
            title:"Boat tour",
            location:"USA",
            description:"lorem ipusm dolor sit amet consectetur adipisiction elite.",
            price:100,
            type:"Cultural Relax"
        }
    ]
  return (
    <div data-aos="fade-right" className="bg-gray-50 py-10">
        <div className="container">
            <h1 className="my-8 border-l-8 border-primary py-2 pl-2 text-2xl font-bold">Best Places To Visit</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {
            PlacesData.map((items,index)=>(
                    <PlacesCard key={index} {...items} handleorderpopup={handleorderpopup}/>
            ))
        }
            </div>
        </div>
    </div>
  )
}
