import { useQuery } from "@tanstack/react-query";

export default function useAnimeQuery(url, pageNumber)
{
    const {data: animes, isLoading, isError} = useQuery({
        queryKey : ["All", pageNumber],
        queryFn : async function()
        {
            const response = await fetch(url)

            if (!response.ok)
            {
                throw new Error("Something Went wrong");
            }

            const result = await response.json();
            return result
        }
    })

    if (!animes)
    {
        return {
            animes: [],
            hasNext: false,
            hasPrevious: false,
            isLoading,
            isError,
        }
    }

    return {
        animes : animes.data,
        hasNext : animes.pagination.has_next_page,
        isLoading : isLoading,
        isError : isError,
        hasPrevious :animes.pagination.current_page > 1? true : false
    }
} 