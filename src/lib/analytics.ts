const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initGA() {
    if (!GA_MEASUREMENT_ID) return;

    const script = document.createElement("script");

    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    window.gtag = function (...args: unknown[]) {
        window.dataLayer.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
}