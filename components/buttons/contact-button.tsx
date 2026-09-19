'use-client'

import Link from "next/link"

interface Buttonprop{
    text:string
    href:string
}


export default function Button({text, href}:Buttonprop){

    return(
        <div className="bg-primary flex justify-center px-[18px] py-[12px] rounded-[6px] cursor-pointer z-50">
            <Link href={href}>{text}</Link>
        </div>
    )
}