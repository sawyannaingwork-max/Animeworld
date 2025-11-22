import { useNavigate } from "react-router-dom"
export default function AnimeCharacterAnime({animeList})
{
    const navigate = useNavigate();
    return(
        <>
            <h1 className="text-2xl text-text font-inter pt-5 pb-2">Featured Animes</h1>
            <section className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {animeList.map(function(anime)
                {
                    return(
                        <section onClick={() => navigate(`/anime/${anime.anime.mal_id}`)} key={anime.anime.mal_id} className="my-2">
                            <img src={anime.anime.images.jpg.image_url} alt={anime.title} className="rounded-md shadow-cardShadow" />
                            <h2 className="text-primary text-lg font-inter py-1">{anime.anime.title}</h2>
                        </section>
                    )
                })}
            </section>
        </>
    )
}