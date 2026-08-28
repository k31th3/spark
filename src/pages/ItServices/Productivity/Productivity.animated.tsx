
import { useEffect, useRef, useState } from "react";

interface Props {
    value: string;
    duration?: number;
}

function Animated({
    value,
    duration = 2500
}: Props) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                observer.disconnect();

                const match = value.match(/[\d.]+/);

                if (!match) return;

                const target = parseFloat(match[0]);
                const startTime = performance.now();

                const animate = (currentTime: number) => {
                    const progress = Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                    const easedProgress =
                        1 - Math.pow(1 - progress, 3);

                    const current = target * easedProgress;

                    setCount(current);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };

                requestAnimationFrame(animate);
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [value, duration]);

    const suffix = value.replace(/[\d.]+/, "");

    const formatted = value.includes(".")
        ? count.toFixed(1)
        : Math.floor(count).toString();

    return (
        <span ref={ref}>
            {formatted}
            {suffix}
        </span>
    );
}

export default Animated;
