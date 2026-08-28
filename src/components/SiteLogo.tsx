import Logo from "@/assets/siteLogo.webp";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
    size?: "xs"| "sm" | "md" | "lg";
    className?: string;
};

const sizeMap = {
    xs: 25,
    sm: 32,
    md: 40,
    lg: 56
};

export default function SiteLogo({
    size = "md",
    className = "",
}: SiteLogoProps) {
    const dimension = sizeMap[size];

    return (
        <img
            src={Logo}
            alt="Site Logo"
            width={dimension}
            height={dimension}
            className={cn(`rounded-full object-cover`, className)}
            onContextMenu={(e) => e.preventDefault()}/>
    );
}