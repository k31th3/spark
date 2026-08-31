import type {
    LabelProps
} from "./Label.types";

export default function Label({
    htmlFor,
    required,
    children,
}: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className="
                mb-2
                block
                text-sm
                font-medium
                text-foreground
            "
        >
            {children}

            {required && (
                <span className="ml-1 text-red-500">
                    *
                </span>
            )}
        </label>
    );
}