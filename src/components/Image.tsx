import type {
    ImgHTMLAttributes,
    ReactNode,
} from "react";
import { useState } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    placeholder?: ReactNode;
    skeleton?: boolean;
}

export default function Image({
    src,
    alt = "",
    decoding = "async",
    draggable = false,
    fetchPriority = "auto",
    placeholder,
    skeleton = true,
    onLoad,
    onError,
    onContextMenu,
    style,
    ...props
}: ImageProps) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div>
            
            {/* Skeleton */}
            {skeleton && !loaded && !error && (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 animate-pulse bg-gray-200"
                />
            )}

            {/* Placeholder */}
            {!loaded && !error && placeholder && (
                <div className="absolute inset-0">
                    {placeholder}
                </div>
            )}

            <img
                {...props}
                src={src}
                alt={alt}
                decoding={decoding}
                draggable={draggable}
                onLoad={(e) => {
                    setLoaded(true);
                    onLoad?.(e);
                }}
                onError={(e) => {
                    setError(true);
                    onError?.(e);
                }}
                onContextMenu={(e) => {
                    e.preventDefault();
                    onContextMenu?.(e);
                }}
                style={{
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 200ms ease",
                    ...style,
                }}
                ref={(node) => {
                    if (node) {
                        node.setAttribute(
                            "fetchpriority",
                            fetchPriority
                        );
                    }
                }}
            />

            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <span className="text-sm text-gray-400">
                        Unable to load image
                    </span>
                </div>
            )}
        </div>
    );
}
