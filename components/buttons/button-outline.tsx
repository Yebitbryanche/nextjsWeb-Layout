'use-client'

import Link from "next/link"

interface Buttonprop{
    text:string
    href:string
}


export default function ButtonOutline({text, href}:Buttonprop){

    return(
        <div className="bg-[#24242490] backdrop-blur-lg border-[1px] border-gray px-[18px] py-[12px] rounded-[6px] cursor-pointer">
            <Link href={href} className="text-white">{text}</Link>
        </div>
    )
}