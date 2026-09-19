interface Props{
    text:string
}

export default function TextContainer({text}:Props){
    return(
        <div className="py-[8px] px-[10px] bg-gray rounded-[6px]">
            <p className="text-white">{text}</p>
        </div>
    )
}