import AnimePage from "./AnimePage"

export default function HighRatedAnime()
{
    const url = "https://api.jikan.moe/v4/anime?order_by=score&sort=desc&"

    return(
        <AnimePage 
            url = {url}
            headingText = "Highest Rated Anime"
            type = "Highest Rated"
        />
    )
}