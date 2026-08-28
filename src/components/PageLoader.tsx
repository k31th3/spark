import { SiteLogo } from "@/components";

export default function PageLoader() {
    return (
        <div
            className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <SiteLogo
                    size="xs"
                    className="animate-[spin_4s_linear_infinite] shadowm-sm"/>

                <p className="text-xs font-medium">
                    Loading...
                </p>
            </div>
        </div>
    );
}