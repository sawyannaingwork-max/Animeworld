import {Routes, Route} from "react-router-dom";

import SideBar from "./SideBar";
import Home from "./Home";
import AllAnime from "./AllAnime";
import MostPopularAnime from "./MostPopularAnime";
import HighRatedAnime from "./HIghRatedAnime";
import UpcomingAnime from "./UpcomingAnime";
import CurrentAnime from "./CurrentAnime";
import FanFavoriteAnime from "./FanFavoriteAnime";

export default function Content({isOpen})
{
    return (
        <main className="relative lg:flex">
            <SideBar
                isOpen = {isOpen}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all/" element={<AllAnime />} />
                <Route path="/popular/" element={<MostPopularAnime />} />
                <Route path="/rating/" element={<HighRatedAnime />} />
                <Route path="/upcoming/" element={<UpcomingAnime />} />
                <Route path="/airing" element={<CurrentAnime />} />
                <Route path="/favorite/" element={<FanFavoriteAnime />} />
            </Routes>
        </main>
    )
}