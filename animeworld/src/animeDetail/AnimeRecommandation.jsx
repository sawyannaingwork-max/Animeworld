import useAnimeDetailQuery from "../custom/useAnimeDetailQuery";
import Loading from "../components/Loading";
import AnimeRecommandCard from "../card/AnimeRecommandCard";
import { useEffect, useRef } from "react";
export default function AnimeRecommandations({id})
{
    const url = `https://api.jikan.moe/v4/anime/${id}/recommendations`
    const { data:animes, isLoading, isError } = useAnimeDetailQuery(id, "Recommand", url)

    const sliderRef = useRef(null)

    let animation;

    useEffect(function()
    {
        if (!sliderRef.current)
        {
            return;
        }

        //getting parent
        const parent = sliderRef.current.parentElement;

        // Getting the chldren count 
        const count = sliderRef.current.children.length;
        const move = (150 + 20) * count - 170;

        animation = sliderRef.current.animate(
            [
                {"transform" : `translateX(-${move}px)`}
            ],
            {
                duration : 1000 * count,
                easing : "linear",
                iterations : Infinity,
                direction : "alternate"
            }
        )

        function play()
        {
            animation.play();
        }

        function pause()
        {
            animation.pause();
        }

        parent.addEventListener("mouseenter", pause)

        parent.addEventListener("mouseleave", play)

        return function()
        {
            parent.removeEventListener("mouseenter", pause);
            parent.removeEventListener("mouseleave", play);
        }

    }, [animes])

    

    if (isLoading)
    {
        return <Loading />
    }

    if (isError)
    {
        return <p>Something Went Wrong.Try again later.</p>
    }


    if (animes.length === 0)
    {
        return;
    }
    
    return(
        <div>
            <h2 className="text-2xl font-inter text-text my-2">Recommandations</h2>
            <div className="overflow-hidden">
                <div ref={sliderRef} className="flex gap-5 pointer-events-auto">
                    {animes.map(function(anime)
                    {
                        return (
                            <AnimeRecommandCard 
                                key = {anime.entry.mal_id}
                                anime = {anime}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}