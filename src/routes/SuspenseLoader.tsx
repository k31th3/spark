import { Suspense, useEffect, useState } from "react";
import { PageLoader } from "@/components";

function Loader({ children }: { children: React.ReactNode }) {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (showLoader) {
        return <PageLoader />;
    }

    return children;
}

export default function SuspenseLoader({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Suspense fallback={<PageLoader />}>
            <Loader>{children}</Loader>
        </Suspense>
    );
}