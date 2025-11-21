import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function AnimeCard({anime})
{
    // State for playing trailer
    const [isPlay, setIsPlay] = useState(false);

    let trailerContent;

    if (isPlay)
    {
        trailerContent = 
            <iframe 
                src={anime.trailer.embed_url} 
                title={anime.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
                frameborder="0">
            </iframe>
        
    }

    else 
    {
        trailerContent = 
            <>
                <img 
                    src={anime.images?.jpg?.image_url} 
                    alt={anime.title} 
                    className="rounded-md w-full h-full object-cover object-center shadow-cardShadow"
                />
                {
                    anime.trailer.embed_url && 
                    <button 
                        className="absolute top-[50%] left-[50%] text-3xl translate-x-[-50%] translate-y-[-50%]"
                        onClick = {() => setIsPlay(true)}
                    >
                        ▶
                    </button>
                }
            </>
        
    }

    return (
        <section>
            <div className="relative h-[250px]">
                {trailerContent}
            </div>
            <h2 className="text-xl text-primary py-2">{anime.title_english}</h2>
            <div className="flex justify-between mb-2">
                <span className="text-secondary text-sm font-roboto">Popularity #{anime.popularity}</span>
                <span className="text-secondary text-sm font-roboto">Rank #{anime.rank}</span>
            </div>
            <span className="bg-text opacity-70 rounded-md py-1 px-2">
                {anime.status}
            </span>
            <NavLink to={`/anime/${anime.mal_id}`} className="hover:scale-[1.05] duration-300 ease-linear font-itim text-text mx-3 bg-[linear-gradient(45deg,#00E0FF,#FF3D8F)] px-2 py-1 rounded-md">Look Detail</NavLink>
        </section>
    )
}