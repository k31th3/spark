import { Text } from "@/components";
import type {
    RadioProps
} from "./Radio.types";

export default function Radio({
    label,
    error,

    id,
    className,

    ...props
}: RadioProps) {
    return (
        <div className="w-full">

            <label
                htmlFor={id}
                className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                "
            >
                <input
                    id={id}
                    type="radio"
                    className={className}
                    {...props}
                />

                {label && (
                    <span className="text-sm text-foreground">
                        {label}
                    </span>
                )}
            </label>

            {error && (
                <Text variant="label" color="danger">
                    {error}
                </Text>
            )}
        </div>
    );
}