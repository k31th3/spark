import { Button, Modal } from "@/components";

import styles from "./ContactModals.module.css";

export interface ReviewRow {
    id: string;
    label: string;
    value: string;
}

interface Props {
    open: boolean;
    rows: ReviewRow[];
    isSubmitting: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

function ContactReview({ open, rows, isSubmitting, onClose, onConfirm }: Props) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            dismissible={!isSubmitting}
            eyebrow="Review"
            title="Everything look right?"
            description="Take a quick look at your details before we send them to our team.">

            <div className={styles.rows}>
                {rows.map(({ id, label, value }) => (
                    <div key={id} className={styles.row}>
                        <span className={styles.label}>{label}</span>
                        <p className={styles.value}>
                            {value || <span className={styles.empty}>Not provided</span>}
                        </p>
                    </div>
                ))}
            </div>

            <Modal.Footer>
                <Button
                    variant="outline"
                    size="hero"
                    roll
                    disabled={isSubmitting}
                    onClick={onClose}>
                    Edit details
                </Button>

                <Button
                    variant="dark"
                    size="hero"
                    glow
                    roll={!isSubmitting}
                    arrow={!isSubmitting}
                    disabled={isSubmitting}
                    data-autofocus
                    onClick={onConfirm}>
                    {isSubmitting
                        ? <span className={styles.spinner} role="status" aria-label="Sending" />
                        : "Confirm & send"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ContactReview;