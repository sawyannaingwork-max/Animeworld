export default function AnimeCharacterVoices({voices})
{
    return(
        <>
            <h2 className="text-text text-2xl font-inter pb-2">Voice Actors</h2>
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-10 pb-5">
                {voices.map(function(voice)
                {
                    return(
                        <section key={voice.person.mal_id}>
                            <img className="w-full h-[300px] object-cover rounded-md shadow-customShadow" src={voice.person.images.jpg.image_url} alt={voice.person.name} />
                            <h2 className="text-secondary text-lg py-1 font-inter">{voice.person.name}</h2>
                            <p className="bg-text px-2 py-1 text-center rounded-md opacity-70">{voice.language} Voice Actor</p>
                        </section>
                    )
                })}
            </section>
        </>
    )
}