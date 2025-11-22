import {Routes, Route, useSearchParams} from "react-router-dom";
import { useState } from "react";
import useAnimeSearchQuery from "./../custom/useAnimeSearchQuery"

import SideBar from "./SideBar";
import Home from "./Home";
import AllAnime from "./AllAnime";
import MostPopularAnime from "./MostPopularAnime";
import HighRatedAnime from "./HIghRatedAnime";
import UpcomingAnime from "./UpcomingAnime";
import CurrentAnime from "./CurrentAnime";
import FanFavoriteAnime from "./FanFavoriteAnime";
import Discover from "./Discover";
import AnimeDetail from "./AnimeDetail";
import AnimeCharacterDetail from "./AnimeCharacterDetail";
import AnimeGenres from "./AnimeGenres";
import AnimeGenreItem from "./AnimeGenreItem";
import AnimeProducer from "./AnimeProducer";

export default function Content({isOpen})
{
    const [searchParam, setSearchParam] = useSearchParams({name : ""})
    const [searchValue, setSearchValue] = useState("")
    const [pageNumber, setPageNumber] = useState(1)

    const {animes, isFetching, isError, hasNext, hasPrevious} = useAnimeSearchQuery(searchValue, pageNumber)

    return (
        <main className="relative lg:flex">
            <SideBar
                isOpen = {isOpen}
            />
            <div className="w-[90%] mx-auto lg:w-[calc(100%-250px)] my-4">
                <Routes>
                <Route path="/" element={<Home />} />
                <Route 
                    path="/discover" 
                    element={<Discover 
                                searchParam={searchParam}
                                setSearchParam={setSearchParam}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                pageNumber={pageNumber}
                                setPageNumber={setPageNumber}
                                animes={animes}
                                isFetching={isFetching}
                                isError={isError}
                                hasNext={hasNext}
                                hasPrevious={hasPrevious}
                            />} 
                />
                <Route path="/anime">
                    <Route path="genres" element = {<AnimeGenres />} />
                    <Route path="genres/:genre" element={<AnimeGenreItem />} />
                    <Route path="all" element={<AllAnime />} />
                    <Route path=":id" element={<AnimeDetail />} />
                    <Route path="popular" element={<MostPopularAnime />} />
                    <Route path="rating" element={<HighRatedAnime />} />
                    <Route path="upcoming" element={<UpcomingAnime />} />
                    <Route path="airing" element={<CurrentAnime />} />
                    <Route path="favorite" element={<FanFavoriteAnime />} />
                    <Route path="character/:id" element={<AnimeCharacterDetail />} />
                </Route>
                <Route path="/producer/:name" element={<AnimeProducer />} />
                </Routes>
            </div>
        </main>
    )
}