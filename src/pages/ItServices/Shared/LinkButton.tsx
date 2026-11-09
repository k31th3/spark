import type { ComponentProps, MouseEvent, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components";

type ButtonBase = ComponentProps<typeof Button>;

interface Props {
    to: string;
    variant?: ButtonBase["variant"];
    size?: ButtonBase["size"];
    glow?: boolean;
    roll?: boolean;
    arrow?: ButtonBase["arrow"];
    icon?: ReactNode;
    className?: string;
    children: ReactNode;
}

function LinkButton({ to, ...props }: Props) {
    const navigate = useNavigate();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        navigate(to);
    };

    return <Button href={to} onClick={handleClick} {...props} />;
}

export default LinkButton;