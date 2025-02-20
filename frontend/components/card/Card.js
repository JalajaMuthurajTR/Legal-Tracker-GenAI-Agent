import styles from "./Card.module.css";
import { Folder } from "lucide-react"; // Using Lucide icons

export default function Card({ projectName, date, testCases, agent }) {
    return (
        <div className={styles.card}>
            <div className={styles.leftPane}>
                <Folder className={styles.icon} />
                <h2 className={styles.projectName}>{projectName}</h2>
            </div>
            <div className={styles.rightPane}>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Test Cases:</strong> {testCases}</p>
                <p><strong>Agent:</strong> {agent}</p>
            </div>
        </div>
    );
}
