import {Routes, Route} from "react-router-dom";

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

export default function Content({isOpen})
{
    return (
        <main className="relative lg:flex">
            <SideBar
                isOpen = {isOpen}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/anime">
                    <Route path="all" element={<AllAnime />} />
                    <Route path=":id" element={<AnimeDetail />} />
                    <Route path="popular" element={<MostPopularAnime />} />
                    <Route path="rating" element={<HighRatedAnime />} />
                    <Route path="upcoming" element={<UpcomingAnime />} />
                    <Route path="airing" element={<CurrentAnime />} />
                    <Route path="favorite" element={<FanFavoriteAnime />} />
                    <Route path="character/:id" element={<AnimeCharacterDetail />} />
                </Route>
            </Routes>
        </main>
    )
}