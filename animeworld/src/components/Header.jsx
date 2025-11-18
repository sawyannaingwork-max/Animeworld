import menu from "./../assets/menu.svg"

export default function Header({isOpen, setIsOpen})
{   
    function handleClick(e)
    {
        if (isOpen)
        {
            e.target.style.transform = "rotate(0deg)";
        }

        else 
        {
            e.target.style.transform = "rotate(90deg)";
        }

        setIsOpen(!isOpen)
    }
    return (
        <header className="shadow-customShadow px-3 h-[70px] flex items-center gap-2">
            <img 
                className="cursor-pointer duration-500 hover:scale-[1.05] ease-linear"
                src={menu} 
                alt="Menu Bar" 
                onClick={handleClick}
            />
            <h1 className="text-3xl text-text font-itim">Anime World</h1>
        </header>
    )
}