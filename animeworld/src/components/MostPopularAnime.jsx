import AnimePage from "./AnimePage";

export default function MostPopularAnime()
{
    const url = "https://api.jikan.moe/v4/top/anime?filter=bypopularity&"

    return(
        <AnimePage 
            url = {url}
            headingText= "Most Popular Anime"
            type = "Popular"
        />
    )
}