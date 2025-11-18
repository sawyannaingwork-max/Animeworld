import SideBar from "./SideBar";

export default function Content({isOpen})
{
    return (
        <main className="relative">
            <SideBar
                isOpen = {isOpen}
            />
            <div>
                
            </div>
        </main>
    )
}