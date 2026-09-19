"use client";

import { motion } from "motion/react";

interface SectionProps {
  heading: string;
  text: string;
  bg_url: string;
}

export default function SectionHeader({
  heading,
  text,
  bg_url,
}: SectionProps) {
  return (
    <div>
      <div className="relative">
        {/* Background */}
        <div
          className="relative bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("${bg_url}")`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 z-10" />

          {/* Content */}
          <div
            className="
              relative
              z-20
              flex
              flex-col
              items-center
              px-[16px]
              py-[50px]
              md:px-[200px]
              md:py-[100px]
            "
          >
            {/* Animated heading */}
            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-white font-semibold text-center text-[28px] md:text-[48px]"
            >
              {heading}
            </motion.p>

            {/* Animated description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="text-text text-[14px] text-center max-w-[600px]"
            >
              {text}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}