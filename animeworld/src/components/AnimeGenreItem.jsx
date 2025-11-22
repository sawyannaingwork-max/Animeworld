import { useLocation, useParams } from "react-router-dom"
import AnimePage from "./AnimePage";

export default function AnimeGenreItem()
{
    const location = useLocation()
    const {genre} = useParams();
    const id = location.state;

    const url = `https://api.jikan.moe/v4/anime?genres=${id}&`

    return(
        <AnimePage 
            url = {url}
            headingText= {`${genre} Anime`}
            type = {`genre${id}`}
        />
    )
}