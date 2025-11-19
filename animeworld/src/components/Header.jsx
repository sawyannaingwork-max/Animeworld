import menu from "./../assets/menu.svg"

export default function Header({isOpen, setIsOpen})
{   
    function handleClick(e)
    {
        e.stopPropagation();
        
        setIsOpen(!isOpen)
    }
    return (
        <header className="shadow-customShadow px-3 h-[70px] flex items-center gap-2 sticky top-0 z-10 bg-background">
            <img 
                className={`lg:hidden cursor-pointer duration-500 hover:scale-[1.05] ease-linear ${isOpen? "rotate-90" : "rotate-0"}`}
                src={menu} 
                alt="Menu Bar" 
                onClick={handleClick}
            />
            <h1 className="text-3xl text-text font-itim">Anime World</h1>
        </header>
    )
}