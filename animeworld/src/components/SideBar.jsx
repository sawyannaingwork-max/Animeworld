export default function SideBar({isOpen})
{
    return(
        <nav className={`side-bar ${isOpen? "w-[200px] p-3" : "w-[0]"}`}>
            <ul>
                <li className="text-xl"><a className="nav-link" href="#">Home</a></li>
                <li className="text-xl text-text">
                    Anime
                    <ul className="px-3">
                        <li><a className="nav-link text-lg" href="#">Most Popular</a></li>
                        <li><a className="nav-link text-lg" href="#">Highest Rating</a></li>
                        <li><a className="nav-link text-lg" href="#">Upcoming</a></li>
                    </ul>
                </li>
                <li className="text-xl"><a className="nav-link" href="#">Manga</a></li>
            </ul>
        </nav>
    )
}