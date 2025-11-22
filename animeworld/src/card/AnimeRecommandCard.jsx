import { useNavigate } from "react-router-dom"

export default function AnimeRecommandCard({anime})
{
    const navigate = useNavigate();

    function handleClick()
    {
        navigate(`/anime/${anime.entry.mal_id}`)
    }
    return(
        <div onClick={handleClick} className="flex-[150px] flex-shrink-0 flex-grow-0 cursor-pointer">
            <img 
                className="w-[150px] h-[200px] object-cover object-center rounded-md border-2 border-secondary"
                src={anime.entry?.images?.jpg.image_url} 
                alt="{anime.title}" 
            />
            <h3 className="text-text opacity-70">{anime.entry.title}</h3>
        </div>
    )
}