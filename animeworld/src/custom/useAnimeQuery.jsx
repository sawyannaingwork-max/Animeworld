import { useQuery } from "@tanstack/react-query";

export default function useAnimeQuery(url, pageNumber, type)
{
    const {data: animes, isLoading, isError} = useQuery({
        queryKey : [type, pageNumber],
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
        hasPrevious : pageNumber > 1? true : false
    }
} 