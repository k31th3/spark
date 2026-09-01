import { Text } from "@/components";

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
                <Text variant="label" color="danger">
                    {error}
                </Text>
            )}

            {!error && hint && (
                <p className="mt-1 text-sm text-muted">
                    {hint}
                </p>
            )}
        </div>
    );
}