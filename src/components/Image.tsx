import {
    ImgHTMLAttributes
} from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    placeholder?: React.ReactNode;
}

export default function Image({
    src,
    alt = "",
    decoding = "sync",
    draggable = false,
    fetchPriority = "high",
    placeholder,
    onContextMenu,
    style,
    ...props
}: ImageProps) {
    return (
        <div>
        <img
            src={src}
            alt={alt}
            decoding={decoding}
            draggable={draggable}
            fetchPriority={fetchPriority}
            onContextMenu={(e) => {
                e.preventDefault();
                onContextMenu?.(e);
            }}
            {...props} />
        </div>
    );
}