import type {
    ErrorProps
} from "./Error.types";

export default function Error({
    children,
}: ErrorProps) {
    if (!children) {
        return null;
    }

    return (
        <p className="mt-1 text-sm text-red-500">
            {children}
        </p>
    );
}