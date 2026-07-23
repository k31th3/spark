import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

type DefaultQueryParams = {
    [path: string]: Record<string, string>;
};

const DEFAULT_QUERY_PARAMS: DefaultQueryParams = {
    "/services": {
        tab: "0",
    },
};

function DefaultQueryWrapper() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const defaults = DEFAULT_QUERY_PARAMS[location.pathname];

        if (!defaults) return;

        const params = new URLSearchParams(location.search);
        let hasChanges = false;

        Object.entries(defaults).forEach(([key, value]) => {
            if (!params.has(key)) {
                params.set(key, value);
                hasChanges = true;
            }
        });

        if (hasChanges) {
            navigate(
                `${location.pathname}?${params.toString()}`,
                { replace: true }
            );
        }
    }, [location.pathname, location.search, navigate]);

    return <Outlet />;
}

export default DefaultQueryWrapper;