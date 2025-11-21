import { useQuery } from "@tanstack/react-query";

export default function useAnimeSearchQuery( name, pageNumber)
{
    const {data:animes, isFetching, isError} = useQuery({
        queryKey : ["Discover", name, pageNumber],
        queryFn : async function()
        {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${name}&page=${pageNumber}`);

            if (!response.ok)
            {
                throw new Error("Error")
            }

            const result = await response.json();
            console.log(result);
            return result;
        },
        enabled : Boolean(name),
        staleTime: Infinity
    })

    if (!animes)
    {
        return({
            animes : [],
            isFetching,
            isError,
            hasNext : false,
            hasPrevious : false
        })
    }

    return({
        animes : animes.data,
        isFetching,
        isError,
        hasNext : animes.pagination.has_next_page,
        hasPrevious : pageNumber > 1 ? true : false
    })
}