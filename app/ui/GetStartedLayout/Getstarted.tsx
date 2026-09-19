import Image from "next/image"
import Button from "@/components/buttons/contact-button"

export default function GetStartedSection({heading, description}:{heading:string, description:string}){
    return(
        <div className="relative">
            <div
                className="relative bg-center bg-no-repeat bg-cover rounded-t-[8px]"
                style={{
                backgroundImage: `url("/Text%20Container.svg")`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 z-10" />

                {/* Content */}
                <div
                className="
                    relative z-20
                    flex flex-col items-center
                    px-[16px] py-[50px]
                    gap-y-[40px]
                    sm:px-[40px]
                    md:px-[100px] md:py-[80px]
                    lg:px-[200px] lg:py-[100px]
                "
                >
                <Image
                    src="/appLogo.svg"
                    width={60}
                    height={60}
                    alt="app logo"
                />

                <div className="flex flex-col items-center">
                    <p
                    className="
                        text-white font-semibold text-center
                        text-[28px]
                        sm:text-[36px]
                        md:text-[30px]
                    "
                    >
                    {heading}
                    </p>

                    <p
                    className="
                        text-text text-[14px] text-center
                        max-w-[600px]
                        mt-[12px]
                    "
                    >
                        {description}
                    </p>
                </div>

                <Button href="/" text="Start Project" />
                </div>
            </div>
        </div>
    )
}