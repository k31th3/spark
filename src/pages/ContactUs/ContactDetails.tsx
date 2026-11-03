import { Link } from "react-router-dom";
import { FiMail, FiMapPin, FiMessageSquare, FiPhone } from "react-icons/fi";
import type { IconType } from "react-icons";

import { Icon } from "@/components";
import {
    FOOTER_DETAILS,
    FOOTER_SOCIAL_LINKS,
} from "@/components/Footer/Footer.config";

import { LIVE_CHAT_HREF } from "./liveChat";

import styles from "./ContactUs.module.css";

/* =========================================================
   ICONS
========================================================= */

type DetailIcon = {
    icon: IconType;
    variant: "primary" | "orange" | "pink";
};

const DETAIL_ICONS: Partial<Record<string, DetailIcon>> = {
    "Direct Email": { icon: FiMail, variant: "primary" },
    Office: { icon: FiMapPin, variant: "orange" },
    Phone: { icon: FiPhone, variant: "pink" },
};

const isExternal = (href: string) => /^https?:\/\//.test(href);

/* =========================================================
   CONTACT DETAILS
========================================================= */

export default function ContactDetails() {
    return (
        <div className={styles.details}>
            <ul role="list" className={styles.detailList}>
                {FOOTER_DETAILS.map((detail) => {
                    const meta = DETAIL_ICONS[detail.label];

                    return (
                        <li key={detail.label} className={styles.detailRow}>
                            {meta && (
                                <Icon
                                    icon={meta.icon}
                                    variant={meta.variant}
                                    size="md"
                                    avatar
                                    className="shrink-0"
                                    aria-hidden="true"
                                />
                            )}

                            <div className={styles.detail}>
                                <p className={styles.detailLabel}>
                                    ({detail.label})
                                </p>

                                <p className={styles.detailValue}>
                                    {detail.href ? (
                                        <a
                                            href={detail.href}
                                            {...(isExternal(detail.href)
                                                ? {
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                  }
                                                : {})}
                                        >
                                            {detail.value}
                                        </a>
                                    ) : (
                                        detail.value
                                    )}
                                </p>
                            </div>
                        </li>
                    );
                })}
            </ul>

            {/* ===== LIVE CHAT ===== */}

            <div className={styles.detailRow}>
                <Icon
                    icon={FiMessageSquare}
                    variant="primary"
                    size="md"
                    avatar
                    className="shrink-0"
                    aria-hidden="true"
                />

                <div className={styles.detail}>
                    <p className={styles.detailLabel}>(Live Chat)</p>

                    <p className={styles.detailValue}>
                        Chat with our team in real time
                    </p>

                    <Link to={LIVE_CHAT_HREF} className={styles.chatBtn}>
                        Start chat <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>

            {/* ===== SOCIALS (GRADIENT ICONS) ===== */}

            {FOOTER_SOCIAL_LINKS.length > 0 && (
                <div className={`${styles.detail} ${styles.detailIndent}`}>
                    <p className={styles.detailLabel}>(Follow)</p>

                    <ul role="list" className={styles.socials}>
                        {FOOTER_SOCIAL_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    aria-label={link.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                >
                                    <Icon
                                        icon={link.icon}
                                        variant="gradient"
                                        size="md"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}