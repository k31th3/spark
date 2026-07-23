import { SiteLogo } from "@/components";

export default function PageLoader() {
    return (
        <div
            className="flex min-h-screen items-center justify-center">
            {/*style={{
                background: `
                    radial-gradient(circle at 42% 65%, #b77cff 0%, transparent 22%),
                    radial-gradient(circle at 68% 35%, #ffd39b 0%, transparent 18%),
                    linear-gradient(135deg, #fdf4ff, #fff7ed)`
                }}*/}
            <div className="flex flex-col items-center gap-4">
                <SiteLogo
                    width={25}
                    height={25}
                    className="animate-[spin_4s_linear_infinite] shadowm-sm"/>

                <p className="text-xs font-medium">
                    Loading...
                </p>
            </div>
        </div>
    );
}