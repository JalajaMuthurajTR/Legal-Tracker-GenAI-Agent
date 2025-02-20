import styles from "./CardHolder.module.css";

export default function CardHolder({ children }) {
    return <div className={styles.cardHolder}>{children}</div>;
}