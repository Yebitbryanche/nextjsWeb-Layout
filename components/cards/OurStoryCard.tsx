export default function OurStoryCard({
  number,
  aspect,
  description,
}: {
  number: string;
  aspect: string;
  description: string;
}) {
  return (
    <div className="md:px-[40px] md:py-[80px] px-[24px] py-[40px] flex flex-col gap-y-[40px] 
        border-b border-gray
        lg:border-l lg:border-l-gray
        lg:first:border-l-0">
      <div className="flex w-full items-end gap-x-[14px]">
        
        {/* Number */}
        <p className="m-0 p-0 md:text-[120px] text-[80px] leading-none text-secondary">
          {number}
        </p>

        {/* Aspect + extending border */}
        <div className="flex-1 border-b border-b-gray pb-[20px]">
          <p className="m-0 md:text-[26px] text-[22px] text-secondary">
            {aspect}
          </p>
        </div>

      </div>

      {/* Description */}
      <div>
        <p className="text-headinggray">
          {description}
        </p>
      </div>
    </div>
  );
}