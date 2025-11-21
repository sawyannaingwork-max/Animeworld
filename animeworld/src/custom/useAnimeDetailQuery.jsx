import { useQuery } from "@tanstack/react-query"

export default function useAnimeDetailQuery(id, type, url)
{
    const {data, isLoading, isError} = useQuery({
        queryKey : [type, id],
        queryFn : async function()
        {
            const response = await fetch(url);

            if (!response.ok)
            {
                throw new Error()
            }

            const result = await response.json();
            return result.data;
        },
        staleTime : Infinity
    })

    return {data, isLoading, isError}
}