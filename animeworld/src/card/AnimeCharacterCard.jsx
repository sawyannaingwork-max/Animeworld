import { useNavigate } from "react-router-dom"

export default function AnimeCharacterCard({character})
{   
    const navigate = useNavigate();
    return(
        <section onClick={() => navigate(`/anime/character/${character.character.mal_id}`)}>
            <img 
                className="w-full aspect-square object-cover object-center rounded-md shadow-cardShadow mb-1"
                src={character.character.images.jpg.image_url} 
                alt={character.name} 
            />
            <h3 className="font-inter text-lg text-primary">{character.character.name}</h3>
            <p className="text-text pb-1 font-roboto opacity-70">{character.favorites} Favorites</p>
            <p className="bg-primary opactiy-70 inline px-2 py-1 rounded-md">{character.role} character</p>
        </section>
    )
}