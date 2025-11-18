import AnimePage from "./AnimePage";

export default function UpcomingAnime()
{
    const url = "https://api.jikan.moe/v4/seasons/upcoming?"

    return(
        <AnimePage 
            url = {url}
            headingText= "Upcoming Anime"
        />
    )
}