export default function({img, handleClick})
{
    return(
        <div onClick={handleClick} className="w-[100px] h-[100px] flex justify-center items-center border-2 rounded-md cursor-pointer hover:border-secondary duratin-300 border-primary bg-background">
            <img 
                className="w-[90%] h-[90%] object-contain object-center"
                src={img} 
                alt="Image" 
            />
        </div>
    )
}