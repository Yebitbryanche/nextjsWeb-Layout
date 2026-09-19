import GetStartedSection from "@/app/ui/GetStartedLayout/Getstarted";
import SectionHeader from "@/app/ui/section Headers/Sections";
import ServiceLayout from "@/app/ui/ServiceLaout/Servicelayout";
import WorkCard from "@/components/cards/WorkCard";
import { WorkData } from "@/lib/WorkData/Workdata";

export default function WorkPage(){
    return(
        <div className="md:mx-[80px] mx-[16px]">
            <div className="border-x-1 border-gray pt-[40px]">
                <SectionHeader 
                    bg_url="/section%20bg.svg" 
                    heading="Our Works" 
                    text="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."/>

                <ServiceLayout
                    heading="At SquareUp"
                    text="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
                    intro="Here are ten examples of our notable works:"
                >
                    <div className="lg:grid lg:grid-cols-2 grid grid-cols-1">
                        {
                            WorkData.map((item, index) => (
                                <WorkCard 
                                    key={index}
                                    heading={item.heading} 
                                    title={item.title} 
                                    url={item.url} 
                                    image_src={item.image_src} 
                                    text={item.text} />
                            ))
                        }
                    </div>
                </ServiceLayout>
                <GetStartedSection
                    heading="Let us Bring your Ideas to Life in the Digital World."
                    description="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
                />
            </div>
        </div>
    )
}