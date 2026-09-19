export default function Checkbox(){
    return(
        <label className="relative inline-flex cursor-pointer">
            <input
                type="checkbox"
                className="
                peer
                appearance-none
                w-[28px] h-[28px]
                rounded-[4px]
                border-1
                border-gray
                bg-contact
                cursor-pointer
                "
            />

            <svg
                className="
                absolute
                left-[5px]
                top-[6px]
                w-[16px]
                h-[16px]
                opacity-0
                peer-checked:opacity-100
                text-primary
                pointer-events-none
                "
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <path d="M5 12l4 4L19 6" />
            </svg>
        </label>
    )
}