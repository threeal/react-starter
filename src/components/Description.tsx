import type { ReactNode } from "react";
import styles from "./Description.module.css";

/**
 * Renders a styled paragraph of descriptive text.
 * @param props - The component props.
 * @param props.children - The text to display.
 * @returns A paragraph element.
 */
export default function Description({ children }: { children: ReactNode }) {
  return <p className={styles.description}>{children}</p>;
}
