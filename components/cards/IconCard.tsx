import Image from "next/image"

export default function IconCard({icon_url}:{icon_url:string}){
    return(                    
    <div className="
        md:max-w-[88px] max-w-[56px]
        md:max-h[88px] max-h-[56px]
        md:p-[20px] p-[16px]
        rounded-[8px]
        border-x-[1px]
        border-t-[1px]
        border-x-gray
        border-t-gray
        bg-[radial-gradient(circle_at_100%_0%,#26331f_0%,#1b1b1b_35%,#1A1A1A_70%)]">
        <Image
            src={icon_url}
            width={70}
            height={70}
            alt="icons"/>
    </div>)
}