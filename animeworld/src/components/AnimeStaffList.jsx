import useAnimeDetailQuery from "../custom/useAnimeDetailQuery"
import Loading from "./Loading";
import AnimeStaffCard from "./../card/AnimeStaffCard"
export default function AnimeStaffList({id})
{
    // Creating url
    const url = `https://api.jikan.moe/v4/anime/${id}/staff`

    const {data : staffs, isLoading, isError} = useAnimeDetailQuery(id, "Staff", url);

    if (isLoading)
    {
        return <Loading />
    }

    if (isError)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    if (staffs.length === 0)
    {
        return;
    }

    return(
        <div className="my-5">
            <div className="grid-container">
                {
                    staffs.map(function(staff)
                    {
                        return(
                            <AnimeStaffCard 
                                key = {staff.person.mal_id}
                                staff= {staff}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}