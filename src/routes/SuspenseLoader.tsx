import { Suspense, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { PageLoader } from "@/components";

/* =========================================================
   HOW LONG THE LOADING SCREEN STAYS (MS)
========================================================= */

const LOADER_DURATION = 1000;

/* =========================================================
   LOADER
========================================================= */

function Loader({
    children,
    resetScroll,
}: {
    children: React.ReactNode;
    resetScroll: boolean;
}) {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        if (resetScroll) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant" as ScrollBehavior,
            });
        }
    }, [resetScroll]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, LOADER_DURATION);

        return () => clearTimeout(timer);
    }, []);

    if (showLoader) {
        return <PageLoader />;
    }

    return children;
}

/* =========================================================
   SUSPENSE LOADER
========================================================= */

export default function SuspenseLoader({
    children,
}: {
    children: React.ReactNode;
}) {
    const { pathname } = useLocation();

    const isFirstLoad = useRef(true);

    useEffect(() => {
        isFirstLoad.current = false;
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Loader
                key={pathname}
                resetScroll={!isFirstLoad.current}
            >
                {children}
            </Loader>
        </Suspense>
    );
}