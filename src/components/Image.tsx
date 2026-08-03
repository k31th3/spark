import {
    ImgHTMLAttributes,
    useEffect,
    useState
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
    className,
    style,
    ...props
}: ImageProps) {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
    }, [src]);

    return (
        <div
            className={className}
            style={{
                position: "relative",
                overflow: "hidden",
                ...style
            }} >

        {!loaded &&
            (placeholder ?? (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    minHeight: 120,
                    background: "#e5e7eb",
                    animation: "pulse 1.5s infinite",
                }}
            />
        ))}

        <img
            {...props}
            src={src}
            alt={alt}
            decoding={decoding}
            draggable={draggable}
            fetchPriority={fetchPriority}
            onContextMenu={(e) => {
                e.preventDefault();
                onContextMenu?.(e);
            }}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
            style={{
                width: "100%",
                height: "100%",
                display: loaded ? "block" : "none"
            }} />
        </div>
    );
}