import useAnimeDetailQuery from "../custom/useAnimeDetailQuery";
import Loading from "../components/Loading";
import AnimeCharacterCard from "../card/AnimeCharacterCard";
import { useEffect, useRef } from "react";

export default function AnimeCharacterList({id, toggle})
{   
    const url = `https://api.jikan.moe/v4/anime/${id}/characters`;
    const {data : characters, isLoading, isError} = useAnimeDetailQuery(id, "Characters", url)
    const characterRef = useRef();
    useEffect(function()
    {
        if (characterRef.current)
        {
            window.scrollTo({
                top : characterRef.current.offsetTop - 60,
                behavior : "smooth"
            })
        }
    },[toggle])

    if (isLoading)
    {
        return <Loading />
    }

    if (isError)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    if (characters.length === 0)
    {
        return;
    }

    return(
        <div ref={characterRef} className="my-5">
            
            <div className="grid-container">
                {characters.map(function(character)
                {
                    return (
                        <AnimeCharacterCard 
                            key = {character.character.mal_id}
                            character = {character}
                        />
                    )
                })}
            </div>
        
        </div>
    )
}
     