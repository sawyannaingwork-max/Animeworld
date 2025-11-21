import { useState } from "react";

import Loading from "./Loading";
import AnimeCard from "./../card/AnimeCard";
import useAnimeQuery from "../custom/useAnimeQuery";

export default function AnimePage({url, headingText, type})
{
    // State for page number
    const [page, setPage] = useState(1);

    const fetchUrl = url + `page=${page}`;

    const result = useAnimeQuery(fetchUrl, page, type);

    const {animes, hasNext, hasPrevious, isLoading, isError} = result;

    if (isLoading)
    {
        return (<Loading />)
    }

    if (isError)
    {
        return <p>Something Went Wrong. Try again later</p>
    }

    // Removing Duplicate
    const uniqueAnimes = removeDuplicate(animes);
    const animeList = uniqueAnimes.map(function(anime)
    {
        return (
            <AnimeCard 
                key = {anime.mal_id}
                anime = {anime}
            />
        )
    })

    return(
        <div className="py-5 w-[90%] mx-auto lg:w-[calc(100%-250px)]">
            <h1 className="text-3xl text-text text-center">{headingText}</h1>
            <div className="anime-container">
                {animeList}
            </div>
            <div className="flex justify-between">
                {
                    hasPrevious && 
                    <button onClick={() => setPage(page - 1)} className="btn">Previous</button>
                }
                {
                    hasNext && 
                    <button onClick={() => setPage(page + 1)} className="btn">Next</button>
                }
            </div>
        </div>
    )
}

// Function for removing duplicate
function removeDuplicate(animes)
{
    const unique = new Map()
    for (const anime of animes)
    {
        unique.set(anime.mal_id, anime);
    }

    return [...unique.values()];
}