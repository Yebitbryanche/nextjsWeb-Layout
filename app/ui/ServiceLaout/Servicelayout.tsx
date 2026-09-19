export default function ServiceLayout({heading, text, intro, children}:{heading:string, text:string, intro:string, children:any}){
    return(
        <div className="md:pt-[80px] pt-[40px]">
            <div className="md:px-[40px] md:flex md:flex-col md:gap-y-[40px] md:border-b-1 md:border-b-gray px-[16px] flex flex-col gap-y-[30px] border-b-1 border-b-gray">
                <div className="flex flex-col gap-y-[10px]">
                    <p className="md:text-[38px] md:text-white md:font-semi-bold text-[28px] text-white font-semi-bold">{heading}</p>
                    <p className="text-[16px] text-text">{text}</p>
                </div>
                <div className="p-[10px] rounded-[6px] bg-gray max-w-[350px] text-center text-white mb-[40px]">
                    <p>{intro}</p>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}