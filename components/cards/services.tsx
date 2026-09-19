import IconCard from "./IconCard"

type ServiceDataTypes = {
  text: string
  url: string
}

interface ServiceProps {
  title: string
  data: ServiceDataTypes[]
}

export default function Services({ title, data }: ServiceProps) {
  return (
    <div className="flex flex-col">
      <p className="md:text-[22px] md:text-start text-center text-[20px] text-headinggray px-[40px] py-[40px]">{title}</p>
      
      {/* Container with top and bottom borders */}
      <div className="md:border-y md:border-[#262626] md:grid md:grid-cols-4 border-y border-[#262626] grid grid-cols-2">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="md:p-[40px] md:border-r md:border-gray md:flex md:flex-col md:gap-y-[24px] md:last:border-r-0 p-[20px] border-1 border-gray flex flex-col gap-y-[20px] last:border-0 first:border-0"
          >
            <IconCard icon_url={item.url} />
            <p className="text-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}