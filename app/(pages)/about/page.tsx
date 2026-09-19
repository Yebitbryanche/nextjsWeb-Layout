import SectionHeader from "@/app/ui/section Headers/Sections";
import OurStoryCard from "@/components/cards/OurStoryCard";
import { AboutData } from "@/lib/AboutData/AboutData";
import Image from "next/image";

export default function About(){
    return(
        <div>
            <div  className="md:mx-[80px] mx-[16px] border-x-1 border-x-gray">
                <SectionHeader
                    heading="About Us"
                    text="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
                    bg_url="/Text%20Container.svg"
                />
                <div className="md:px-[100px] md:py-[80px] md:flex md:flex-row md:w-full md:justify-center md:items-center md:gap-x-[100px] px-[10px] py-[40px] flex flex-col w-full items-center gap-y-[30px]">
                    <div className="flex-1 flex flex-col gap-y-[20px]">
                        <p className="text-[38px] text-white">
                            About SquareUp
                        </p>
                        <p className="text-text">SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
                    </div>

                    <div className="flex-1">
                        <Image
                            src={'/About.svg'}
                            width={490}
                            height={483}
                            alt="hero image"/>
                    </div>
                </div>

                <div className="flex flex-col gap-y-[80px] pt-[80px] border-t-1 border-t-gray">
                    <div className="px-[50px]">
                        <p className="text-[48px] text-white">Our Story</p>
                    </div>
                    <div className="md:border-t-1 md:border-t-gray md:grid md:grid-cols-2 border-t-1 border-t-gray grid grid-cols-1">
                        {
                            AboutData.map((item, index) => (
                                <OurStoryCard number={item.number} aspect={item.aspect} description={item.description} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}