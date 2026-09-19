'use client'

import IconCard from "./IconCard"

interface CardProps{
    icon:string
    title:string
    text:string
}

export default function ServiceCard({icon, title, text}:CardProps){

    return(
        <div className="md:p-[40px] p-[30px] border-[1px] border-gray flex flex-col gap-[60px]">
            <div className="flex flex-col items-start gap-y-[40px] h-auto">
                <IconCard icon_url={icon}/>
                <p className="text-[24px] text-white font-semibold">{title}</p>
                <p className="text-text text-[14px] text-start">{text}</p>
            </div>

            <div className="md:w-full md:h-[52px] md:px-[16px] md:py-[18px] md:rounded-[8px] md:bg-gray w-full h-[52px] px-[16px] py-[18px] rounded-[8px] bg-gray ">
                <p className="text-text text-center">Learn More</p>
            </div>
        </div>
    )
}