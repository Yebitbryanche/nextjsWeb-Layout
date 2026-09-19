import IconCard from "./IconCard"

interface SquareUpCardProps{
    icon_url:string
    title:string
    text:string
}

export default function SquareUpCard({icon_url, title, text}:SquareUpCardProps){
    return(
        <div className="md:p-[60px] p-[30px] flex flex-col items-start gap-y-[30px] border-[1px] border-gray">
            <div className="md:flex md:flex-row md:gap-x-2 md:items-center">
                <IconCard icon_url={icon_url}/>
                <p className="text-[20px] font-semi-bold text-white">{title}</p>
            </div>
            <div>
                <p className="text-text text-[16px]">{text}</p>
            </div>
        </div>
    )
}