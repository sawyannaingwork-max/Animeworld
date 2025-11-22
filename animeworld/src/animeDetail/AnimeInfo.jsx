import { useQuery } from "@tanstack/react-query"
import useAnimeDetailQuery from "../custom/useAnimeDetailQuery";
import { NavLink } from "react-router-dom";
import Loading from "../components/Loading";

export default function AnimeInfo({id})
{
    const url = `https://api.jikan.moe/v4/anime/${id}`
    const {data, isLoading, isError} = useAnimeDetailQuery(id, "Info", url);
        
    if (isLoading)
    {
        return <Loading />
    }

    if (isError)
    {
        return <p>Something went wrong try again later</p>
    }

    return(
        <>
            <h1 className="text-3xl text-text py-1 text-center md:text-left">{data.title}</h1>
            <h1 className="text-3xl text-text py-1 text-center md:text-left">{data.title_japanese}</h1>
            <p className="text-secondary py-1 text-center md:text-left">Aired date: {data.aired.string}</p>
            <section className="md:flex gap-3 items-start my-5">
                <img className="rounded-md shadow-cardShadow mx-auto md:mx-0 w-[90%] max-w-[280px] object-cover object-center" src={data.images.jpg.image_url} alt={data.title} />
                <div className="my-3 md:my-0">
                    <h2 className="text-2xl text-text my-2 md:my-0">Synopsis</h2>
                    <p className="text-text font-roboto opacity-70 md:my-2">{data.synopsis}</p>
                </div>
            </section>
            {
                data.trailer.embed_url && 
                <iframe className="w-full aspect-video max-w-[500px] mx-auto md:mx-0" src={data.trailer.embed_url} frameBorder="0"></iframe>
            }
            <section className="my-3">
                <h2 className="text-2xl text-white font-inter">Genres</h2>
                <ul className="flex flex-wrap gap-2 my-2">
                    {
                        data.genres.map(function(genre)
                        {
                            return <li className="list-item" key={genre.mal_id}>{genre.name}</li>
                        })
                    }
                    {
                        data.themes.map(function(theme)
                        {
                            return <li className="list-item" key={theme.mal_id}>{theme.name}</li>
                        })
                    }
                    {
                        data?.demographics.map(function(graphic)
                        {
                            return <li className="list-item" key={graphic.mal_id}>{graphic.name}</li>
                        })
                    }
                    {
                        data?.explicit_genres.map(function(genre)
                        {
                            return <li className="list-item" key={genre.mal_id}>{genre.name}</li>
                        })
                    }
                </ul>
            </section>
            <section className="my-3">
                <h2 className="text-2xl font-inter text-text">Info</h2>
                <ul className="flex flex-wrap gap-2 my-2">
                    <li className="list-item">Rank #{data.rank}</li>
                    <li className="list-item">Popularity #{data.popularity}</li>
                    <li className="list-item">Scored {data.score}</li>
                    <li className="list-item">Favorites {data.favorites}</li>
                    <li className="list-item">Members {data.members}</li>
                    <li className="list-item">{data.status}</li>
                    <li className="list-item">{data.type}</li>
                    <li className="list-item">{data.source}</li>
                    <li className="list-item">{data.rating}</li>
                </ul>
            </section>

            <section className="my-3">
                <h2 className="text-2xl text-text">Producers</h2>
                <ul className="flex flex-wrap gap-5 gap-y-1 my-1">
                    {
                        data.producers.map(function(producer)
                        {
                            return <li key={producer.mal_id}><NavLink className="list-link" to={`/producer/${producer.name}`} state={producer.mal_id}>{producer.name}</NavLink></li>
                        })
                    }
                </ul>
            </section>

            <section className="my-3">
                <h2 className="text-2xl text-text">Licensors</h2>
                <ul className="flex flex-wrap gap-5 gap-y-1 my-1">
                    {
                        data.licensors.map(function(licensor)
                        {
                            return <li key={licensor.mal_id}><NavLink className="list-link" to={`/producer/${licensor.name}`} state={licensor.mal_id}>{licensor.name}</NavLink></li>
                        })
                    }
                </ul>
            </section>

            <section className="my-3">
                <h2 className="text-2xl text-text">Studios</h2>
                <ul className="flex flex-wrap gap-5 gap-y-1 my-1">
                    {
                        data.studios.map(function(studio)
                        {
                            return <li key={studio.mal_id}><NavLink className="list-link" to={`/producer/${studio.name}`} state={studio.mal_id}>{studio.name}</NavLink></li>
                        })
                    }
                </ul>
            </section>

        </>
    )
}