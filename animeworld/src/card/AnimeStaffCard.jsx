export default function AnimeCard({staff})
{
    return (
        <section>
            <img 
                className="w-full aspect-square object-cover object-top  rounded-md shadow-cardShadow mb-1"
                src={staff.person.images.jpg.image_url} 
                alt={staff.person.name} 
            />
            <h3 className="text-primary text-xl py-1">{staff.person.name}</h3>
            <p className="text-text opacity-70">{staff.positions.join(",")}</p>
        </section>
    )
}