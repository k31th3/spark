import React from "react";

interface CardButtonProps {
  title: string;
  subtitle: string;
  icon: string; // SVG path
  iconBg: string;
  href: string;
  disabled?: boolean;
}

const CardButton: React.FC<CardButtonProps> = ({
  title,
  subtitle,
  icon,
  iconBg,
  href,
  disabled = false,
}) => {
  return (
    <a
      href={disabled ? undefined : href}
      aria-disabled={disabled}
      className={`
        group relative flex w-full sm:w-[380px] h-[140px]
        rounded-3xl
        bg-[#F3F4F4] p-3 text-left
        transition-all duration-300
        hover:-translate-y-1
        opacity-60
        ${
          disabled
            ? "opacity-60 cursor-not-allowed pointer-events-none"
            : "hover:opacity-100 cursor-pointer"
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div
          className={`${iconBg} sm:w-14 w-12 sm:h-14 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
        >
          {
            icon ?? 
            <img src={icon} alt={title} className="w-8 h-8" /> 
          }
          
        </div>

        <div className="py-2">
          <h2 className="sm:text-1xl text-sm font-bold">{title}</h2>
          <p className="text-dark group-hover:text-gray-500 text-[10px] sm:text-sm group-hover:text-xs 
            transition-all duration-300">{subtitle}</p>
        </div>

      </div>

      <div className="absolute bottom-3 right-3">
        <span
          className="
            inline-flex items-center gap-2
            rounded-full bg-white px-4 py-2
            sm:text-sm text-xs shadow
            transition-all duration-300
          "
        >
          Learn more
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </a>
  );
};

export default CardButton;