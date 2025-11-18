import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";

export default function App()
{   
    // State for side bar opening
    const [isOpen, setIsOpen] = useState(false);

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