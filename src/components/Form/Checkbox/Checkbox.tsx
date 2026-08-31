import type {
    CheckboxProps
} from "./Checkbox.types";

export default function Checkbox({
    label,
    error,

    id,
    className,

    ...props
}: CheckboxProps) {
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
                    type="checkbox"
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
                <p className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}