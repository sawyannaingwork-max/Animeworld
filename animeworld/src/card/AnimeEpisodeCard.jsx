import star from "./../assets/star.svg"
export default function AnimeEpisodeCard({episode})
{
    return(
        <section className="bg-slate-900 text-text my-3 px-2 py-3 rounded-md shadow-customShadow font-roboto">
           
            <h2 className="text-lg font-bold">Ep {episode.mal_id} {episode.title}</h2>
            <div className="flex gap-1 items-center mb-1">
                <img src={star} alt="Star" />
                <h4>{episode.score}</h4>
            </div>
            <p className="text-background bg-text opacity-70 inline px-2 py-1 rounded-sm">Aired {episode.aired?.split("T")[0]}</p>
        </section>
    )
}