export default function AnimeCharacterInfo({image, name, nicknames, favorites, about})
{
    return (
        <section className="text-text text-center">
            <h2 className="lg:text-left text-primary text-2xl font-inter py-1">{name}</h2>
            <h3 className="lg:text-left text-secondary text-xl font-inter">{nicknames?.join(",")}</h3>
            <img className="lg:mx-0 mx-auto rounded-md border-2  border-secondary shadow-cardShadow my-2" src={image} alt={name} />
            <p className="bg-text w-90% max-w-[150px] mx-auto text-background px-2 py-1 rounded-md opacity-70 lg:mx-0">{favorites} Favorites</p>
            <p className="whitespace-pre-line text-left opacity-70 font-roboto mt-4">
                {about}
            </p>
        </section>
    )
}