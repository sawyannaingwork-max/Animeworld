import { useQuery } from "@tanstack/react-query"
import Loading from "./Loading";
import { useState } from "react";
import AnimeEpisodeCard from "./AnimeEpisodeCard";
import { Activity } from "react";

export default function AnimeEpisodeList({id})
{
    const [page, setPage] = useState(1)
    const [isShow, setIsShow] = useState(false);
    const {data, isLoading, isError} = useQuery({
        queryKey : ["AnimeEpisodes", id, page],
        queryFn : async function()
        {
            const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/episodes?page=${page}`)

            if (!response.ok)
            {
                throw new Error("Error")
            }

            const result = await response.json();
            return result;

        },
        staleTime : Infinity
    })
    
    if (isLoading)
    {
        return <Loading />
    }

    if (isError)
    {
        return <p className="text-text">Something went wrong, try again later.</p>
    }

    if (data.data.length === 0)
    {
        return null;
    }

    return(
        <section className="my-2">
            <button 
                onClick={() => setIsShow(!isShow)}
                className="bg-primary font-itim px-2 py-1 hover:bg-transparent hover:text-text border-2 border-transparent hover:border-primary duration-300 ease-linear rounded-md my-2">
                {isShow? "Hide Episodes" : "Show Episodes"}
            </button>
            <Activity mode={isShow? "visible" : "hidden"}>
                <h2 className="text-2xl text-text font-inter">Episodes</h2>
                <div className="flex justify-between my-2">
                    {
                        page > 1 && 
                        <button onClick={() => setPage(page - 1)} className="btn">Previous</button>
                    }
                    {
                        data.pagination.has_next_page && 
                        <button onClick={() => setPage(page + 1)} className="btn">Next</button>
                    }
                </div>
                <div className="grid gapx-2 grid-cols-1 md:gap-6 md:grid-cols-2 md:justify-between lg:grid-cols-3 xl:grid-cols-4">
                    {
                        data.data.map(function(episode)
                        {
                            return (
                                <AnimeEpisodeCard 
                                    key = {episode.mal_id}
                                    episode = {episode}
                                />
                            )
                        })
                    }
                </div>
            </Activity>
        </section>
    )
}