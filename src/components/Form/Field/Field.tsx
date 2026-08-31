import type {
    FieldProps,
} from "./Field.types";

export default function Field({
    error,
    hint,
    children,
}: FieldProps) {
    return (
        <div className="w-full">
            {children}

            {error && (
                <p className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            )}

            {!error && hint && (
                <p className="mt-1 text-sm text-muted">
                    {hint}
                </p>
            )}
        </div>
    );
}