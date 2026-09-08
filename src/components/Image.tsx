import { useEffect, useState } from "react";
import type {
    ImgHTMLAttributes,
    ReactNode,
} from "react";

import { cn } from "@/lib/utils";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    placeholder?: ReactNode;
    skeleton?: boolean;
    wrapperClassName?: string;
}

export default function Image({
    src,
    alt = "",
    decoding = "async",
    draggable = false,
    fetchPriority = "auto",
    loading = "lazy",
    placeholder,
    skeleton = true,
    wrapperClassName = "",
    onLoad,
    onError,
    onContextMenu,
    style,
    ...props
}: ImageProps) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoaded(false);
        setError(false);
    }, [src]);

    const isBreakout =
        typeof props.className === "string" &&
        /\b(?:absolute|fixed|sticky)\b/.test(props.className);

    return (
        <div className={cn(isBreakout ? "" : "relative", wrapperClassName)}>

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
                loading={loading}
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