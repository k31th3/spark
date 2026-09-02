
import {
    ToastContainer,
    toast,
    cssTransition,
    type ToastPosition
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

type ToastProps = {
    position?: ToastPosition;
    autoClose?: number | false;
};

type ToastComponent = React.FC<ToastProps> & {
    success: (message: string) => void;
    error: (message: string) => void;
    info: (message: string) => void;
    warning: (message: string) => void;
};

let toastPosition: ToastPosition = "top-center";

const FadeTransition = cssTransition({
    enter: "toast-fade-enter",
    exit: "toast-fade-exit",
    collapse: false
});

const Toast: ToastComponent = ({
    position = "top-center",
    autoClose = false
}) => {
    toastPosition = position;

    return (
        <ToastContainer
            autoClose={autoClose}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            transition={FadeTransition}
        />
    );
};

Toast.success = (message) => {
    toast.success(message, {
        position: toastPosition
    });
};

Toast.error = (message) => {
    toast.error(message, {
        position: toastPosition
    });
};

Toast.info = (message) => {
    toast.info(message, {
        position: toastPosition
    });
};

Toast.warning = (message) => {
    toast.warning(message, {
        position: toastPosition
    });
};

export default Toast;
