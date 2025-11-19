import { NavLink } from "react-router-dom"

export default function SideBar({isOpen})
{
    return(
        <nav className={`side-bar ${isOpen? "w-[200px] p-3" : "w-[0]"}`}>
            <ul>
                <li className="text-xl py-2"><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li className="text-xl py-2"><NavLink className="nav-link" to="/discover">Discover</NavLink></li>
                <li className="text-xl py-2 text-text">
                    Anime
                    <ul className="px-3">
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/anime">All</NavLink></li>
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/anime/popular">Popular</NavLink></li>
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/anime/rating">High Rated</NavLink></li>
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/anime/upcoming">Upcoming</NavLink></li>
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/anime/airing">Airing</NavLink></li>
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/anime/favorite">Fan Favorite</NavLink></li>
                    </ul>
                </li>
                <li className="text-xl py-2"><a className="nav-link" href="#">Manga</a></li>
            </ul>
        </nav>
    )
}