import { useQuery } from "@tanstack/react-query"
import { useLocation, useParams } from "react-router-dom"
import Loading from "./Loading";
import AnimePage from "./AnimePage";

export default function AnimeProducer()
{
    const {name} = useParams();
    const id = useLocation().state;

    // url to get animes produced by id producer
    const url = `https://api.jikan.moe/v4/anime?producers=${id}&`

    const {data, isLoading, isError} = useQuery({
        queryKey : [name],
        queryFn : async function()
        {
            const response = await fetch(`https://api.jikan.moe/v4/producers/${id}`)

            if (!response.ok)
            {
                throw new Error()
            }

            const result = await response.json();
            return result.data;
        }
    })

    if (isLoading)
    {
        return <Loading />
    }

    if (isError)
    {
        return <p>Soemthing went wrong.Try again later.</p>
    }

    return(
        <>
            <h1 className="text-text text-3xl text-center lg:text-left font-inter py-2">{data.titles[0].title}</h1>
            <img className="mb-5 w-full max-w-[300px] mx-auto lg:mx-0 rounded-md shadow-cardShadow" src={data.images.jpg.image_url} alt={data.titles[0].title} />
            <p className=" bg-text text-center mx-auto max-w-[200px] px-2 py-1 rounded-md opacity-70 lg:inline">Produced {data.count} animes</p>
           
            <p className="mb-5 py-2 whitespace-pre-line text-text opacity-70 text-center lg:text-left">
                {data.about}
            </p>
            
            <AnimePage 
                url = {url}
                headingText={`Animes Produced by ${name}`}
                type = {`Produces${id}`}
            />
        </>
    )
}