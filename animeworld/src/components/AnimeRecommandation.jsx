import { useQuery } from "@tanstack/react-query"
import Loading from "./Loading";
import AnimeRecommandCard from "./AnimeRecommandCard";
import { useEffect, useRef } from "react";
export default function AnimeRecommandations({id})
{
    const { data:animes, isLoading, isError } = useQuery({
        queryKey : ["Recommand", id],
        queryFn : async function()
        {
            const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/recommendations`)

            if (!response.ok)
            {
                throw new Error("Something went wrong. Try again later");
            }

            const result = await response.json();
            return result.data
        },
        staleTime : 60 * 1000 * 5
    })

    const sliderRef = useRef(null)

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

        const animation = sliderRef.current.animate(
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