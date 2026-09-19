'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Button from "../../../components/buttons/contact-button"
import clsx from 'clsx'
import * as motion from "motion/react-client"
import { X } from "lucide-react"

export default function NavBar(){

    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname();

    const handleOpendMoblemenu = () => {
        setOpen(true)
    }

    const handleCloseMobilemenu =  () => {
        setOpen(false)
    }

    const nav_data = [
        {name:"Home", href:"/"},
        {name:"Service",href:"/service"},
        {name:"Work",href:"/work"},
        {name:"About",href:"/about"},
        {name:"Careers", href:"/careers"},
    ]

    return(
        <nav className="md:flex md:flex-row md:justify-between md:px-[80] md:py-[20] md:items-center md:border-[1px] md:border-b-[#262626] flex flex-row justify-between px-[16px] pt-[40px] pb-[20px] items-center border-[1px] border-b-[#262626]">
            <div className="cursor-pointer">
                <Image
                src='/logo.png'
                width={118.48}
                height={40}
                alt="Logo"/>
            </div>
            <div className="md:flex md:flex-row md:gap-x-12 md:items-center hidden">
                {
                    nav_data.map((item, index) => (
                        <div key={index} className={clsx({'md:w-[80px] md:h-[45px] md:px-[22px] md:py-[12px] md:bg-[#262626] md:rounded-[6px]':pathname === item.href})}>
                            <Link href={item.href} className={clsx("md:text-text md:text-[14px] md:text-center",{ 'md:text-white md:font-semibold md:text-center': pathname === item.href})}>{item.name}</Link>
                        </div>
                    ))
                }
            </div>
            <div className="md:cursor-pointer md:block hidden">
                <Button text="Contact Us" href="/contact"/>
            </div>

            <div 
                onClick={handleOpendMoblemenu}
                className="md:hidden block bg-[#262626] p-[6px] rounded-[6px]">
                <Image
                    src='/Icon.png'
                    width={34}
                    height={34}
                    alt="Hambuger menu"
                />
            </div>
            {
                isOpen && 
                    <motion.div 
                        className="bg-[#1A1A1A] fixed h-screen bottom-0 right-0 w-[80%] z-50 p-[16px] md:hidden block">
                        <div onClick={handleCloseMobilemenu} className="py-[14px] flex justify-end">
                        <X className="text-2xl text-primary float-rigth" />
                        </div>
                        {nav_data.map((item, index) => (
                            <div key={index} className="p-[14px] border-y-1 border-y-gray">
                                <Link href={item.href} className="text-text">{item.name}</Link>
                            </div>
                        ))}
                        <div className="max-w-[50%] py-[14px]">
                            <Button text="Contact Us" href="/contact" />
                        </div>
                    </motion.div>
            }
        </nav>
    )
}