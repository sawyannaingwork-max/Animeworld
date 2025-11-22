import { useQuery } from "@tanstack/react-query"
import Loading from "./Loading";
import { useState } from "react";

export default function AnimeGenres()
{
    // Getting an array of genres
    const {data : genres, isLoading, isError, error} = useQuery({
        queryKey : ["Genres"],
        queryFn : async function()
        {
            const response = await fetch("https://api.jikan.moe/v4/genres/anime");

            if (!response.ok)
            {
                throw new Error();
            }

            const result = await response.json();
            setShowGenres(result.data)
            return result.data
        }
    })

    const [showGenres, setShowGenres] = useState(genres);
    const [searchValue, setSearchValue] = useState("");

    function handleChange(event)
    {
        setSearchValue(event.target.value);

        if (!event.target.value)
        {
            setShowGenres(genres);
        }

        else 
        {
            setShowGenres(genres.filter(function(genre)
            {
                return genre.name.toLowerCase().includes(event.target.value.toLowerCase())
            }))
        }
    }

    if (isLoading)
    {
        return <Loading />
    }

    if (isError)
    {
        return <p>{error}</p>
    }

    // Creatting a list of genres
    const genreList = showGenres.map(function(genre)
    {
        return(
            <section key={genre.mal_id} className="shadow-customShadow rounded-sm hover:scale-[1.1] duration-300 ease-linear cursor-pointer genre-item py-5 text-center text-text">
                <h2>{genre.name}</h2>
                <p>{genre.count}</p>
            </section>
        )
    })

    return(
        <div className="mt-5">
            
            <input
                className="block rounded-md hover:border-none hover:outline-none w-[90%] mx-auto bg-transparent shadow-customShadow text-text px-2 py-1 text-sm"
                type="text" 
                name="genre" 
                id="genre" 
                value = {searchValue}
                onChange={handleChange}
            />
            
            <div className="my-5 w-[90%] mx-auto lg:w-[calc(100%-250px)] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                {genreList}
            </div>
        </div>
        
    )
}