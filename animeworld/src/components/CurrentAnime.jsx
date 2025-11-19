import AnimePage from "./AnimePage"

export default function CurrentAnime()
{
    const url = "https://api.jikan.moe/v4/anime?status=airing&order_by=members&sort=desc&"

    return(
        <AnimePage 
            url = {url}
            headingText = "Currenty Airing"
            type = "Current"
        />
    )
}