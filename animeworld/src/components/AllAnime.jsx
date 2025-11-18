import AnimePage from "./AnimePage"

export default function AllAnime()
{
    const url = "https://api.jikan.moe/v4/anime?"
    const headingText = "All Anime"

    return(
        <AnimePage 
            url = {url}
            headingText = {headingText}
        />
    )
}