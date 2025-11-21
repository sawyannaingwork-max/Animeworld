import { useEffect, useState, useRef } from "react"
import useAnimeQuery from "../custom/useAnimeQuery"

import Loading from "./../components/Loading"
import AnimeReview from "../card/AnimeReview";

export default function AnimeReviewList({id})
{   
    const [page, setPage] = useState(1);
    const elementRef = useRef();
    const url = `https://api.jikan.moe/v4/anime/${id}/reviews?page=${page}`

    const {animes: reviews, isLoading, isError, hasNext, hasPrevious} = useAnimeQuery(url, page, "Reviews")
    
    useEffect(function()
    {
        if (elementRef.current)
        {
            window.scrollTo({
                top : elementRef.current.offsetTop - 60,
                behavior : "smooth"
            })
        }
    }, [reviews])

    if (isLoading)
    {
        return <Loading />
    }

    if (isError)
    {
        return <p>Something went wrong. Try again later.</p>
    }

    if (reviews.length === 0)
    {
        return;
    }

    return(
        <div ref={elementRef}>
            <div>
                {reviews.map(function(review)
                {
                    return(
                        <AnimeReview 
                            key = {review.mal_id}
                            review = {review}
                        />
                    )
                })}
            </div>
            <div className="flex justify-between">
                {
                hasNext && 
                <button onClick={() => setPage(page + 1)} className="btn">Next</button>
                }
                {
                    hasPrevious && 
                    <button onClick={() => setPage(page - 1)} className="btn">Previous</button>
                }
            </div>
        </div>
    )
}