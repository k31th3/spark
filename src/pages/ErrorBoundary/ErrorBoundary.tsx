import { Component, ErrorInfo, type ReactNode } from "react";
import styles from "./ErrorBoundary.module.css"

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.mainContainer}>
          <div className={styles.container}>
            <div className={styles.icon}>🛠️</div>
            <h1 className={styles.title}>
              Service Unavailable
            </h1>
            <p className={styles.description}>
              This page is temporarily unavailable. It may be due to maintenance
              or an unexpected issue. Please try again in a few minutes.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
