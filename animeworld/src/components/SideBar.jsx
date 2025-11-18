import { NavLink } from "react-router-dom"

export default function SideBar({isOpen})
{
    return(
        <nav className={`side-bar ${isOpen? "w-[200px] p-3" : "w-[0]"}`}>
            <ul>
                <li className="text-xl py-2"><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li className="text-xl py-2 text-text">
                    Anime
                    <ul className="px-3">
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/all/">All</NavLink></li>
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/popular/">Popular</NavLink></li>
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/rating/">High Rated</NavLink></li>
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/upcoming/">Upcoming</NavLink></li>
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/airing/">Airing</NavLink></li>
                        <li className="py-1"><NavLink className="nav-link text-lg" to="/favorite/">Fan Favorite</NavLink></li>
                    </ul>
                </li>
                <li className="text-xl py-2"><a className="nav-link" href="#">Manga</a></li>
            </ul>
        </nav>
    )
}