import {Routes, Route} from "react-router-dom";

import SideBar from "./SideBar";
import Home from "./Home";

export default function Content({isOpen})
{
    return (
        <main className="relative">
            <SideBar
                isOpen = {isOpen}
            />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
    )
}