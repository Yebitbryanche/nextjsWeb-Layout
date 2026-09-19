import { servicedata1 } from "@/lib/ServiceData/service1";
import Services from "@/components/cards/services";
import SectionHeader from "@/app/ui/section Headers/Sections";
import ServiceLayout from "@/app/ui/ServiceLaout/Servicelayout";
import GetStartedSection from "@/app/ui/GetStartedLayout/Getstarted";

export default function ServivcePage(){
    return(
        <div className="md:mx-[80px] mx-[16px] ">
            <SectionHeader 
            heading="Our Services" 
            text="Transform your brand with our innovative digital solutionsthat captivate and engage your audience."
            bg_url="/section%20bg.svg"
            />
            <div className="border-x-1 border-x-gray">
                <ServiceLayout
                heading="Design"
                text="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. "
                intro="Our design services include:"
                >
                    <Services title="User Experience (UX) Design" data={servicedata1}/>
                    <Services title="User Interface (UI) Design" data={servicedata1}/>
                    <Services title="Branding and Identity" data={servicedata1}/>
                </ServiceLayout>


            </div>

            <div className="border-x-1 border-x-gray">
                <ServiceLayout
                heading="Engineering"
                text="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
                intro="Our engineering services include:"
                >
                    <Services title="Web Development" data={servicedata1}/>
                    <Services title="Mobile App Development" data={servicedata1}/>
                    <Services title="Custom Software Development" data={servicedata1}/>
                </ServiceLayout>


            </div>

            <div className="border-x-1 border-x-gray">
                <ServiceLayout
                heading="Project Management"
                text="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. "
                intro="Our design services include:"
                >
                    <Services title="User Experience (UX) Design" data={servicedata1}/>
                    <Services title="User Interface (UI) Design" data={servicedata1}/>
                    <Services title="Branding and Identity" data={servicedata1}/>
                </ServiceLayout>


            </div>

            {/* Start Project Section */}
            <GetStartedSection 
                heading="Let us Bring your Ideas to Life in the Digital World."
                description=" No matter which services you choose, we are committed to 
                            delivering exceptional results that exceed your expectations. 
                            Our multidisciplinary team works closely together to ensure 
                            seamless collaboration and a unified vision for your digital product."/>
            
        </div>
    )
}