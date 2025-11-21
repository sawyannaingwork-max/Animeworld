import { useQuery } from "@tanstack/react-query"
import Loading from "./Loading";
import AnimeCharacterCard from "../card/AnimeCharacterCard";

export default function AnimeCharacterList({id})
{   
    const {data : characters, isLoading, isError} = useQuery({
        queryKey : ["Characters", id],
        queryFn : async function()
        {
            const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);

            if (!response.ok)
            {
                throw new Error("Error")
            }

            const result = await response.json();
            return result.data;
        },
        staleTime : Infinity
    })

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
        <div className="my-5">
            
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
     