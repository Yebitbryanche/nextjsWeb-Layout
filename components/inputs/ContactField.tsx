interface InputProps {
  label: string;
  value: string;
  onChange: (a: string) => void;
}

export default function InputField({
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div
      className="
        w-full
        px-[20px] py-[20px]
        sm:px-[28px] sm:py-[20px]
        md:px-[30px] md:py-[20px]
        rounded-[8px]
        border border-gray
        bg-contact
      "
    >
      <p className="text-[18px] sm:text-[20px] md:text-[18px] text-white font-medium">
        {label}
      </p>

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
          outline-none
        "
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}