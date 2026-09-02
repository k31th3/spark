import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

export type TurnstileRef = {
    execute: () => void;
    reset: () => void;
};

type TurnstileProps = {
    siteKey: string;
    action?: string;
    theme?: "light" | "dark" | "auto";
    onSuccess?: (token: string) => void;
    onError?: (error: unknown) => void;
    onExpire?: () => void;
};

const Turnstile = forwardRef<
    TurnstileRef,
    TurnstileProps
>(
    function Turnstile(
        {
            siteKey,
            action = "contact",
            theme = "auto",
            onSuccess,
            onError,
            onExpire,
        },
        ref
    ) {
        const containerRef =
            useRef<HTMLDivElement>(null);

        const widgetIdRef =
            useRef<string | null>(null);

        /*
         * Keep callbacks updated without
         * forcing Turnstile to re-render.
         */
        const callbacksRef = useRef({
            onSuccess,
            onError,
            onExpire,
        });

        useEffect(() => {
            callbacksRef.current = {
                onSuccess,
                onError,
                onExpire,
            };
        }, [
            onSuccess,
            onError,
            onExpire,
        ]);

        useImperativeHandle(ref, () => ({
            execute() {
                if (
                    widgetIdRef.current !== null &&
                    window.turnstile
                ) {
                    window.turnstile.execute(
                        widgetIdRef.current
                    );
                }
            },

            reset() {
                if (
                    widgetIdRef.current !== null &&
                    window.turnstile
                ) {
                    window.turnstile.reset(
                        widgetIdRef.current
                    );
                }
            },
        }));

        useEffect(() => {
            const renderTurnstile = () => {
                if (
                    !window.turnstile ||
                    !containerRef.current
                ) {
                    return;
                }

                /*
                 * Do not render another widget
                 * if one already exists.
                 */
                if (
                    widgetIdRef.current !== null
                ) {
                    return;
                }

                widgetIdRef.current =
                    window.turnstile.render(
                        containerRef.current,
                        {
                            sitekey: siteKey,
                            action,
                            theme,

                            /*
                             * Visible checkbox
                             */
                            appearance: "always",
                            execution: "render",

                            callback: (token) => {
                                console.log(
                                    "Turnstile success"
                                );

                                callbacksRef.current
                                    .onSuccess?.(
                                        token
                                    );
                            },

                            "error-callback": (
                                error
                            ) => {
                                console.error(
                                    "Turnstile error:",
                                    error
                                );

                                callbacksRef.current
                                    .onError?.(
                                        error
                                    );
                            },

                            "expired-callback": () => {
                                callbacksRef.current
                                    .onExpire?.();
                            },
                        }
                    );
            };

            if (window.turnstile) {
                renderTurnstile();
                return;
            }

            const script =
                document.createElement("script");

            script.src =
                "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

            script.async = true;
            script.defer = true;

            script.onload =
                renderTurnstile;

            document.body.appendChild(
                script
            );

            return () => {
                if (
                    widgetIdRef.current !==
                        null &&
                    window.turnstile
                ) {
                    window.turnstile.remove(
                        widgetIdRef.current
                    );

                    widgetIdRef.current =
                        null;
                }
            };
        }, [
            siteKey,
            action,
            theme,
        ]);

        return (
            <div ref={containerRef} />
        );
    }
);

export default Turnstile;
