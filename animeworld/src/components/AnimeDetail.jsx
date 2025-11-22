import { useParams } from "react-router-dom"
import AnimeInfo from "../animeDetail/AnimeInfo";
import AnimeEpisodeList from "../animeDetail/AnimeEpisodeList";
import AnimeRecommandations from "../animeDetail/AnimeRecommandation";
import AnimeCharacterList from "../animeDetail/AnimeCharacterList";
import AnimeStaffList from "../animeDetail/AnimeStaffList";
import AnimeReviewList from "../animeDetail/AnimeReviewList"
import { Activity, useState} from "react";

export default function AnimeDetail({children})
{
    const { id } = useParams();
    const [toggle, setToggle] = useState(true);
    const [isShow, setIsShow] = useState({
        characters : true,
        staffs : false,
        reviews : false
    })

    function handleClick(type)
    {
        switch(type) 
        {
            case "characters":
                setIsShow({
                    characters : true,
                    staffs : false,
                    reviews : false
                })
                setToggle(!toggle)
                break;
            
            case "staffs":
                setIsShow({
                    characters : false,
                    staffs : true,
                    reviews : false
                })
                break;
            
            case "reviews":
                setIsShow({
                    characters : false,
                    staffs : false,
                    reviews : true
                })
                break;
            
                
        }
    }

    return(
        <div>
            <AnimeInfo 
                id = {id}
            />
            <AnimeEpisodeList 
                id = {id}
            />
            <AnimeRecommandations 
                id = {id}
            />

            <div className="sticky top-[70px] z-10 bg-background rounded-md grid grid-cols-3 shadow-customShadow gap-0  border-2 border-primary">
                <button onClick={() => handleClick("characters")} className={`h-full border-2 border-primary py-1 text-text bg-transparent hover:text-secondary ${isShow.characters? "active" : ""}`}>Characters</button>
                <button onClick={() => handleClick("staffs")} className={`h-full border-2 border-primary py-1 text-text bg-transparent hover:text-secondary ${isShow.staffs? "active" : ""}`}>Staff</button>
                <button onClick={() => handleClick("reviews")} className={`h-full border-2 border-primary py-1 text-text bg-transparent hover:text-secondary ${isShow.reviews? "active" : ""}`}>Reviews</button>
            </div>
            
            <Activity mode={isShow.characters? "visible" : "hidden"}>
                <AnimeCharacterList
                    id = {id}
                    toggle = {toggle}
                />
            </Activity>
            
            <Activity mode={isShow.staffs? "visible" : "hidden"}>
                <AnimeStaffList 
                    id = {id}
                   
                />
            </Activity>
            
            <Activity mode={isShow.reviews? "visible" : "hidden"}>
                <AnimeReviewList 
                    id = {id}

                />
            </Activity>
        </div>
    )

}