import { useSearchParams } from "react-router-dom"
import useAnimeSearchQuery from "../custom/useAnimeSearchQuery";
import { useState } from "react";

import Loading from "./Loading";
import AnimeCard from "./AnimeCard";

export default function Discover()
{
    const [searchParam, setSearchParam] = useSearchParams({name : ""})
    const [searchValue, setSearchValue] = useState("")
    const [pageNumber, setPageNumber] = useState(1)

    const name = searchParam.get("name");

    const {animes, isFetching, isError, hasNext, hasPrevious} = useAnimeSearchQuery(searchValue, pageNumber)

    let content; 

    if (isFetching)
    {
        content = <Loading />
    }

    else if (isError)
    {
        content = <p>Something went wrong. Try again later</p>
    }

    else if(animes.length > 0)
    {
        content = 
        <div>
            <h2 className="text-2xl text-text text-center py-4">Search Result</h2>
            <div className="anime-container">
                {
                    animes.map(function(anime)
                    {
                        return (
                            <AnimeCard 
                                key = {anime.mal_id}
                                anime = {anime}
                            />
                        )
                    })
                }
            </div>
            <div className="flex justify-between">
                {
                    hasPrevious && 
                    <button onClick={() => setPageNumber(pageNumber - 1)} className="btn">Previous</button>
                }
                {
                    hasNext && 
                    <button onClick={() => setPageNumber(pageNumber + 1)} className="btn">Next</button>
                }
            </div>
        </div>
    }

    // Function for handling submit
    function handleSubmit(event)
    {
        // Preventing default
        event.preventDefault();
        
        setSearchValue(name);
        setPageNumber(1);
    }


    return(
        <div div className="py-5 w-[90%] mx-auto lg:w-[calc(100%-250px)]">
            <h1 className="text-3xl font-inter text-text py-5 text-center">Search Anime</h1>
            <form 
                onSubmit={handleSubmit}
                action="#" 
                className="flex border-2 border-primary rounded-md shadow-customShadow"
            >
                <input 
                    className=" px-2 py-1 w-[calc(100%-100px)] bg-transparent border-none outline-none text-text opacity-70"
                    type="text" 
                    name="anime" 
                    id="anime" 
                    placeholder="Eg. Naruto"
                    onChange={(event) => setSearchParam({name : event.target.value})}
                    value = {name}
                />
                <button className="w-[100px] bg-secondary text-text font-itim rounded-md hover:shadow-customShadow duration-300 ease-linear">Search</button>
            </form>
            {content}
        </div>
    )
}