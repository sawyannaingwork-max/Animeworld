import saitama from "./../assets/saitama.png"
import sukuna from "./../assets/sukuna.png"
import gojo from "./../assets/gojo.png"
import hinata from "./../assets/hinata.png"
import makima from "./../assets/makima.png"
import fubuki from './../assets/fubuki.png'

import ImageCard from "./../card/ImageCard"
import { useState } from "react"

export default function Home()
{
    const [img, setImg] = useState(saitama)

    const images = [saitama, sukuna, gojo, hinata, makima, fubuki];

    // Crating list of image
    const imageList = images.map(function(img, index)
    {
        return (
            <ImageCard 
                key = {index}
                img = {img}
                handleClick={() => setImg(img)}
            />
        )
    })
    return (
        <div className="w-[90%] max-w-[900px] mx-auto py-5 text-center">
            <h1 className="text-3xl text-text">All Your Favorite Anime in One Place</h1>
            <p className="text-primary py-2">
                A place where you can dive in the world of anime, from recommandations to filtering. 
            </p>
            <p className="text-primary">
                This website is powered by <a className="text-secondary" href="#">Jikan Api.</a>
            </p>
            <a href="#" className="primary-btn">See All Popular Animes</a>
    
            <div className="relative w-[90%] max-w-[450px] mx-auto">
                <div className="drop-1"></div>
                <img className="my-4 w-[400px] h-[300px] object-contain object-center mx-auto" src={img} alt="Image" />
                <div className="drop-2"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                {imageList}
            </div>
            
        </div>
    )
}