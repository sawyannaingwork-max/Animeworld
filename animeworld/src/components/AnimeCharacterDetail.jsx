import useAnimeDetailQuery from "../custom/useAnimeDetailQuery"
import AnimeCharacterInfo from "../animeCharacter/AnimeCharacterInfo";
import AnimeCharacterAnime from "../animeCharacter/AnimeCharacterAnime";

import { useParams } from "react-router-dom"
import Loading from "./Loading";
import AnimeCharacterVoices from "../animeCharacter/AnimeCharacterVoices";

export default function AnimeCharacterDetail()
{
    const {id} = useParams();

    const url = `https://api.jikan.moe/v4/characters/${id}/full`;

    const {data: character, isLoading, isError} = useAnimeDetailQuery(id, "Character", url);

    if (isLoading)
    {
        return <Loading />
    }

    if (isError)
    {
        return <p>Something went wrong try again later</p>
    }

    return(
        <div className="max-w-[90%] mx-auto lg:w-[calc(100%-250px)]">
            <AnimeCharacterInfo 
                image = {character.images.jpg.image_url}
                name = {character.name}
                nicknames = {character.nicknames}
                favorites = {character.favorites}
                about = {character.about}
            />
            <AnimeCharacterAnime 
                animeList = {character.anime}
            />
            <AnimeCharacterVoices 
                voices = {character.voices}
            />
        </div>
    )

}