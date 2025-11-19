import AnimePage from "./AnimePage";

export default function FanFavoriteAnime()
{
    const url = "https://api.jikan.moe/v4/top/anime?filter=favorite&"

    return (
        <AnimePage 
            url = {url}
            headingText= "Fan Favorite Anime"
            type = "Fan Favorite"
        />
    )
}