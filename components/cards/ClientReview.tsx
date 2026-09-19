
import Image from "next/image"
interface ClientReviewProps{
    heading:string
    review:string
    name:string 
    position:string 
    profilea_url:string
}

export default function ClientReview({
    heading, 
    review, 
    name, 
    position, 
    profilea_url}
    :
    ClientReviewProps){
        return(
            <div className="md:px-[60px] p-[30px] md:py-[80px] border-[1px] border-gray flex flex-col gap-y-[30px]">
                <div className="flex flex-col gap-y-[20px]">
                    <p className="text-[20px] font-medium text-[#D8FF99]">{heading}</p>
                    <p className="text-text text-[16px]">{review}</p>
                </div>
                <div className="rounded-[6px] border-[1px] border-gray flex justify-between gap-x-[6px] p-[14px] items-center">
                    <div className="flex-[3/4] flex gap-x-[12px]">
                        <Image
                            src={profilea_url}
                            width={50}
                            height={50}
                            alt="profiles"
                        />
                        <div>
                            <p className="text-[16px] font-medium text-white">{name}</p>
                            <p className="text-[14px] font-light text-text">{position}</p>
                        </div>
                    </div>
                    <button className="flex-[1/4] p-[16px] rounded-[6px] bg-gray cursor-pointer md:block hidden">
                        <p className="text-text">Open Website</p>
                    </button>
                </div>
            </div>
        )

}