import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface WorkCardProps {
  heading: string;
  url: string;
  title: string;
  image_src: string;
  text: string;
}

export default function WorkCard({
  heading,
  url,
  title,
  image_src,
  text,
}: WorkCardProps) {
  return (
    <div
      className="
        flex flex-col items-start
        gap-y-6 sm:gap-y-8 lg:gap-y-[30px]
        pb-12 sm:pb-16 lg:pb-[80px]
        border-b border-gray
        lg:border-l lg:border-l-gray
        lg:first:border-l-0
      "
    >
      {/* Heading */}
      <div className="w-full border-b border-gray px-5 py-5 sm:px-6 sm:py-6 lg:px-10 lg:py-6">
        <p className="text-base sm:text-lg lg:text-[20px] text-headinggray">
          {heading}
        </p>
      </div>

      {/* Content */}
      <div
        className="
          flex w-full flex-col items-center
          gap-y-5 sm:gap-y-6
          px-5 sm:px-6 lg:px-10
        "
      >
        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-md">
          <Image
            src={image_src}
            width={560}
            height={346}
            alt={title}
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Resource */}
        <div className="flex w-full flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          {/* Title + URL */}
          <div className="flex min-w-0 flex-col items-start gap-y-2.5">
            <p className="text-base sm:text-lg text-white">
              {title}
            </p>

            <span
              className="
                max-w-full
                truncate
                rounded-[6px]
                bg-gray
                px-3 py-2
                text-sm sm:text-base
                text-headinggray
              "
            >
              {url}
            </span>
          </div>

          {/* Arrow */}
          <div
            className="
              flex h-[46px] w-[46px]
              shrink-0 items-center justify-center
              rounded-[6px]
              bg-gray
              cursor-pointer
              transition-colors
              hover:bg-checkbox
            "
          >
            <ArrowUpRight size={24} color="#9EFF00" />
          </div>
        </div>

        {/* Description */}
        <div className="w-full text-left">
          <p className="text-sm leading-6 sm:text-base text-headinggray">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
