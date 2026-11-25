import { LuCheck } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

import { Button, Grid, Modal, Text } from "@/components";

import styles from "./ContactModals.module.css";

interface Props {
    open: boolean;
    onClose: () => void;
}

function ContactSuccess({ open, onClose }: Props) {
    const navigate = useNavigate();

    const goHome = () => {
        onClose();
        navigate("/");
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            eyebrow="Message sent"
            title="Thank you. We've got your message."
            description="Our team will get back to you within one business day.">

            <Grid.VStack gap={6}>
                <span className={styles.badge}>
                    <LuCheck size={28} aria-hidden="true" />
                </span>

                <Text variant="body" color="muted">
                    A member of our team will read your message and reply to the email you provided.
                </Text>
            </Grid.VStack>

            <Modal.Footer>
                <Button variant="outline" size="hero" roll onClick={onClose}>
                    Close
                </Button>

                <Button variant="dark" size="hero" glow roll arrow data-autofocus onClick={goHome}>
                    Back to Home
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ContactSuccess;