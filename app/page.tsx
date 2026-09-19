'use client'

import Image from "next/image"
import TextContainer from "../components/buttons/text-container"
import ButtonOutline from "../components/buttons/button-outline"
import Button from "../components/buttons/contact-button"
import ServiceCard from "../components/cards/Service-card"
import SectionHeader from "./ui/section Headers/Sections"
import SquareUpCard from "../components/cards/SquareUpCard"
import { ReviewData } from "../lib/HomeData/ClientReviewData"
import { AnimatedCardData } from "../lib/HomeData/animatedCardData"
import ClientReview from "../components/cards/ClientReview"
import { div } from "motion/react-client"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import InputField from "../components/inputs/ContactField"
import Checkbox from "../components/inputs/checkbox"
import RangeSlider from "../components/inputs/Range"
import GetStartedSection from "./ui/GetStartedLayout/Getstarted"



export default function Page(){
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [accepted, setAccepted] = useState(false)

  const viewResponse = (id:number) => {
    setActiveCard((current_id) =>(current_id ? null : id))
  }

  return(
    <div className="relative">

      {/** Hero section */}
      <div
        className="
          relative
          md:bg-[url('/Hero%20Section.svg')]
          md:bg-center
          md:bg-no-repeat
          md:mx-[80px]
          md:h-[85vh]
          md:border-x
          md:border-x-[#262626]
          md:border-b
          md:border-b-[#262626]

          bg-[url('/Hero%20Section.svg')]
          h-[80vh]
          bg-center
          bg-no-repeat
        ">

        {/* Abstract design */}
        <Image
          className="absolute bottom-0 left-0 w-full object-cover"
          src="/Abstract Design.svg"
          width={1280}
          height={402}
          alt="abstract design"
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-[80px] gap-y-[30px]">

          <div className="flex flex-col items-center">
            <p className="md:text-[48px] text-[34px] text-center font-semibold text-white">
              A Digital Product Studio that will Work
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block px-[30px] py-[18px] rounded-[8px] border border-gray backdrop-blur-lg">
            <span className="flex flex-row items-center gap-x-[6px]">
              <p className="text-text text-[18px]">For</p>
              <p className="text-text text-[18px]">,</p>

              <TextContainer text="Startups" />

              <p className="text-text text-[18px]">,</p>

              <TextContainer text="Enterprise Leaders" />

              <p className="text-text text-[18px]">,</p>

              <TextContainer text="Media & Publishers" />

              <p className="text-text text-[18px]">and</p>

              <TextContainer text="Social Good" />
            </span>
          </div>

          {/* Mobile */}
          <div className="md:hidden px-[20px] py-[18px] mx-[16px] rounded-[8px] border border-gray backdrop-blur-lg">
            <p className="text-[16px] text-text">
              For startups, enterprise leaders, media & publishers, and social good.
            </p>
          </div>

          <div className="flex flex-row gap-x-[13px]">
            <ButtonOutline text="Our Works" href="/works" />
            <Button text="Contact Us" href="/contact" />
          </div>
        </div>

        {/* TRUSTED BY PILL */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            translate-y-1/2

            z-20

            w-max
            max-w-[calc(100%-32px)]
            h-[40px]

            px-[14px]
            py-[8px]

            rounded-full
            border
            border-gray
            bg-[#1A1A1A]

            flex
            items-center
            justify-center
          "
        >
          <p className="text-text font-medium text-[14px] whitespace-nowrap">
            Trusted By 250+ Companies
          </p>
        </div>
      </div>

      <div className="md:py-[30px] md:mx-[80px] md:grid md:grid-cols-6 md:items-center md:border-x-[1px] md:border-x-gray  mx-[16px] grid grid-cols-2">

        <div className=" md:flex md:justify-center md:px-[30px] md:py-[16px] md:border-none flex justify-center px-[30px] py-[30px] border-[1px] border-gray">
          <Image
            src='/Logo.svg'
            width={111}
            height={40}
            alt="sponsors"
            />
        </div>


        <div className=" md:flex md:justify-center md:px-[30px] md:py-[16px] md:border-none flex justify-center px-[30px] py-[30px] border-[1px] border-gray">
          <Image
            src='/Logo (1).svg'
            width={111}
            height={40}
            alt="sponsors"
            />
        </div>

        <div className=" md:flex md:justify-center md:px-[30px] md:py-[16px] md:border-none flex justify-center px-[30px] py-[30px] border-[1px] border-gray">
          <Image
            src='/Logo (2).svg'
            width={111}
            height={40}
            alt="sponsors"
            />
        </div>

        <div className=" md:flex md:justify-center md:px-[30px] md:py-[16px] md:border-none flex justify-center px-[30px] py-[30px] border-[1px] border-gray">
          <Image
            src='/Logo (3).svg'
            width={111}
            height={40}
            alt="sponsors"
            />
        </div>

        <div className=" md:flex md:justify-center md:px-[30px] md:py-[16px] md:border-none flex justify-center px-[30px] py-[30px] border-[1px] border-gray">
          <Image
            src='/Logo (4).svg'
            width={111}
            height={40}
            alt="sponsors"
            />
        </div>

        <div className=" md:flex md:justify-center md:px-[30px] md:py-[16px] md:border-none flex justify-center px-[30px] py-[30px] border-[1px] border-gray">
          <Image
            src='/Logo (5).svg'
            width={111}
            height={40}
            alt="sponsors"
            />
        </div>

      </div>


      {/** first section for the landing page*/}
      <div className="md:mx-[80px] mx-[16px]">
        <SectionHeader 
          heading="Our Services" 
          text="Transform your brand with our innovative digital solutionsthat captivate and engage your audience."
          bg_url="/section%20bg.svg"
        />

        <div className="md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 md:items-stretch md:items-center grid frid-cols-1">
          <ServiceCard icon="/icon.svg" title="Design" text="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences." />
          <ServiceCard icon="/icon (1).svg" title="Engineering" text="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs." />
          <ServiceCard icon="/icon (2).svg" title="Project Management" text="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you" />
        </div>
      </div>

      {/** Second section for landing page */}
      <div className="md:mx-[80px] mx-[16px]">
        <SectionHeader  
          heading="Why Choose SquareUp?" 
          text="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
          bg_url="/Text%20Container.svg"
        />

        <div className="md:grid md:grid-cols-2 md:items-stretch md:items-center grid frid-cols-1">
          <SquareUpCard
            title="Expertise"
            icon_url="/medal.svg"
            text="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          />
          <SquareUpCard
            title="Client-Centric Approach"
            icon_url="/people.svg"
            text="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
          />
          <SquareUpCard
            title="Results-Driven Solutions"
            icon_url="/shield.svg"
            text="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          />
          <SquareUpCard
            title="Collaborative Partnership"
            icon_url="/crown.svg"
            text="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
          />
        </div>
      </div>

      {/** client Review Section */}
      <div className="md:mx-[80px] mx-[16px]">
        <SectionHeader
          heading="What our Clients say About us"
          text="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
          bg_url="/review%20section%20bg.svg"
        />

        <div className="md:grid md:grid-cols-2 md:items-stretch md:items-center grid frid-cols-1">
          {ReviewData.map((item, index) => (
            <ClientReview
              key={index}
              heading={item.heading}
              review={item.review}
              profilea_url={item.client_imgURL}
              name={item.client_name}
              position={item.client_position}/>
          ))}
        </div>
      </div>

        {/** FAQ section */}
      <div className="md:mx-[80px] mx-[16px]">
        <SectionHeader
          heading="Frequently Asked Questions"
          text="Still you have any questions? Contact our Team via hello@squareup.com"
          bg_url="/text%20bg.svg"
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="md:py-[60px] border-l border-gray">
            {AnimatedCardData.slice(0, 4).map((data) => {
              const isActive = activeCard === data.id;

              return (
                <div
                  key={data.id}
                  className="
                    flex
                    gap-x-[20px]
                    px-[30px]
                    md:px-[40px]
                    py-[24px]
                    border-b
                    border-r
                    border-gray
                  "
                >
                  {/* Number */}
                  <div
                    className="
                      flex
                      h-[50px]
                      w-[50px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[6px]
                      bg-gradient-to-b
                      from-[#242424]
                      to-[#191919]
                      text-[18px]
                      text-white
                    "
                  >
                    <p
                      className={`
                        transition-colors
                        duration-300
                        ${isActive ? "text-[#9EFF00]" : "text-white"}
                      `}
                    >
                      {data.id.toString().padStart(2, "0")}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Question */}
                    <div className="flex items-start justify-between gap-x-[20px]">
                      <p
                        className={`
                          text-[16px]
                          md:text-[18px]
                          transition-colors
                          duration-300
                          ${isActive ? "text-[#C5FF66]" : "text-white"}
                        `}
                      >
                        {data.title}
                      </p>

                      {/* Toggle */}
                      <button
                        type="button"
                        onClick={() => viewResponse(data.id)}
                        className="
                          shrink-0
                          cursor-pointer
                          transition-transform
                          duration-300
                        "
                        aria-expanded={isActive}
                      >
                        {isActive ? (
                          <X
                            size={24}
                            color="#C5FF66"
                            className="transition-transform duration-300 rotate-0"
                          />
                        ) : (
                          <Plus
                            size={24}
                            color="white"
                            className="transition-transform duration-300"
                          />
                        )}
                      </button>
                    </div>

                    {/* Animated response */}
                    <div
                      className={`
                        grid
                        transition-[grid-template-rows]
                        duration-500
                        ease-in-out
                        ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                      `}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="
                            mt-[14px]
                            pr-[10px]
                            text-[14px]
                            leading-[1.6]
                            text-[#B3B3B3]
                            opacity-0
                            translate-y-[-8px]
                            transition-all
                            duration-500
                            ease-in-out
                          "
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive
                              ? "translateY(0)"
                              : "translateY(-8px)",
                          }}
                        >
                          {data.response}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:border-l md:border-gray md:pt-[60px]">
            {AnimatedCardData.slice(4, 8).map((data) => {
              const isActive = activeCard === data.id;

              return (
                <div
                  key={data.id}
                  className="
                    flex
                    gap-x-[20px]
                    px-[30px]
                    md:px-[40px]
                    py-[24px]
                    border-b
                    border-r
                    border-gray
                  "
                >
                  {/* Number */}
                  <div
                    className="
                      flex
                      h-[50px]
                      w-[50px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[6px]
                      bg-gradient-to-b
                      from-[#242424]
                      to-[#191919]
                      text-[18px]
                    "
                  >
                    <p
                      className={`
                        transition-colors
                        duration-300
                        ${isActive ? "text-[#9EFF00]" : "text-white"}
                      `}
                    >
                      {data.id.toString().padStart(2, "0")}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Question */}
                    <div className="flex items-start justify-between gap-x-[20px]">
                      <p
                        className={`
                          text-[16px]
                          md:text-[18px]
                          transition-colors
                          duration-300
                          ${isActive ? "text-[#C5FF66]" : "text-white"}
                        `}
                      >
                        {data.title}
                      </p>

                      {/* Toggle */}
                      <button
                        type="button"
                        onClick={() => viewResponse(data.id)}
                        className="shrink-0 cursor-pointer"
                        aria-expanded={isActive}
                      >
                        {isActive ? (
                          <X
                            size={24}
                            color="#C5FF66"
                            className="transition-transform duration-300"
                          />
                        ) : (
                          <Plus
                            size={24}
                            color="white"
                          />
                        )}
                      </button>
                    </div>

                    {/* Animated response */}
                    <div
                      className={`
                        grid
                        transition-[grid-template-rows]
                        duration-500
                        ease-in-out
                        ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                      `}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="
                            mt-[14px]
                            pr-[10px]
                            text-[14px]
                            leading-[1.6]
                            text-[#B3B3B3]
                            transition-all
                            duration-500
                            ease-in-out
                          "
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive
                              ? "translateY(0)"
                              : "translateY(-8px)",
                          }}
                        >
                          {data.response}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {/** Contact section */}
      <div className="mx-[16px] md:mx-[80px]">

        {/* Thank You Section */}
        <GetStartedSection
          heading="Thank you for your Interest in SquareUp."
          description="                  We would love to hear from you and discuss how we can help bring
                  your digital ideas to life. Here are the different ways you can
                  get in touch with us."
        />

        {/* Form */}
        <div className="flex justify-center border border-gray">
          <div
            className="
              w-full
              md:max-w-[846]
              lg:max-w-[1060px]
              p-[20px]
              sm:p-[40px]
              md:p-[60px]
              lg:p-[80px]
              flex flex-col
              gap-y-[30px]
              items-center
              md:border-x-1 
              md:border-gray
            "
           >
            {/* Inputs */}
            <div
              className="
                w-full
                flex flex-col
                gap-[20px]
                md:flex-row
                md:gap-[40px]
              "
            >
              <InputField
                label="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e)}
              />

              <InputField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e)}
              />
            </div>

            <div 
            className="
              w-full md:p-[30px] 
              px-[20px] py-[20px]
              sm:px-[28px] sm:py-[20px]
              bg-contact
              rounded-[8px]
              border-1
              border-gray
              flex flex-col
              gap-y-[30px]
              ">
              <div>
                <p className="text-[18px] text-white">Why are you contacting us?</p>
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:gap-y-[24px] grid grid-cols-1 gap-y-[24px] ">
                <div className="flex gap-x-[10px]">
                  <Checkbox/>
                  <p className="text-text text-[16px]" style={{fontWeight:100}}>Web Desig</p>
                </div>

                <div className="flex gap-x-[10px]">
                  <Checkbox/>
                  <p className="text-text text-[16px]" style={{fontWeight:100}}>Colaboration</p>
                </div>

                <div className="flex gap-x-[10px]">
                  <Checkbox/>
                  <p className="text-text text-[16px]" style={{fontWeight:100}}>Mobile App Desig</p>
                </div>

                <div className="flex gap-x-[10px]">
                  <Checkbox/>
                  <p className="text-text text-[16px]" style={{fontWeight:100}}>Other</p>
                </div>
              </div>
            </div>

            <div 
            className="
              w-full md:p-[30px] 
              px-[20px] py-[20px]
              sm:px-[28px] sm:py-[20px]
              bg-contact
              rounded-[8px]
              border-1
              border-gray
              flex flex-col
              gap-y-[30px]
              ">
              <div className="flex flex-col items-start gap-y-[14px]">
                <p className="text-[18px] text-white">Your Budget</p>
                <p className="text-[16px] text-text">Slide to indicate your budget range</p>
              </div>
              <div>
                <RangeSlider/>
              </div>
            </div>

            <div
              className="
              w-full md:p-[30px] 
              px-[20px] py-[20px]
              sm:px-[28px] sm:py-[20px]
              bg-contact
              rounded-[8px]
              border-1
              border-gray
              flex flex-col
              gap-y-[30px]
              ">
              <div className="flex flex-col items-start gap-y-[14px]">
                <p className="text-[18px] text-white">Your Message</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="
                    w-full
                    mt-[12px]
                    py-[8px]
                    text-sm
                    text-white
                    bg-transparent
                    border-b border-gray
                    outline-none"
                />
              </div>

            </div>
            <Button href="/" text="Submit" />
          </div>
        </div>
        

      </div>


    </div>
  )
}