import { useQuery } from "@tanstack/react-query"
import Loading from "./Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

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

    function handleClick(name, id)
    {
        navigate(`${name}`, {
            state : id
        })
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
            <section onClick={() => handleClick(genre.name, genre.mal_id)} key={genre.mal_id} className="shadow-customShadow rounded-sm hover:scale-[1.1] duration-300 ease-linear cursor-pointer genre-item py-5 text-center text-text">
                <h2>{genre.name}</h2>
                <p>{genre.count}</p>
            </section>
        )
    })

    return(
        <div>
            <h1 className="text-3xl text-text font-inter text-center pb-4">Anime Genres</h1>
            <input
                className="block rounded-md hover:border-none hover:outline-none w-full bg-transparent shadow-customShadow text-text px-2 py-1 text-sm"
                type="text" 
                name="genre" 
                id="genre" 
                placeholder="Search Genre"
                value = {searchValue}
                onChange={handleChange}
            />
            
            <div className="my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                {genreList}
            </div>
        </div>
        
    )
}