import React from "react";

interface SectionHeaderProps {
    title: string;
    description?: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    description,
    className = "",
}) => {
    return (
        <div className={`py-6 ${className}`}>
            <h2 className="text-[28px] sm:text-[32px] font-semibold">{title}</h2>

            {description && (
            <p className="text-[12px] sm:text-[14px] text-[#5F6B76]">
              {description}
            </p>
            )}
        </div>
    );
};

export default SectionHeader;