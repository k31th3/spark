import { PiBuildings } from "react-icons/pi";

import { Button, Reveal } from "@/components";
import { FOOTER_DETAILS } from "@/components/Footer/Footer.config";

import styles from "./ContactUs.module.css";

/* =========================================================
   MAP
========================================================= */

const office = FOOTER_DETAILS.find((d) => d.label === "Office");

const ADDRESS = office?.value ?? "";

const EMBED_SRC: string =
    (import.meta.env.VITE_CONTACT_MAP_EMBED as string | undefined) ??
    `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const DIRECTIONS_HREF: string =
    office?.href ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export default function ContactMap() {
    if (!ADDRESS) return null;

    return (
        <section aria-labelledby="map-heading" className={styles.map}>
            <Reveal variant="slide">
                <div className={styles.mapBar}>
                    <h2 id="map-heading" className={styles.mapTitle}>
                        Visit our office
                    </h2>

                    <Button
                        href={DIRECTIONS_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlineDark"
                        size="hero"
                        roll
                        arrow
                        className="w-fit shrink-0"
                    >
                        Get directions
                    </Button>
                </div>
            </Reveal>

            <Reveal variant="fade" delay={100}>
                <div className={styles.mapWrap}>
                    <div className={styles.mapFrame}>
                        <iframe
                            title={`Map showing ${ADDRESS}`}
                            src={EMBED_SRC}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                            className={styles.mapIframe}
                        />
                    </div>

                    {/* Overlay on sm+, sits under the map on mobile */}
                    <address className={styles.officeCard}>
                        <div className={styles.officeHead}>
                            <span
                                aria-hidden="true"
                                className={styles.officeIcon}
                            >
                                <PiBuildings size={18} />
                            </span>

                            <div>
                                <p className={styles.officeCountry}>
                                    Philippines
                                </p>
                                <p className={styles.officeTag}>
                                    Head office
                                </p>
                            </div>
                        </div>

                        <p className={styles.officeAddress}>{ADDRESS}</p>
                    </address>
                </div>
            </Reveal>
        </section>
    );
}