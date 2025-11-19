import Header from "./components/Header";
import Content from "./components/Content";
import { useEffect, useState } from "react";

export default function App()
{   
    // State for side bar opening
    const [isOpen, setIsOpen] = useState(false);


    useEffect(function()
    {
        function hide()
        {
            if (isOpen)
            {
                setIsOpen(false);
            }
        }

        document.addEventListener("click", hide);

        return () => document.removeEventListener("click", hide)
    }, [isOpen])
    return(
        <>
            <Header 
                isOpen = {isOpen}
                setIsOpen = {setIsOpen}
            />
            <Content
                isOpen = {isOpen}
            />
        </>
    )
}