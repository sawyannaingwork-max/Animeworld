import useAnimeDetailQuery from "../custom/useAnimeDetailQuery"
import Loading from "../components/Loading";
import AnimeStaffCard from "../card/AnimeStaffCard"
import { useEffect, useRef } from "react";
export default function AnimeStaffList({id})
{
    // Creating url
    const url = `https://api.jikan.moe/v4/anime/${id}/staff`

    const staffRef = useRef();
    const {data : staffs, isLoading, isError} = useAnimeDetailQuery(id, "Staff", url);

    useEffect(function()
    {
        if (staffRef.current)
        {
            window.scrollTo(
                {
                    top : staffRef.current.offsetTop - 60,
                    behavior : "smooth"
                }
            )
        }
    }, [staffs])
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
        <div ref={staffRef} className="my-5">
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